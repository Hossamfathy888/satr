'use client';

interface AdBannerProps {
  size: 'small' | 'medium' | 'large' | 'sidebar';
  className?: string;
}

export default function AdBanner({ size, className = '' }: AdBannerProps) {
  const sizeClasses = {
    small: 'h-24',
    medium: 'h-32',
    large: 'h-48',
    sidebar: 'h-64',
  };

  const labels = {
    small: 'إعلان صغير (728x90)',
    medium: 'إعلان متوسط (468x60)',
    large: 'إعلان كبير (970x250)',
    sidebar: 'إعلان جانبي (300x250)',
  };

  return (
    <div 
      className={`w-full ${sizeClasses[size]} bg-gradient-to-r from-slate-100 to-slate-200 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-400 hover:border-satr-primary/50 transition-colors cursor-pointer group ${className}`}
      onClick={() => alert('هنا سيتم ربط Google AdSense أو شبكة إعلانية أخرى')}
    >
      <span className="text-xs font-bold uppercase tracking-wider mb-1">مساحة إعلانية</span>
      <span className="text-sm font-medium group-hover:text-satr-primary transition-colors">{labels[size]}</span>
      <span className="text-xs mt-1 opacity-70">اضغط للتفعيل</span>
    </div>
  );
}