---
title: "النماذج (Forms)"
order: 10
course: "html"
codeExample: |
  <form action="/submit-endpoint" method="POST">
    <label for="username">اسم المستخدم:</label>
    <input type="text" id="username" name="username" required>
    <br><br>
    
    <label for="email">البريد الإلكتروني:</label>
    <input type="email" id="email" name="email" required>
    <br><br>

    <label for="message">رسالتك:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    <br><br>

    <button type="submit">إرسال</button>
  </form>
quiz:
  question: "ما هو الوسم المستخدم لإنشاء حقل إدخال نصي؟"
  options: ["<input>", "<text>", "<field>", "<textbox>"]
  correctAnswer: 0
---

النماذج (Forms) تُستخدم لجمع البيانات من المستخدمين (مثل تسجيل الدخول، أو نماذج الاتصال).

## العناصر الأساسية:
- `<form>`: الحاوية الرئيسية للنموذج.
- `<input>`: حقل الإدخال. يتغير نوعه حسب السمة `type` (مثل `text`, `email`, `password`, `checkbox`).
- `<label>`: تسمية توضيحية للحقل (تحسن إمكانية الوصول).
- `<textarea>`: حقل نصي متعدد الأسطر.
- `<button>`: زر إرسال النموذج (`type="submit"`).

> 🔒 **ملاحظة:** السمة `required` تمنع المستخدم من إرسال النموذج إذا كان الحقل فارغاً.