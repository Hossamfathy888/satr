---
title: "تخطيط CSS Grid"
order: 6
course: "css"
codeExample: |
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      padding: 20px;
    }
    .grid-item {
      background-color: #06B6D4;
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 8px;
      font-size: 1.2em;
    }
  </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
    </div>
  </body>
  </html>
---

CSS Grid هو نظام تخطيط ثنائي الأبعاد (صفوف وأعمدة في نفس الوقت)، مثالي لتصميم تخطيطات الصفحات المعقدة.

## الخصائص الأساسية:
- `display: grid;`: لتفعيل Grid.
- `grid-template-columns`: لتحديد عدد وعرض الأعمدة (مثل `repeat(3, 1fr)` لإنشاء 3 أعمدة متساوية).
- `gap`: المسافة بين الخلايا.

> 🆚 **Flexbox vs Grid:** استخدم Flexbox للتخطيطات أحادية البعد (صف أو عمود واحد)، واستخدم Grid للتخطيطات ثنائية الأبعاد (شبكة من الصفوف والأعمدة).