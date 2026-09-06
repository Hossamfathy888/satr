'use client';

interface AdBannerProps {
  size: 'small' | 'medium' | 'large' | 'sidebar';
  label?: string;
  className?: string;
}

export default function AdBanner({ size, label = 'ضع إعلانك هنا', className = '' }: AdBannerProps) {
  const sizeClasses = {
    small: 'h-24',
    medium: 'h-32',
    large: 'h-48',
    sidebar: 'h-96',
  };

  return (
    <div 
      className={`w-full ${sizeClasses[size]} bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:border-satr-primary/50 transition-colors cursor-pointer group ${className}`}
      onClick={() => alert('هنا سيتم ربط Google AdSense أو شبكة إعلانية أخرى')}
    >
      <span className="text-2xl mb-2">📢</span>
      <span className="text-sm font-bold uppercase tracking-wider mb-1">{label}</span>
      <span className="text-xs opacity-70">اضغط للتفعيل</span>
    </div>
  );
}