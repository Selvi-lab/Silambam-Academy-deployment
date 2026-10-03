/*import "./globals.css";
import { Yatra_One, Hind_Madurai } from "next/font/google";

const display = Yatra_One({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Hind_Madurai({ weight: ["400", "500", "700"], subsets: ["latin", "tamil"], variable: "--font-body" });

export const metadata = {
  title: "Padaivedu Silambam Academy | Yudhakalam",
  description: "Learn Silambam, the Tamil staff art, at Padaivedu Silambam Academy in Tiruvannamalai.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

const Btn = ({ href, children, solid }: { href: string; children: React.ReactNode; solid?: boolean }) => (
  <a
    href={href}
    className={`inline-block [text-shadow:none] rounded-lg border-2 px-7 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
      solid
        ? "border-[#E3A72F] bg-[#E3A72F] text-[#1C120C] shadow-[0_0_24px_rgba(227,167,47,0.5)] hover:bg-[#F2BC4E]"
        : "border-[#E3A72F] bg-[#E3A72F] text-[#1C120C] shadow-[0_0_24px_rgba(227,167,47,0.5)] hover:bg-[#F2BC4E]"
    }`}
  >
    {children}
  </a>
);

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};*/

import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Yatra_One, Hind_Madurai } from "next/font/google";

const display = Yatra_One({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Hind_Madurai({ weight: ["400", "500", "700"], subsets: ["latin", "tamil"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Padaivedu Silambam Academy | Yudhakalam",
  description: "Learn Silambam, the Tamil staff art, at Padaivedu Silambam Academy in Tiruvannamalai.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C120C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}