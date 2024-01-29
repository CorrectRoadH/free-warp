import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warp To Clash/Surge",
  description: "在 Clash 和 Surge 上一键使用 Warp+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <Script
          id="google-analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-6X034D5RZB"
          dangerouslySetInnerHTML={{
            '__html': `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-6X034D5RZB');
            `}} 
          />
        </head>
        <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
