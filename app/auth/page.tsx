'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    if (mode === 'register' && !formData.name) {
      setError('يرجى إدخال الاسم');
      return;
    }

    // حفظ بيانات المستخدم في localStorage (مؤقتاً حتى نربط قاعدة البيانات)
    const user = {
      name: formData.name || 'مستخدم',
      email: formData.email,
      plan: 'free',
      registeredAt: new Date().toISOString(),
      dailyLessonsCount: 0,
      lastResetDate: new Date().toDateString(),
    };

    localStorage.setItem('satr_user', JSON.stringify(user));
    
    // التوجيه إلى صفحة الاشتراك
    router.push('/pricing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* الشعار */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-4xl font-extrabold text-satr-primary">سطر</span>
            <span className="text-slate-400 mr-2 text-lg">| Satr</span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-4">
            {mode === 'register' ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            {mode === 'register' 
              ? 'سجل الآن لبدء رحلة التعلم' 
              : 'مرحباً بعودتك!'}
          </p>
        </div>

        {/* نموذج التسجيل/الدخول */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="أحمد محمد"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50 focus:border-satr-primary bg-white dark:bg-slate-700 dark:text-white transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@email.com"
                required
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50 focus:border-satr-primary bg-white dark:bg-slate-700 dark:text-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50 focus:border-satr-primary bg-white dark:bg-slate-700 dark:text-white transition-colors"
              />
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-satr-primary hover:bg-satr-hover text-white font-bold rounded-lg transition-colors shadow-lg shadow-satr-primary/30"
            >
              {mode === 'register' ? 'إنشاء الحساب' : 'تسجيل الدخول'}
            </button>
          </form>

          {/* التبديل بين التسجيل والدخول */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {mode === 'register' ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب؟'}
              <button
                onClick={() => setMode(mode === 'register' ? 'login' : 'register')}
                className="text-satr-primary hover:text-satr-hover font-bold mr-1"
              >
                {mode === 'register' ? 'سجل دخولك' : 'أنشئ حساباً'}
              </button>
            </p>
          </div>
        </div>

        {/* العودة للرئيسية */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-satr-primary transition-colors">
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}