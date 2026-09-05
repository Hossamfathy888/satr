---
title: "تخطيط Flexbox"
order: 5
course: "css"
codeExample: |
  <!DOCTYPE html>
  <html>
  <head>
  <style>
    .container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #f0f8ff;
      padding: 20px;
      height: 200px;
    }
    .item {
      background-color: #4F46E5;
      color: white;
      padding: 20px;
      border-radius: 8px;
    }
  </style>
  </head>
  <body>
    <div class="container">
      <div class="item">عنصر 1</div>
      <div class="item">عنصر 2</div>
      <div class="item">عنصر 3</div>
    </div>
  </body>
  </html>
---

Flexbox هو نموذج تخطيط قوي يُستخدم لتوزيع العناصر داخل حاوية بسهولة، سواء في صف (Row) أو عمود (Column).

## الخصائص الأساسية للحاوية (Container):
- `display: flex;`: لتفعيل Flexbox.
- `justify-content`: للتحكم في المحاذاة على المحور الرئيسي (أفقياً عادةً). قيم شائعة: `center`, `space-between`, `space-around`.
- `align-items`: للتحكم في المحاذاة على المحور الثانوي (عمودياً عادةً). قيم شائعة: `center`, `flex-start`, `flex-end`.

> 💡 Flexbox مثالي لإنشاء شريط التنقل (Navbar) وتوسيط العناصر.