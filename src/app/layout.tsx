import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ali Benrami | Software Engineer",
  description:
    "Software Engineer building digital experiences that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-12">{children}</main>
      </body>
    </html>
  );
}
