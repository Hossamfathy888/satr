---
title: "الشروط (Conditions)"
order: 4
course: "javascript"
codeExample: |
  <!DOCTYPE html>
  <html>
  <body>
    <h2>التحقق من العمر</h2>
    <p id="result"></p>
    <script>
      let age = 20;
      let message = "";

      if (age >= 18) {
        message = "أنت بالغ، يمكنك الدخول. ✅";
      } else if (age >= 13) {
        message = "أنت مراهق. ⚠️";
      } else {
        message = "أنت طفل، لا يمكنك الدخول. ❌";
      }

      document.getElementById("result").innerHTML = message;
    </script>
  </body>
  </html>
---

تُستخدم الشروط لاتخاذ قرارات في الكود بناءً على ظروف معينة.

## بنية `if...else`:
```javascript
if (شرط) {
  // يُنفذ إذا كان الشرط صحيحاً
} else if (شرط آخر) {
  // يُنفذ إذا كان الشرط الأول خاطئاً وهذا صحيحاً
} else {
  // يُنفذ إذا كانت كل الشروط خاطئة
}