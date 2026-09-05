---
title: "مقدمة في CSS"
order: 1
course: "css"
codeExample: |
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    body { background-color: #f0f8ff; font-family: Arial, sans-serif; }
    h1 { color: #4F46E5; text-align: center; }
    p { color: #333; line-height: 1.6; }
  </style>
  </head>
  <body>
    <h1>مرحباً بك في عالم CSS!</h1>
    <p>هذه فقرة منسقة باستخدام CSS.</p>
  </body>
  </html>
quiz:
  question: "ما هي الخاصية المستخدمة لتغيير لون النص في CSS؟"
  options: ["text-color", "font-color", "color", "text-style"]
  correctAnswer: 2
---

CSS (Cascading Style Sheets) تُستخدم لتنسيق وتجميل صفحات HTML.

بينما تبني HTML **الهيكل**، فإن CSS تبني **المظهر** (الألوان، الخطوط، المسافات، والتخطيط).

## طرق إضافة CSS:
1. **داخلي (Internal):** داخل وسم `<style>` في رأس الصفحة (Head).
2. **خارجي (External):** في ملف `.css` منفصل (وهو الأفضل والمستخدم في المشاريع الكبيرة).
3. **مضمن (Inline):** داخل السمة `style` للعنصر مباشرة (غير مستحسن).