---
title: "المحددات (Selectors)"
order: 2
course: "css"
codeExample: |
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    /* محدد العنصر */
    p { color: blue; }
    /* محدد الفئة (Class) */
    .highlight { background-color: yellow; font-weight: bold; }
    /* محدد المعرف (ID) */
    #main-title { font-size: 28px; color: darkred; }
  </style>
  </head>
  <body>
    <h1 id="main-title">عنوان رئيسي</h1>
    <p>فقرة عادية.</p>
    <p class="highlight">فقرة مميزة بخلفية صفراء.</p>
  </body>
  </html>
---

المحددات (Selectors) تُستخدم لاستهداف عناصر HTML معينة وتنسيقها.

## أنواع المحددات الشائعة:
- **محدد العنصر (Element Selector):** يستهدف جميع الوسوم من نوع معين (مثل `p`, `h1`).
- **محدد الفئة (Class Selector):** يبدأ بنقطة `.` ويستهدف العناصر التي تحمل نفس اسم الفئة (مثل `.btn`). يمكن استخدامه لعدة عناصر.
- **محدد المعرف (ID Selector):** يبدأ بـ `#` ويستهدف عنصراً واحداً فريداً في الصفحة (مثل `#header`).

> 💡 **قاعدة:** استخدم `class` عندما تريد تطبيق نفس التنسيق على عدة عناصر، و `id` للعناصر الفريدة.