'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  limitations?: string[];
  highlighted?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    id: 'free',
    name: 'المجاني',
    price: '0',
    period: 'للأبد',
    description: 'مثالي للمبتدئين الذين يريدون استكشاف الأساسيات.',
    features: [
      'الوصول لجميع دروس HTML',
      'محرر الأكواد التفاعلي',
      'اختبارات بسيطة',
    ],
    limitations: [
      '⏰ محدود بـ 4 دروس يومياً',
      '📺 يحتوي على إعلانات',
      '🔒 لا يمكن حفظ التقدم في السحابة',
    ],
    cta: 'المتابعة بالخطة المجانية',
  },
  {
    id: 'premium',
    name: 'بريميوم',
    price: '99',
    period: 'شهرياً',
    description: 'للمتعلمين الجادين الذين يريدون تجربة كاملة.',
    features: [
      'جميع ميزات الخطة المجانية',
      'تجربة خالية من الإعلانات',
      'الوصول لجميع الدورات (CSS, JS, React)',
      'دروس غير محدودة يومياً',
      'شهادات إتمام الدورات',
      'حفظ التقدم في السحابة',
      'دعم فني عبر البريد',
    ],
    highlighted: true,
    cta: 'اشترك الآن',
  },
  {
    id: 'pro',
    name: 'احترافي',
    price: '249',
    period: 'شهرياً',
    description: 'للمحترفين والفرق الذين يريدون محتوى متقدم.',
    features: [
      'جميع ميزات بريميوم',
      'دورات متقدمة (React, Node.js)',
      'مشاريع عملية حقيقية',
      'جلسات mentoring شهرية',
      'مجتمع خاص على Discord',
      'أولوية في الدعم الفني',
      'تحديثات مبكرة للمحتوى',
    ],
    cta: 'ترقية للاحترافي',
  },
];

export default function PricingPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('satr_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      router.push('/auth');
    }
  }, [router]);

  const handleSubscribe = (plan: Plan) => {
    if (plan.id === 'free') {
      // تحديث خطة المستخدم
      if (user) {
        user.plan = 'free';
        localStorage.setItem('satr_user', JSON.stringify(user));
      }
      alert('تم تفعيل الخطة المجانية! يمكنك الآن الوصول إلى 4 دروس يومياً.');
      router.push('/courses');
    } else {
      setSelectedPlan(plan);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 font-sans">
      <Navbar />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* الترحيب */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              مرحباً بك، {user.name}! 👋
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              اختر الخطة المناسبة لك وابدأ رحلة التعلم
            </p>
          </div>

          {/* بطاقات الخطط */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlighted
                    ? 'bg-satr-primary text-white shadow-2xl shadow-satr-primary/30 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ الأكثر شعبية
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-5xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-satr-primary'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg mr-2 ${plan.highlighted ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                    جنيه / {plan.period}
                  </span>
                </div>

                {/* المميزات */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 ${
                        plan.highlighted ? 'bg-white/20 text-white' : 'bg-green-100 text-green-600'
                      }`}>
                        ✓
                      </span>
                      <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* القيود (للخطة المجانية) */}
                {plan.limitations && (
                  <ul className="space-y-2 mb-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {plan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-white text-satr-primary hover:bg-slate-100'
                      : 'bg-satr-primary text-white hover:bg-satr-hover'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* ضمان الاسترداد */}
          <div className="text-center mt-12">
            <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center justify-center gap-2">
              <span></span>
              <span>ضمان استرداد المال خلال 7 أيام بدون أي أسئلة</span>
            </p>
          </div>
        </div>
      </section>

      {/* نافذة الدفع (للباقات المدفوعة) */}
      {selectedPlan && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-satr-primary text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">الاشتراك في {selectedPlan.name}</h3>
                <p className="text-sm text-white/80 mt-1">{selectedPlan.price} جنيه / {selectedPlan.period}</p>
              </div>
              <button 
                onClick={() => setSelectedPlan(null)}
                className="text-white hover:bg-white/20 p-2 rounded-lg text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="text-center py-8">
                <div className="text-6xl mb-4">💳</div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  نظام الدفع قيد التطوير
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  سيتم إضافة بوابات الدفع (Paymob, Stripe) قريباً.
                </p>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="px-8 py-3 bg-satr-primary text-white rounded-lg font-bold hover:bg-satr-hover"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}