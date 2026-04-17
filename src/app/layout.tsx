import type { Metadata } from "next";
import { Quicksand, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-quicksand',
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kidzu – Kindergarten Preschool & Kids Education",
  description: "Kidzu – Kindergarten Preschool & Kids Education HTML Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/img/favicon.svg" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/meanmenu.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body className={`${quicksand.variable} ${sourceSans.variable}`}>
        {children}
        
        {/* Scripts Estáticos Legados */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollToPlugin.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/js/viewport.jquery.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.waypoints.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.meanmenu.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

