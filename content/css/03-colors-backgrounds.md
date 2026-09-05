---
title: "الألوان والخلفيات"
order: 3
course: "css"
codeExample: |
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    .box1 { background-color: tomato; color: white; padding: 15px; margin: 10px; }
    .box2 { background-color: #4F46E5; color: white; padding: 15px; margin: 10px; }
    .box3 { background-color: rgb(0, 128, 0); color: white; padding: 15px; margin: 10px; }
    .box4 { background: linear-gradient(to right, #4F46E5, #06B6D4); color: white; padding: 15px; }
  </style>
  </head>
  <body>
    <div class="box1">لون بالاسم (Tomato)</div>
    <div class="box2">لون بنظام HEX (#4F46E5)</div>
    <div class="box3">لون بنظام RGB (Green)</div>
    <div class="box4">خلفية متدرجة (Gradient)</div>
  </body>
  </html>
quiz:
  question: "أي من القيم التالية تمثل اللون الأبيض بنظام HEX؟"
  options: ["#000000", "#FFFFFF", "#FF0000", "#FFFF00"]
  correctAnswer: 1
---

يمكن تحديد الألوان في CSS بعدة طرق:
- **بالاسم:** مثل `red`, `blue`, `tomato`.
- **نظام HEX:** مثل `#FF0000` (الأحمر).
- **نظام RGB:** مثل `rgb(255, 0, 0)`.
- **نظام RGBA:** مثل `rgba(255, 0, 0, 0.5)` (يدعم الشفافية).

## الخلفيات (Backgrounds):
- `background-color`: لون الخلفية.
- `background-image`: صورة الخلفية.
- `linear-gradient()`: لإنشاء تدرجات لونية جميلة.