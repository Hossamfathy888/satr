import Navbar from '@/components/Navbar';
import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import PricingSection from '@/components/PricingSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* الإعلان العلوي */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <AdBanner size="large" />
      </div>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold text-satr-primary mb-6">
            سطر <span className="text-slate-800">| Satr</span>
          </h1>
          <p className="text-2xl text-slate-600 mb-12 leading-relaxed">
            منصة عربية لتعلم البرمجة بأسلوب تفاعلي وبسيط.
            <br />
            ابدأ رحلتك في عالم البرمجة الآن!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <Link 
              href="/learn/html/01-introduction"
              className="bg-satr-primary hover:bg-satr-hover text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
            >
              <span>🌐</span>
              <span>ابدأ تعلم HTML</span>
            </Link>
            
            <Link 
              href="/learn/html/01-introduction"
              className="bg-white hover:bg-slate-50 text-satr-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-satr-primary text-lg flex items-center justify-center gap-2"
            >
              <span>📚</span>
              <span>تصفح الدروس</span>
            </Link>
          </div>

          {/* إحصائيات */}
          <div className="grid grid-cols-3 gap-8 text-center mb-16">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-4xl font-bold text-satr-primary mb-2">3</div>
              <div className="text-slate-600 font-medium">دورات متكاملة</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-4xl font-bold text-satr-primary mb-2">22+</div>
              <div className="text-slate-600 font-medium">درس تفاعلي</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-4xl font-bold text-satr-primary mb-2">100%</div>
              <div className="text-slate-600 font-medium">محتوى عربي</div>
            </div>
          </div>
        </div>

        {/* مميزات المنصة */}
        <div className="max-w-6xl mx-auto w-full mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            لماذا تختار منصة سطر؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">محرر أكواد احترافي</h3>
              <p className="text-slate-600">جرب الكود مباشرة في المتصفح مع محرر يشبه VS Code.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">اختبارات تفاعلية</h3>
              <p className="text-slate-600">اختبر فهمك بعد كل درس واحصل على تغذية راجعة فورية.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">تتبع التقدم</h3>
              <p className="text-slate-600">تابع رحلتك التعليمية واحفظ تقدمك تلقائياً.</p>
            </div>
          </div>
        </div>

        {/* إعلان وسط الصفحة */}
        <div className="max-w-4xl mx-auto w-full mb-16">
          <AdBanner size="medium" />
        </div>

        {/* قسم الاشتراكات */}
        <PricingSection />

        {/* إعلان قبل الفوتر */}
        <div className="max-w-4xl mx-auto w-full mt-16">
          <AdBanner size="small" />
        </div>
      </main>

      {/* الفوتر */}
      <footer className="bg-satr-dark text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-satr-primary mb-4">سطر | Satr</h3>
              <p className="text-slate-400 text-sm">
                منصة عربية لتعلم البرمجة بأسلوب تفاعلي وبسيط.
              </p>
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
                <a href="#" className="hover:scale-110 transition-transform">💼</a>
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