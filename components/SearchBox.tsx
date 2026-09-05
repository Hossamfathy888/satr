'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { searchIndex } from '@/lib/search-index'; // <-- تم التحديث هنا

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchIndex>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 2) {
      const filtered = searchIndex.filter(
        (item) => item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 8)); // إظهار أول 8 نتائج
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSelect = (course: string, id: string) => {
    router.push(`/learn/${course}/${id}`);
    setQuery('');
    setIsOpen(false);
  };

  // إغلاق النتائج عند النقر خارج الصندوق
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <div className="relative w-full max-w-md" ref={wrapperRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث في الدروس..."
          className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-satr-primary/50 focus:border-satr-primary bg-white dark:bg-slate-800 dark:border-slate-600 dark:text-white transition-colors"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* نتائج البحث المنبثقة */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 px-3 py-2">
              {results.length} نتيجة لـ "{query}"
            </div>
            {results.map((item) => (
              <button
                key={`${item.course}-${item.id}`}
                onClick={() => handleSelect(item.course, item.id)}
                className="w-full text-right px-3 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-1 bg-satr-primary/10 text-satr-primary rounded">
                    {item.course.toUpperCase()}
                  </span>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* رسالة عند عدم وجود نتائج */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl z-50 p-4 text-center">
          <p className="text-slate-500 dark:text-slate-400">لم يتم العثور على نتائج 😕</p>
        </div>
      )}
    </div>
  );
}