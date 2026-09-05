import type { Metadata } from "next";
import { Tajawal, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// إعداد خط Tajawal للنصوص العربية
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

// إعداد خط JetBrains Mono للأكواد
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "سطر | تعلم البرمجة بالعربي",
  description: "منصة عربية لتعلم البرمجة بأسلوب تفاعلي وبسيط",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} ${jetbrains.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}