import Navbar from '@/components/Navbar';
import Link from 'next/link';
import AdBanner from '@/components/AdBanner';

export default function Home() {
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
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center py-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-6xl font-extrabold text-satr-primary mb-6">
                سطر <span className="text-slate-800 dark:text-white">| Satr</span>
              </h1>
              <p className="text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                منصة عربية لتعلم البرمجة بأسلوب تفاعلي وبسيط.
                <br />
                ابدأ رحلتك في عالم البرمجة الآن!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
                <Link 
                  href="/learn/html/01-introduction"
                  className="bg-satr-primary hover:bg-satr-hover text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                >
                  <span></span>
                  <span>ابدأ تعلم HTML</span>
                </Link>
                
                {/* تم التعديل: يذهب إلى صفحة عرض جميع الدورات */}
                <Link 
                  href="/courses"
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-satr-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-satr-primary text-lg flex items-center justify-center gap-2"
                >
                  <span>📚</span>
                  <span>تصفح الدورات</span>
                </Link>
              </div>

              {/* إحصائيات */}
              <div className="grid grid-cols-3 gap-8 text-center mb-16">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="text-4xl font-bold text-satr-primary mb-2">4</div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">دورات متكاملة</div>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="text-4xl font-bold text-satr-primary mb-2">22+</div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">درس تفاعلي</div>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="text-4xl font-bold text-satr-primary mb-2">100%</div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">محتوى عربي</div>
                </div>
              </div>
            </div>

            {/* مميزات المنصة */}
            <div className="max-w-6xl mx-auto w-full mb-16">
              <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                لماذا تختار منصة سطر؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">محرر أكواد احترافي</h3>
                  <p className="text-slate-600 dark:text-slate-400">جرب الكود مباشرة في المتصفح مع محرر يشبه VS Code.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">اختبارات تفاعلية</h3>
                  <p className="text-slate-600 dark:text-slate-400">اختبر فهمك بعد كل درس واحصل على تغذية راجعة فورية.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">تتبع التقدم</h3>
                  <p className="text-slate-600 dark:text-slate-400">تابع رحلتك التعليمية واحفظ تقدمك تلقائياً.</p>
                </div>
              </div>
            </div>

            {/* قسم الاشتراكات - مع زر يوجه للتسجيل أولاً */}
            <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                  اختر خطتك وابدأ التعلم
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  سجل حسابك أولاً، ثم اختر الخطة المناسبة لك
                </p>
              </div>

              {/* ملخص الخطط */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">المجاني</h3>
                  <div className="text-3xl font-extrabold text-satr-primary mb-4">0 جنيه</div>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 text-right">
                    <li>✓ 4 دروس يومياً</li>
                    <li>✓ محرر الأكواد</li>
                    <li>✗ يحتوي إعلانات</li>
                  </ul>
                </div>
                <div className="bg-satr-primary p-6 rounded-xl text-white shadow-xl scale-105">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">الأكثر شعبية</div>
                  <h3 className="text-xl font-bold mb-2">بريميوم</h3>
                  <div className="text-3xl font-extrabold mb-4">99 جنيه/شهر</div>
                  <ul className="text-sm text-white/90 space-y-2 text-right">
                    <li>✓ دروس غير محدودة</li>
                    <li>✓ بدون إعلانات</li>
                    <li>✓ كل الدورات</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">احترافي</h3>
                  <div className="text-3xl font-extrabold text-satr-primary mb-4">249 جنيه/شهر</div>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 text-right">
                    <li>✓ كل ميزات بريميوم</li>
                    <li>✓ mentoring شهري</li>
                    <li>✓ مجتمع خاص</li>
                  </ul>
                </div>
              </div>

              {/* زر التسجيل */}
              <div className="text-center">
                <Link
                  href="/auth"
                  className="inline-block bg-satr-primary hover:bg-satr-hover text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
                >
                  سجل الآن واختر خطتك ←
                </Link>
              </div>
            </section>
          </section>
        </main>

        {/* الإعلان الجانبي الأيسر */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <AdBanner size="sidebar" label="ضع إعلانك هنا" />
          </div>
        </aside>
      </div>

      {/* الفوتر */}
      <footer className="bg-satr-dark text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-satr-primary mb-4">سطر | Satr</h3>
              <p className="text-slate-400 text-sm">منصة عربية لتعلم البرمجة بأسلوب تفاعلي وبسيط.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">الدورات</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/learn/html/01-introduction" className="hover:text-white transition-colors">HTML</Link></li>
                <li><Link href="/learn/css/01-intro" className="hover:text-white transition-colors">CSS</Link></li>
                <li><Link href="/learn/javascript/01-intro" className="hover:text-white transition-colors">JavaScript</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">الشركة</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">تابعنا</h4>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:scale-110 transition-transform">📘</a>
                <a href="#" className="hover:scale-110 transition-transform">🐦</a>
                <a href="#" className="hover:scale-110 transition-transform">📸</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2026 منصة سطر. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}