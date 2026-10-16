import type { Metadata } from "next";
import { Noto_Sans_HK, Noto_Serif_HK } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_HK({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-hk",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["PingFang HK", "Microsoft JhengHei", "sans-serif"],
});

const serif = Noto_Serif_HK({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif-hk",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Songti TC", "PMingLiU", "serif"],
});

export const metadata: Metadata = {
  title: "StudioFlow AI｜查詢即時有人覆",
  description: "為香港美容院及個人教練而設的查詢與預約自動化。按店內資料回覆，不確定的問題交回職員。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-HK" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip" href="#main">
          跳到內容
        </a>
        {children}
      </body>
    </html>
  );
}
