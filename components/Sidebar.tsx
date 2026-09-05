import { getLessonsByCourse } from '@/lib/lessons';

interface SidebarProps {
  currentCourse?: string;
  currentLesson?: string;
  completedLessonsCount?: number;
  totalLessonsCount?: number;
}

export default function Sidebar({ 
  currentCourse = 'html', 
  currentLesson, 
  completedLessonsCount = 0,
  totalLessonsCount = 0
}: SidebarProps) {
  const lessons = getLessonsByCourse(currentCourse);

  return (
    <aside className="w-72 bg-slate-50 border-l border-slate-200 min-h-[calc(100vh-4rem)] p-4 hidden lg:block overflow-y-auto sticky top-16">
      
      {/* ملخص التقدم في الأعلى */}
      <div className="mb-6 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-sm font-bold text-slate-700 mb-2">تقدمك في الدورة</h3>
        <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-500" 
            style={{ width: `${totalLessonsCount > 0 ? (completedLessonsCount / totalLessonsCount) * 100 : 0}%` }}
          ></div>
        </div>
        <p className="text-xs text-slate-500 text-left font-mono" dir="ltr">
          {completedLessonsCount} / {totalLessonsCount} Lessons
        </p>
      </div>

      {/* عنوان القائمة */}
      <h2 className="text-lg font-bold text-slate-800 mb-4 px-2 flex items-center gap-2">
        <span>📚</span>
        <span>دروس {currentCourse.toUpperCase()}</span>
      </h2>
      
      {/* قائمة الدروس */}
      <ul className="space-y-1">
        {lessons.map((lesson, index) => {
          const isActive = lesson.id === currentLesson;
          const isCompleted = index < completedLessonsCount - 1;
          
          return (
            <li key={lesson.id}>
              <a 
                href={`/learn/${currentCourse}/${lesson.id}`}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-satr-primary text-white shadow-md shadow-satr-primary/20' 
                    : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {/* أيقونة الحالة (رقم أو علامة صح) */}
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  isActive ? 'bg-white/20 text-white' : 
                  isCompleted ? 'bg-green-100 text-green-600' : 'bg-slate-200 text-slate-500'
                }`}>
                  {isCompleted ? '✓' : lesson.order}
                </span>
                
                {/* عنوان الدرس */}
                <span className="flex-1 leading-tight">{lesson.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}