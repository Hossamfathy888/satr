---
title: "الجداول (Tables)"
order: 9
course: "html"
codeExample: |
  <table border="1">
    <thead>
      <tr>
        <th>الاسم</th>
        <th>العمر</th>
        <th>المدينة</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>أحمد</td>
        <td>25</td>
        <td>القاهرة</td>
      </tr>
      <tr>
        <td>سارة</td>
        <td>22</td>
        <td>الإسكندرية</td>
      </tr>
    </tbody>
  </table>
---

تُستخدم الجداول لعرض البيانات في صفوف وأعمدة.

## وسوم الجدول الأساسية:
- `<table>`: الحاوية الرئيسية للجدول.
- `<tr>`: (Table Row) يحدد صفاً في الجدول.
- `<th>`: (Table Header) يحدد خلية رأس الجدول (تظهر بخط عريض وفي المنتصف).
- `<td>`: (Table Data) يحدد خلية بيانات عادية.
- `<thead>` و `<tbody>`: لتجميع رأس الجدول وجسمه (مهم للتنظيم والـ SEO).