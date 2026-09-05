---
title: "الروابط (Links)"
order: 6
course: "html"
codeExample: |
  <a href="https://www.example.com">رابط عادي</a>
  <br><br>
  <a href="https://www.google.com" target="_blank">رابط يفتح في نافذة جديدة</a>
  <br><br>
  <a href="mailto:test@example.com">إرسال بريد إلكتروني</a>
quiz:
  question: "ما هي السمة التي تجعل الرابط يفتح في نافذة جديدة؟"
  options: ["new", "target=\"_blank\"", "open", "href=\"new\""]
  correctAnswer: 1
---

الروابط هي أساس الويب! تُعرّف باستخدام وسم `<a>` (Anchor).

## السمة `target`:
- `target="_self"`: (الافتراضي) يفتح الرابط في نفس النافذة.
- `target="_blank"`: يفتح الرابط في **نافذة أو تبويب جديد**.

>  **روابط البريد والهاتف:** يمكنك استخدام `mailto:email@example.com` لفتح تطبيق البريد، أو `tel:+123456789` للاتصال الهاتفي.