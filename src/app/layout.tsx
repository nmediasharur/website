import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nmedia.vercel.app"),
  title: "N MEDIA | Scale. Convert. Dominate.",
  description: "Digital marketing systems built for brands that want growth, not vanity. We specialize in Social Media Management, Paid Ads, SEO, and Content Production.",
  openGraph: {
    title: "N MEDIA | Digital Marketing Agency",
    description: "Digital marketing systems built for brands that want growth, not vanity.",
    url: "https://nmedia.vercel.app",
    siteName: "N MEDIA",
    images: [
      {
        url: "/asset/8ba73fe2-1f33-4ec1-961b-218c5fd95f0f.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
