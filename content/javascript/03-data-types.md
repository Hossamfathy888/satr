---
title: "أنواع البيانات (Data Types)"
order: 3
course: "javascript"
codeExample: |
  <!DOCTYPE html>
  <html>
  <body>
    <h2>أنواع البيانات</h2>
    <p id="types"></p>
    <script>
      let text = "مرحباً";       // String (نص)
      let number = 42;          // Number (رقم)
      let isTrue = true;        // Boolean (صحيح/خطأ)
      let empty = null;         // Null (فارغ عمداً)
      let notDefined;           // Undefined (غير معرّف)

      document.getElementById("types").innerHTML = 
        typeof text + ": " + text + "<br>" +
        typeof number + ": " + number + "<br>" +
        typeof isTrue + ": " + isTrue;
    </script>
  </body>
  </html>
---

تدعم JavaScript عدة أنواع أساسية من البيانات:

- **String**: النصوص، وتُكتب داخل علامات اقتباس `" "` أو `' '`.
- **Number**: الأرقام (صحيحة أو عشرية).
- **Boolean**: قيمتان فقط `true` أو `false`.
- **Undefined**: متغير تم تعريفه لكن لم تُعطَ له قيمة.
- **Null**: يمثل قيمة فارغة عمداً.

> 🔍 يمكنك استخدام الدالة `typeof` لمعرفة نوع أي متغير.