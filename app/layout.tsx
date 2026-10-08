import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins, Noto_Sans_Tamil } from "next/font/google";
import MobileFx from "./components/MobileFx";

const display = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-yatra",
  display: "swap",
});

const body = Noto_Sans_Tamil({
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
      </body>
    </html>
  );
}