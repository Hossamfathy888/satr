---
title: "مقدمة في JavaScript"
order: 1
course: "javascript"
codeExample: |
  <!DOCTYPE html>
  <html>
  <body>
    <h2>JavaScript تفاعلية</h2>
    <p id="demo">اضغط على الزر لتغيير هذا النص.</p>
    <button onclick="document.getElementById('demo').innerHTML = 'تم التغيير بنجاح! '">اضغط هنا</button>
  </body>
  </html>
quiz:
  question: "أي وسم HTML يُستخدم لإدراج كود JavaScript؟"
  options: ["<js>", "<javascript>", "<script>", "<code>"]
  correctAnswer: 2
---

JavaScript هي لغة البرمجة التي تجعل صفحات الويب **تفاعلية وحيوية**.

بينما HTML هي الهيكل، و CSS هي المظهر، فإن JavaScript هي **العقل** الذي يجعل الموقع يستجيب لأفعال المستخدم.

## ماذا يمكن أن تفعل JavaScript؟
- تغيير محتوى HTML و CSS ديناميكياً.
- التحقق من صحة النماذج (Form Validation).
- إنشاء رسوم متحركة (Animations) وألعاب.
- التواصل مع الخوادم (APIs) لجلب البيانات.