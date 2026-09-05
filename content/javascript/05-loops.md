
#### 5. `05-loops.md` (الحلقات Loops)
```markdown
---
title: "الحلقات (Loops)"
order: 5
course: "javascript"
codeExample: |
  <!DOCTYPE html>
  <html>
  <body>
    <h2>العد من 1 إلى 5:</h2>
    <p id="loop-result"></p>
    <script>
      let result = "";
      for (let i = 1; i <= 5; i++) {
        result += "الرقم: " + i + "<br>";
      }
      document.getElementById("loop-result").innerHTML = result;
    </script>
  </body>
  </html>
---

الحلقات تُستخدم لتكرار تنفيذ كتلة من الكود عدة مرات.

## حلقة `for`:
هي الأكثر شيوعاً، وتتكون من ثلاثة أجزاء: