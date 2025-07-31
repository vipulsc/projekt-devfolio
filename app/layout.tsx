import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/component/Theme/theme-context";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vipulworks.com"),
  title: {
    default: "Vipul Singh - Software Engineer",
    template: "%s | Vipul Singh - Software Engineer",
  },
  description:
    "Vipul Singh is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  applicationName: "Vipul Works",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Vipul Singh",
    "vipulworks.com",
  ],
  authors: [{ name: "Vipul Singh", url: "https://vipulworks.com" }],
  creator: "Vipul Singh",
  publisher: "Vipul Singh",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Vipul Singh - Software Engineer",
    description:
      "Vipul Singh is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://vipulworks.com",
    siteName: "Vipul Works - Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/du9tf43gi/image/upload/v1753989030/banner_e9bnfs.png",
        width: 1200,
        height: 630,
        alt: "Vipul Singh - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipul Singh - Software Engineer",
    description:
      "Vipul Singh is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: [
      "https://res.cloudinary.com/du9tf43gi/image/upload/v1753989030/banner_e9bnfs.png",
    ],
    creator: "@vipulsc1",
    site: "@vipulsc1",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verified-via-dns",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://vipulworks.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Vipul Singh" />
        <meta name="contact" content="vipul@vipulworks.com" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/icon.png" />

        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vipul Singh",
              url: "https://vipulworks.com",
              sameAs: [
                "https://github.com/vipulsc",
                "https://linkedin.com/in/vipulsingh14",
                "https://twitter.com/vipulsc1",
              ],
              jobTitle: "Full Stack Developer",
              description:
                "Passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
              knowsAbout: [
                "React.js",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "Express.js",
                "Web Development",
                "Full Stack Development",
                "MERN Stack",
                "API Development",
                "Database Design",
                "REST API",
                "GraphQL",
                "Redux",
                "Tailwind CSS",
                "Git",
                "Docker",
                "AWS",
              ],
            }),
          }}
        />

        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Vipul Works - Portfolio",
              url: "https://vipulworks.com",
              description:
                "Portfolio website of Vipul Singh - Full Stack Developer",
              author: {
                "@type": "Person",
                name: "Vipul Singh",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://vipulworks.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X0SELJMPNB"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X0SELJMPNB');
          `}
        </Script>
      </body>
    </html>
  );
}
