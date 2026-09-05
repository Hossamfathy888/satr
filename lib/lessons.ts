import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  id: string;
  title: string;
  course: string;
  order: number;
  content: string;
  codeExample: string;
  quiz: Quiz | null;
}

// الحصول على قائمة دروس دورة معينة
export function getLessonsByCourse(course: string): Lesson[] {
  const courseDir = path.join(contentDirectory, course);
  if (!fs.existsSync(courseDir)) return [];

  const fileNames = fs.readdirSync(courseDir);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(courseDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title,
        course,
        order: data.order,
        content: '', // المحتوى يُجلب منفصلاً لتوفير الذاكرة
        codeExample: data.codeExample || '',
        quiz: data.quiz || null,
      };
    })
    .sort((a, b) => a.order - b.order);
}

// الحصول على بيانات درس معين بالكامل
export function getLessonData(course: string, id: string): Lesson | null {
  const fullPath = path.join(contentDirectory, course, `${id}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id,
    title: data.title,
    course,
    order: data.order,
    content, // هنا نرجع محتوى المارك داون الخام ليتم تصييره
    codeExample: data.codeExample || '',
    quiz: data.quiz || null,
  };
}

export const availableCourses = [
  { id: 'html', name: 'HTML', icon: '🌐' },
  { id: 'css', name: 'CSS', icon: '🎨' },
  { id: 'javascript', name: 'JavaScript', icon: '⚡' },
  { id: 'react', name: 'React', icon: '⚛️' },
];