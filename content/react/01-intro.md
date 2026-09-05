---
title: "مقدمة في React"
order: 1
course: "react"
codeExample: |
  <!DOCTYPE html>
  <html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      function App() {
        return <h1 style={{color: '#4F46E5'}}>مرحباً بك في React! ⚛️</h1>;
      }
      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<App />);
    </script>
  </body>
  </html>
quiz:
  question: "ما هي الشركة التي طورت مكتبة React؟"
  options: ["Google", "Meta (Facebook)", "Microsoft", "Apple"]
  correctAnswer: 1
---

React هي مكتبة JavaScript لبناء واجهات المستخدم (User Interfaces). 

تم تطويرها بواسطة **Meta (Facebook)**، وهي تعتمد على مفهوم **المكونات (Components)**، مما يجعل بناء التطبيقات المعقدة أسهل وأسرع.

## لماذا React؟
- **أداء عالي**: بفضل Virtual DOM.
- **إعادة استخدام الكود**: المكونات (Components) قابلة لإعادة الاستخدام.
- **مجتمع ضخم**: آلاف المكتبات والدروس المتاحة.