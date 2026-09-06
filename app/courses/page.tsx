import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { availableCourses } from '@/lib/lessons';
import AdBanner from '@/components/AdBanner';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12 flex gap-6">
        {/* الإعلان الجانبي الأيمن */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <AdBanner size="sidebar" label="ضع إعلانك هنا" />
          </div>
        </aside>

        {/* المحتوى الرئيسي */}
        <main className="flex-1">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              جميع الدورات المتاحة
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              اختر الدورة التي تناسبك وابدأ رحلة التعلم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map((course) => {
              const firstLessonId = course.id === 'html' ? '01-introduction' : '01-intro';
              return (
                <Link
                  key={course.id}
                  href={`/learn/${course.id}/${firstLessonId}`}
                  className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* أيقونة VS Code للغات */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    {course.id === 'html' && (
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.029 12.48z"/>
                        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.853H64z"/>
                        <path fill="#EBEBEB" d="M64 52.451H82.215l1.257-14.081H64V24.342h33.193l-.332 3.709-3.262 36.593H64zm0 36.644l18.674-5.176 1.292-14.467H64v14.015h19.933l-2.446 27.302-17.487 4.853z"/>
                        <path fill="#FFF" d="M63.952 52.451v14.014H45.736l-1.257-14.014zm0-28.109v14.03H30.997l.332-3.71.657-7.353.332-2.967zm0 64.753v14.015l-17.461-4.847-1.081-12.111-.179-2.002h18.721z"/>
                      </svg>
                    )}
                    {course.id === 'css' && (
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#1572B6" d="M18.814 112.318L8.761 1.661h110.478l-10.064 110.641-45.255 12.521z"/>
                        <path fill="#33A9DC" d="M64.001 116.213l36.531-10.136 8.589-94.536H64.001z"/>
                        <path fill="#FFF" d="M64.001 51.008h18.288l1.263-14.041H64.001V24.342h33.341l-.334 3.709-3.277 36.593H64.001z"/>
                        <path fill="#EBEBEB" d="M64.001 87.724l18.758-5.081 1.298-14.467H64.001v14.015h20.018l-2.457 27.301-17.561 4.853z"/>
                        <path fill="#FFF" d="M64.001 24.342v12.625H30.822l.334-3.709.661-7.353.332-2.967zm0 26.666v12.624H45.793l-.332-3.709-.66-7.353-.333-2.967zm0 36.648v12.624l-17.54-4.853-1.086-12.111-.18-2.002h18.806z"/>
                      </svg>
                    )}
                    {course.id === 'javascript' && (
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
                        <path fill="#323330" d="M116.313 110.235c-.917-5.711-4.641-10.485-15.672-14.921-3.832-1.757-8.111-3.011-9.392-5.914-.459-1.692-.52-2.652-.229-3.673.822-3.324 4.783-4.341 7.919-3.384 2.017.672 3.921 2.224 5.077 4.704 5.373-3.484 5.361-3.46 9.133-5.866-1.377-2.136-2.109-3.124-3.015-4.053-3.243-3.617-7.669-5.486-14.738-5.325l-3.685.479c-3.545.893-6.917 2.746-8.902 5.229-5.946 6.751-4.253 18.532 2.987 23.388 7.131 5.349 17.61 6.565 18.979 11.531 1.333 6.126-4.605 8.095-10.461 7.376-4.317-.893-6.703-3.083-9.32-7.084-4.795 2.77-4.795 2.77-9.716 5.612 1.165 2.556 2.389 3.721 4.341 5.945 9.261 9.393 32.468 8.945 36.692-5.301.168-.548 1.277-4.221.399-9.879zM75.062 37.098H63.551l-.024 49.653c0 10.593.544 20.353-4.665 23.293-5.604 3.172-12.688-2.028-16.724-7.855l-8.592 4.941c2.04 4.524 5.065 7.951 8.938 10.357 5.787 3.472 13.566 4.548 19.469 1.62 6.855-3.148 9.568-9.732 9.533-23.593l.048-49.653 9.468-.024-.048-8.763z"/>
                      </svg>
                    )}
                    {course.id === 'react' && (
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
                        <g stroke="#61DAFB" strokeWidth="2" fill="none">
                          <ellipse cx="64" cy="64" rx="50" ry="18"/>
                          <ellipse cx="64" cy="64" rx="50" ry="18" transform="rotate(60 64 64)"/>
                          <ellipse cx="64" cy="64" rx="50" ry="18" transform="rotate(120 64 64)"/>
                        </g>
                      </svg>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {course.name}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {course.id === 'html' && 'تعلم أساسيات بناء صفحات الويب'}
                    {course.id === 'css' && 'تعلم تنسيق وتجميل المواقع'}
                    {course.id === 'javascript' && 'تعلم البرمجة التفاعلية'}
                    {course.id === 'react' && 'تعلم بناء واجهات المستخدم الحديثة'}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-satr-primary">
                      ابدأ التعلم ←
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {course.id === 'html' && '10 دروس'}
                      {course.id === 'css' && '6 دروس'}
                      {course.id === 'javascript' && '6 دروس'}
                      {course.id === 'react' && 'قريباً'}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>

        {/* الإعلان الجانبي الأيسر */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <AdBanner size="sidebar" label="ضع إعلانك هنا" />
          </div>
        </aside>
      </div>
    </div>
  );
}