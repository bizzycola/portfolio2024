import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TrackingScript from '@/components/tracking';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LChantDev",
  description: "Lachlan Chant's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TrackingScript />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
