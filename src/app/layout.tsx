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
  title: "Website Temporarily Unavailable | N MEDIA",
  description: "This website is temporarily unavailable while we review and update the current development and service requirements.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Website Temporarily Unavailable | N MEDIA",
    description: "This website is temporarily unavailable while we review and update the current development and service requirements.",
    url: "https://nmedia.vercel.app",
    siteName: "N MEDIA",
    images: [
      {
        url: "/asset/logo-official.png",
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
