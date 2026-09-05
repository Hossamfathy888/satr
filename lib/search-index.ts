export interface SearchItem {
  id: string;
  title: string;
  course: string;
}

export const searchIndex: SearchItem[] = [
  // HTML
  { id: '01-introduction', title: 'مقدمة في HTML', course: 'html' },
  { id: '02-elements', title: 'العناصر والوسوم', course: 'html' },
  { id: '03-attributes', title: 'السمات (Attributes)', course: 'html' },
  { id: '04-headings', title: 'العناوين في HTML', course: 'html' },
  { id: '05-paragraphs', title: 'الفقرات وتنسيق النص', course: 'html' },
  { id: '06-links', title: 'الروابط (Links)', course: 'html' },
  { id: '07-images', title: 'الصور (Images)', course: 'html' },
  { id: '08-lists', title: 'القوائم (Lists)', course: 'html' },
  { id: '09-tables', title: 'الجداول (Tables)', course: 'html' },
  { id: '10-forms', title: 'النماذج (Forms)', course: 'html' },
  
  // CSS
  { id: '01-intro', title: 'مقدمة في CSS', course: 'css' },
  { id: '02-selectors', title: 'المحددات (Selectors)', course: 'css' },
  { id: '03-colors-backgrounds', title: 'الألوان والخلفيات', course: 'css' },
  { id: '04-box-model', title: 'نموذج الصندوق (Box Model)', course: 'css' },
  { id: '05-flexbox', title: 'تخطيط Flexbox', course: 'css' },
  { id: '06-grid', title: 'تخطيط CSS Grid', course: 'css' },
  
  // JavaScript
  { id: '01-intro', title: 'مقدمة في JavaScript', course: 'javascript' },
  { id: '02-variables', title: 'المتغيرات (Variables)', course: 'javascript' },
  { id: '03-data-types', title: 'أنواع البيانات (Data Types)', course: 'javascript' },
  { id: '04-conditions', title: 'الشروط (Conditions)', course: 'javascript' },
  { id: '05-loops', title: 'الحلقات (Loops)', course: 'javascript' },
  { id: '06-functions', title: 'الدوال (Functions)', course: 'javascript' },
];
