import type { Metadata } from "next";
import { Rubik, Assistant } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { BorealisBackground } from "@/components/ui/BorealisBackground";
import { CursorHalo } from "@/components/motion/CursorHalo";
import SmoothScroll from "@/components/providers/SmoothScroll";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "הרמה | עבודות עפר, תשתיות וסלילה | 20 שנות מצוינות",
  description: "הרמה: מובילים בביצוע פרויקטים מורכבים בעבודות עפר, תשתיות וסלילה. שירות מקצועי, ציוד מתקדם ועמידה בלוחות זמנים בפריסה ארצית.",
  keywords: ["עבודות עפר", "תשתיות", "סלילה", "חפירה", "בנייה", "קבלן עפר", "פרויקטים הנדסיים", "הרמה"],
  openGraph: {
    title: "הרמה | עבודות עפר, תשתיות וסלילה",
    description: "מובילים בביצוע פרויקטים מורכבים בעבודות עפר, תשתיות וסלילה בפריסה ארצית.",
    locale: "he_IL",
    type: "website",
    siteName: "הרמה",
  },
  twitter: {
    card: "summary_large_image",
    title: "הרמה | עבודות עפר ותשתיות",
    description: "מקצוענות, אמינות וביצוע ברמה הגבוהה ביותר.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${rubik.variable} ${assistant.variable}`} suppressHydrationWarning>
        <SmoothScroll>
          <CursorHalo />
          <BorealisBackground />
          {children}
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
