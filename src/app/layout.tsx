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
    title: "iHafidh Golden Quran - Master Your Hifdh",
    description: "Master your Quran memorization with our exclusive Golden Mode. Beautiful statistics and premium tracking for your Hifdh journey.",
    url: "https://ihafidh.vercel.app",
    siteName: "iHafidh",
    images: [
      {
        url: "/og-golden-landscape-v2.jpg",
        width: 1024,
        height: 1024,
        alt: "iHafidh Golden Quran - Master Quran Memorization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iHafidh Golden Quran - Master Your Hifdh",
    description: "Beautiful statistics and Golden Mode progress tracking for your Quran memorization journey.",
    images: ["/og-golden-landscape-v2.jpg"],
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
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:secure_url" content="https://ihafidh-website.vercel.app/og-golden-landscape-v2.jpg" />
      </head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}

