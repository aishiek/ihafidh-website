import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ihafidh-website.vercel.app"),
  title: {
    default: "iHafidh - Master Your Quran Memorization Journey",
    template: "%s | iHafidh"
  },
  description: "iHafidh is your companion for Quran memorization. Track progress, build consistency, and achieve your Hifdh goals with beautiful statistics and detailed tracking.",
  keywords: ["iHafidh", "Hafidh", "Quran", "Memorization", "Hifz", "Hafil", "Hifl", "Hifdh", "Quran App", "Islamic Tracker"],
  authors: [{ name: "iHafidh Team" }],
  openGraph: {
    title: "iHafidh - Quran Memorization Simplified",
    description: "Track your Hifdh progress with beautiful statistics and verse-by-verse audio. Join thousands mastering the Quran.",
    url: "https://ihafidh.vercel.app",
    siteName: "iHafidh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "iHafidh App - Master Quran Memorization",
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

