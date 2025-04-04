import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AIToolbar from "@/components/AIToolbar";
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
  title: "ImageKit AI Transformations",
  description: "Demo of ImageKit AI Transformations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AIToolbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
