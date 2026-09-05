---
title: "الدوال (Functions)"
order: 6
course: "javascript"
codeExample: |
  <!DOCTYPE html>
  <html>
  <body>
    <h2>حاسبة بسيطة</h2>
    <p>5 + 3 = <span id="sum"></span></p>
    <p>10 * 4 = <span id="multiply"></span></p>
    <script>
      function add(a, b) {
        return a + b;
      }

      function multiply(a, b) {
        return a * b;
      }

      document.getElementById("sum").innerHTML = add(5, 3);
      document.getElementById("multiply").innerHTML = multiply(10, 4);
    </script>
  </body>
  </html>
quiz:
  question: "ما هي الكلمة المفتاحية المستخدمة لتعريف دالة في JavaScript؟"
  options: ["def", "function", "func", "method"]
  correctAnswer: 1
---

الدالة (Function) هي كتلة من الكود مصممة لأداء مهمة معينة، ويمكن استدعاؤها (Call) عند الحاجة.

## مميزات الدوال:
- **إعادة الاستخدام:** اكتب الكود مرة واحدة واستخدمه عدة مرات.
- **التنظيم:** تقسيم الكود المعقد إلى أجزاء صغيرة ومفهومة.

## تعريف واستدعاء دالة:
```javascript
// التعريف
function greet(name) {
  return "مرحباً " + name;
}

// الاستدعاء
let message = greet("أحمد"); // النتيجة: "مرحباً أحمد"