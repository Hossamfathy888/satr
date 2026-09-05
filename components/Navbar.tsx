import Link from 'next/link';
import { availableCourses } from '@/lib/lessons';
import SearchBox from './SearchBox';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center gap-4">
          
          {/* الشعار */}
          <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer group">
            <span className="text-2xl font-extrabold text-satr-primary group-hover:scale-105 transition-transform">سطر</span>
            <span className="text-slate-400 mr-2 text-sm font-medium">| Satr</span>
          </Link>
          
          {/* شريط البحث - يظهر في الشريط العلوي على الشاشات الكبيرة */}
          <div className="hidden lg:block flex-1 max-w-md">
            <SearchBox />
          </div>

          {/* روابط الدورات */}
          <div className="hidden md:flex space-x-4 space-x-reverse">
            {availableCourses.map((course) => {
              const firstLessonId = course.id === 'html' ? '01-introduction' : '01-intro';
              
              return (
                <Link 
                  key={course.id}
                  href={`/learn/${course.id}/${firstLessonId}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-satr-primary dark:hover:text-satr-primary px-3 py-2 rounded-md text-sm font-bold transition-colors flex items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span>{course.icon}</span>
                  <span>{course.name}</span>
                </Link>
              );
            })}
          </div>

          {/* الأزرار اليمنى */}
          <div className="flex items-center gap-2">
            {/* زر الوضع الليلي */}
            <ThemeToggle />
            
            {/* زر البحث للموبايل */}
            <div className="lg:hidden">
              <SearchBox />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}