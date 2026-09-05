import { getLessonData, getLessonsByCourse } from '@/lib/lessons';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import CommentSection from '@/components/CommentSection';
import ClientTryItButton from '@/components/ClientTryItButton';
import QuizComponent from '@/components/QuizComponent';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// دالة تحسين SEO ديناميكياً لكل درس
export async function generateMetadata({ params }: { params: Promise<{ course: string; lesson: string }> }) {
  const { course, lesson: lessonId } = await params;
  const lesson = getLessonData(course, lessonId);

  if (!lesson) {
    return { title: 'درس غير موجود | سطر' };
  }

  return {
    title: `${lesson.title} | دورة ${course.toUpperCase()} - منصة سطر`,
    description: `تعلم ${lesson.title} في دورة ${course.toUpperCase()} على منصة سطر. درس تفاعلي مع أمثلة عملية واختبارات.`,
    openGraph: {
      title: `${lesson.title} | منصة سطر`,
      description: `تعلم ${course.toUpperCase()} بأسلوب تفاعلي وبسيط على منصة سطر.`,
      type: 'article',
    },
  };
}

interface LessonPageProps {
  params: Promise<{
    course: string;
    lesson: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { course, lesson: lessonId } = await params;
  
  const lesson = getLessonData(course, lessonId);
  if (!lesson) {
    notFound();
  }

  const courseLessons = getLessonsByCourse(course);
  const currentLessonIndex = courseLessons.findIndex(l => l.id === lessonId);
  const progress = ((currentLessonIndex + 1) / courseLessons.length) * 100;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans transition-colors">
      <Navbar />
      
      <div className="flex">
        <Sidebar 
          currentCourse={course} 
          currentLesson={lessonId} 
          completedLessonsCount={currentLessonIndex + 1}
          totalLessonsCount={courseLessons.length}
        />
        
        <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
          
          {/* مؤشر التقدم */}
          <div className="mb-10">
            <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
              <span>التقدم في دورة {course.toUpperCase()}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
              <div 
                className="bg-satr-primary h-3 rounded-full transition-all duration-700 ease-out shadow-sm" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              💡 يتم حفظ تقدمك تلقائياً في هذا المتصفح.
            </p>
          </div>

          {/* عنوان ومحتوى الدرس (Markdown) */}
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">{lesson.title}</h1>
          
          <div className="prose prose-slate prose-lg max-w-none dark:prose-invert prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-satr-primary prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:text-satr-primary prose-code:px-1 prose-code:rounded prose-blockquote:border-r-satr-primary prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {lesson.content}
            </ReactMarkdown>
          </div>

          {/* مربع الكود */}
          {lesson.codeExample && (
            <div className="bg-satr-dark rounded-xl p-6 my-8 overflow-x-auto shadow-lg border border-slate-700" dir="ltr">
              <pre className="font-mono text-sm leading-relaxed text-green-400">
                <code>{lesson.codeExample}</code>
              </pre>
            </div>
          )}

          {/* زر جرب بنفسك */}
          {lesson.codeExample && <ClientTryItButton initialCode={lesson.codeExample} />}

          {/* الاختبار التفاعلي */}
          {lesson.quiz && <QuizComponent quiz={lesson.quiz} />}

          {/* أزرار التنقل بين الدروس */}
          <div className="flex justify-between mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            {currentLessonIndex > 0 ? (
              <a 
                href={`/learn/${course}/${courseLessons[currentLessonIndex - 1].id}`}
                className="flex items-center gap-2 text-satr-primary hover:text-satr-hover font-bold transition-colors"
              >
                <span>→</span>
                <span>الدرس السابق: {courseLessons[currentLessonIndex - 1].title}</span>
              </a>
            ) : <div></div>}

            {currentLessonIndex < courseLessons.length - 1 ? (
              <a 
                href={`/learn/${course}/${courseLessons[currentLessonIndex + 1].id}`}
                className="flex items-center gap-2 text-satr-primary hover:text-satr-hover font-bold transition-colors"
              >
                <span>الدرس التالي: {courseLessons[currentLessonIndex + 1].title}</span>
                <span>←</span>
              </a>
            ) : (
              <div className="text-green-600 dark:text-green-400 font-bold flex items-center gap-2">
                <span>🎉</span>
                <span>أتممت هذه الدورة بنجاح!</span>
              </div>
            )}
          </div>

          {/* قسم التعليقات */}
          <CommentSection />

        </main>
      </div>
    </div>
  );
}