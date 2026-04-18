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
    default: "iHafidh — Quran Memorization & AI Recitation",
    template: "%s | iHafidh"
  },
  description: "iHafidh is your companion for Quran memorization. Track progress, build consistency, and achieve your Hifdh goals with beautiful statistics and detailed tracking.",
  keywords: ["iHafidh", "Hafidh", "Quran", "Memorization", "Hifz", "Hafil", "Hifl", "Hifdh", "Quran App", "Islamic Tracker", "AI Recitation", "Intelligent Quiz"],
  authors: [{ name: "iHafidh Team" }],
  openGraph: {
    title: "iHafidh — Quran Memorization & AI Recitation",
    description: "Recite a verse aloud in Quiz mode and get a word-by-word AI accuracy scorecard instantly. The first Quran app with AI evaluation.",
    url: "https://ihafidh.vercel.app",
    siteName: "iHafidh",
    images: [
      {
        url: "/og-ai-edition-v2.jpg?v=1",
        width: 1200,
        height: 630,
        alt: "iHafidh AI Quiz — Word-by-Word Recitation Scorecard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iHafidh — Quran Memorization & AI Recitation",
    description: "Recite a verse aloud in Quiz mode and get a word-by-word AI accuracy scorecard instantly. Download free.",
    images: ["/og-ai-edition-v2.jpg?v=1"],
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
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:secure_url" content="https://ihafidh-website.vercel.app/og-ai-edition-v2.jpg?v=1" />
        <meta property="og:image" content="https://ihafidh-website.vercel.app/og-ai-edition-v2.jpg?v=1" />
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}

