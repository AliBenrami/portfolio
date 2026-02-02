import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import SkyBackground from "@/components/SkyBackground";
import Tab from "@/components/tab";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | File Explorer",
  description: "A portfolio website with a file explorer theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Tab tabs={["Home", "Blog", "Contact"]} />
        <SkyBackground />

        <div className="fixed bottom-4 right-4 z-50">
          <div className="flex items-center gap-2 rounded-full bg-yellow-300/90 text-black px-3 py-1 shadow-lg ring-1 ring-black/10">
            <span className="text-lg">🚧</span>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
