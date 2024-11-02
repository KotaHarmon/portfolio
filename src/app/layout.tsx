import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalyticsProvider, WebVitalsComponent } from "./_globals";
import "./globals.scss";

const _base: string = `${process.env.NEXT_PUBLIC_SITE_SLUG}`;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  applicationName: "Kota's Portfolio",
  title: "Kota's Portfolio - Crafting Innovative Digital Solutions",
  description:
    "Explore Kota's diverse portfolio of work in software development and digital solutions, showcasing expertise across full-stack development.",
  authors: [
    {
      name: "Kota Harmon",
      url: "https://www.linkedin.com/in/kotaharmon/",
    },
  ],
  keywords: [""],
  icons: [
    {
      rel: "icon",
      url: `${_base}/favicon.svg`,
      type: "image/svg+xml",
      color: "#fc8059",
    },
    {
      rel: "apple-touch-icon",
      url: `${_base}/favicon.svg`,
      type: "image/svg+xml",
      color: "#fc8059",
    },
    {
      rel: "google-touch-icon",
      url: `${_base}/favicon.svg`,
      type: "image/svg+xml",
      color: "#fc8059",
    },
    {
      rel: "mask-icon",
      url: `${_base}/favicon.svg`,
      type: "image/svg+xml",
      color: "#fc8059",
    },
  ],
  appleWebApp: {
    capable: true,
    title: "Kota's Portfolio",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: `https://kotaharmon.github.io${_base}`,
    // types: {
    //   alternate: [
    //     {
    //       title: 'android',
    //       url: 'android-app://com.kotaharmon.android/kotaharmon/home',
    //     },
    //   ],
    // },
  },
  other: {
    "X-UA-Compatible": "IE-edge,chrome=1",
    "mobile-web-app-capable": "yes",
    "msapplication-starturl": "/?utm_source=homescreen",
    "msapplication-navbutton-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      {/* load google analytics */}
      <GoogleAnalyticsProvider />
      {/* measure and report web vitals */}
      <WebVitalsComponent />
    </html>
  );
}
