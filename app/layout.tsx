import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warp to Clash,Surge",
  description: "在 Clash 和 Surge 上"
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
          dangerouslySetInnerHTML={{
            '__html': `<!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-7JZKRTP3T1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-7JZKRTP3T1');
            </script>
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
