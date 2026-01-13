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
    default: "iHafidh - Master Your Quran Memorization",
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
        url: "https://ihafidh-website.vercel.app/banner.png",
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
    images: ["https://ihafidh-website.vercel.app/og-image.png"],
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
    apple: "/logo.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <link rel="canonical" href="https://ihafidh-website.vercel.app" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:secure_url" content="https://ihafidh-website.vercel.app/og-image.png" />
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}

