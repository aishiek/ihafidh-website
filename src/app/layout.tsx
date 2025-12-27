import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ihafidh.vercel.app"),
  title: "iHafidh - Master Quran Memorization with Detailed Statistics",
  description: "A comprehensive digital companion for Hifdh (Quran Memorization) with statistics, progress tracking, and audio recitations. Track your journey across all 114 Surahs and 30 Juz.",
  keywords: ["iHafidh", "Hafidh", "Quran", "Memorization", "Hifz", "Hafil", "Hifl", "Hifdh", "Quran App", "Islamic Tracker"],
  authors: [{ name: "iHafidh Team" }],
  openGraph: {
    title: "iHafidh - Quran Memorization Simplified",
    description: "Track your Hifdh progress with beautiful statistics and verse-by-verse audio.",
    url: "https://ihafidh.vercel.app",
    siteName: "iHafidh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "iHafidh App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iHafidh - Quran Memorization Simplified",
    description: "Beautiful statistics and progress tracking for your Quran memorization journey.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ihafidh.vercel.app" />
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}

