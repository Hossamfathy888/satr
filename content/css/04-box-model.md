---
title: "نموذج الصندوق (Box Model)"
order: 4
course: "css"
codeExample: |
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    .box {
      width: 300px;
      padding: 20px;
      border: 5px solid #4F46E5;
      margin: 30px;
      background-color: #f0f8ff;
    }
  </style>
  </head>
  <body>
    <div class="box">
      هذا صندوق يوضح نموذج Box Model.
      المسافة الداخلية (Padding)، الحدود (Border)، والمسافة الخارجية (Margin).
    </div>
  </body>
  </html>
---

كل عنصر في HTML يُعتبر **صندوقاً (Box)**، ويتكون من 4 طبقات من الداخل للخارج:

1. **المحتوى (Content):** النص أو الصورة داخل العنصر.
2. **الحشو (Padding):** مساحة شفافة حول المحتوى (داخل الحدود).
3. **الحدود (Border):** خط يحيط بالعنصر.
4. **الهامش (Margin):** مساحة شفافة خارج الحدود (تفصل العنصر عن العناصر الأخرى).

> 🎯 **نصيحة ذهبية:** أضف `box-sizing: border-box;` للعناصر لجعل `width` و `height` يشملان الـ Padding والـ Border، مما يسهل التحكم في الأبعاد.