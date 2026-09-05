'use client';

import { useState } from 'react';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
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
      'إعلانات داخل الدروس',
    ],
    cta: 'ابدأ مجاناً',
  },
  {
    id: 'premium',
    name: 'بريميوم',
    price: '99',
    period: 'شهرياً',
    description: 'للمتعلمين الجادين الذين يريدون تجربة خالية من الإعلانات.',
    features: [
      'جميع ميزات الخطة المجانية',
      'تجربة خالية من الإعلانات',
      'الوصول لجميع الدورات (CSS, JS)',
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

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            اختر الخطة المناسبة لك
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            استثمر في تعلمك اليوم. جميع الخطط تأتي بضمان استرداد المال خلال 7 أيام.
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
                  : 'bg-white text-slate-800 border border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  ⭐ الأكثر شعبية
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/80' : 'text-slate-500'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-5xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-satr-primary'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg mr-2 ${plan.highlighted ? 'text-white/80' : 'text-slate-500'}`}>
                  جنيه / {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 ${
                      plan.highlighted ? 'bg-white/20 text-white' : 'bg-green-100 text-green-600'
                    }`}>
                      ✓
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(plan)}
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
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <span>🔒</span>
            <span>ضمان استرداد المال خلال 7 أيام بدون أي أسئلة</span>
          </p>
        </div>
      </div>

      {/* نافذة الاشتراك المنبثقة */}
      {selectedPlan && (
        <SubscriptionModal 
          plan={selectedPlan} 
          onClose={() => setSelectedPlan(null)} 
        />
      )}
    </section>
  );
}

// مكون النافذة المنبثقة
function SubscriptionModal({ plan, onClose }: { plan: Plan; onClose: () => void }) {
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleSubscribe = () => {
    if (step === 'info') {
      setStep('payment');
    } else if (step === 'payment') {
      setStep('success');
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* الرأس */}
        <div className="bg-satr-primary text-white p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">الاشتراك في خطة {plan.name}</h3>
            <p className="text-sm text-white/80 mt-1">{plan.price} جنيه / {plan.period}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* المحتوى */}
        <div className="p-6">
          {step === 'info' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50"
                />
              </div>
              <button
                onClick={handleSubscribe}
                disabled={!email}
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  email ? 'bg-satr-primary text-white hover:bg-satr-hover' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                متابعة للدفع
              </button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  رقم البطاقة
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    تاريخ الانتهاء
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50"
                  />
                </div>
              </div>
              <button
                onClick={handleSubscribe}
                className="w-full py-3 bg-satr-primary text-white rounded-lg font-bold hover:bg-satr-hover transition-colors"
              >
                إتمام الاشتراك
              </button>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">تم الاشتراك بنجاح!</h4>
              <p className="text-slate-600 mb-6">
                تم تفعيل خطة <span className="font-bold text-satr-primary">{plan.name}</span> على بريدك الإلكتروني.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-satr-primary text-white rounded-lg font-bold hover:bg-satr-hover transition-colors"
              >
                ابدأ التعلم الآن
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}