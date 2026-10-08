import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Yatra_One, Hind_Madurai } from "next/font/google";
import MobileFx from "./components/MobileFx.tsx";



const display = Yatra_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yatra",
  display: "swap",
});
const body = Hind_Madurai({
  weight: ["400", "500", "700"],
  subsets: ["latin", "tamil"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Padaivedu Yudhakalam",
  description:
    "Learn Silambam, the Tamil staff art, at Padaivedu Yudhakalam in Tiruvannamalai.",
  icons: { icon: "/logo.jpeg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#5A2408",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        {children}
        <MobileFx />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}