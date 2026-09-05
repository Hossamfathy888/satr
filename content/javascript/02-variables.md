---
title: "المتغيرات (Variables)"
order: 2
course: "javascript"
codeExample: |
  <!DOCTYPE html>
  <html>
  <body>
    <h2>المتغيرات في JavaScript</h2>
    <p id="output"></p>
    <script>
      let userName = "أحمد";
      const age = 25;
      var city = "القاهرة"; // الطريقة القديمة
      
      document.getElementById("output").innerHTML = 
        "الاسم: " + userName + "<br>العمر: " + age + "<br>المدينة: " + city;
    </script>
  </body>
  </html>
---

المتغيرات هي حاويات لتخزين البيانات. في JavaScript الحديثة، نستخدم ثلاث كلمات مفتاحية:

1. **`let`**: لمتغير يمكن تغيير قيمته لاحقاً.
2. **`const`**: لمتغير ثابت لا يمكن تغيير قيمته بعد التعريف (مفضل استخدامه دائماً إذا لم تتغير القيمة).
3. **`var`**: الطريقة القديمة (يُنصح بتجنبها في الكود الحديث).

> 💡 **قاعدة تسمية:** أسماء المتغيرات يجب أن تبدأ بحرف أو `_` أو `$`، ولا يمكن أن تبدأ برقم.