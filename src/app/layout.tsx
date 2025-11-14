import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TrackingScript from '@/components/tracking';
import "./globals.css";
import Head from 'next/head'
import PlausibleProvider from 'next-plausible'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lachlan Chant",
  description: "Lachlan Chant's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <TrackingScript /> */}
      <body className={inter.className}>
        <PlausibleProvider domain="lchant.dev" customDomain="https://metrics.lchant.dev">{children}</PlausibleProvider>
      </body>
    </html>
  );
}
