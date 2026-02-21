import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "@/components/accessibility/accessibility-provider";
import { AccessibilityWidget } from "@/components/accessibility/accessibility-widget";
import { Analytics } from "@vercel/analytics/next";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech-Therapy - מסלולי טכנולוגיה ו-AI לאנשים עם צרכים מיוחדים",
  description: "גשר לעולם הדיגיטלי – מיומנויות טכנולוגיות בגישה טיפולית. עצמאות דיגיטלית, יצירה ב-AI ושימוש בסמארטפון לאנשים עם צרכים מיוחדים.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} antialiased`}>
        <AccessibilityProvider>
          <a href="#main-content" className="skip-to-content">
            דלג לתוכן הראשי
          </a>
          {children}
          <AccessibilityWidget />
        </AccessibilityProvider>
        <Analytics />
      </body>
    </html>
  );
}
