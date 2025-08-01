import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/component/Theme/theme-context";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    default: "Vipul Singh - Full Stack Engineer",
    template: "%s | Vipul Singh - Full Stack Engineer",
  },
  description:
    "I'm Vipul Singh, a Full Stack Engineer with expertise in React, Next.js, Node.js, and modern web technologies. I build scalable applications and create great user experiences. Available for new opportunities.",
  applicationName: "Vipul Works - Portfolio",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Vipul Singh",
    "vipulworks.com",
    "Portfolio",
    "Web Development",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
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
    icon: [
      { url: "/icons/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/icons/icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Vipul Singh - Full Stack Engineer",
    description:
      "I'm Vipul Singh, a Full Stack Engineer with expertise in React, Next.js, Node.js, and modern web technologies. I build scalable applications and create great user experiences. Available for new opportunities.",
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
    title: "Vipul Singh - Full Stack Engineer",
    description:
      "I'm Vipul Singh, a Full Stack Engineer with expertise in React, Next.js, Node.js, and modern web technologies. I build scalable applications and create great user experiences. Available for new opportunities.",
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
  category: "technology",
  classification: "Portfolio Website",
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
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vipul Singh" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Vipul Works" />
        <meta name="msapplication-TileImage" content="/icons/icon.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Additional SEO Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />

        {/* Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://va.vercel-scripts.com; frame-src 'self' https://cal.com; object-src 'none'; base-uri 'self'; form-action 'self';"
        />

        {/* Viewport for better mobile experience */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />

        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          href="/icons/icon.png"
          type="image/png"
          sizes="32x32"
        />
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
              jobTitle: "Full Stack Engineer",
              description:
                "Full Stack Engineer with expertise in React, Next.js, Node.js, and modern web technologies. I build scalable applications and create great user experiences.",
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
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Self-Taught Developer",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "India",
              },
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
                "My portfolio showcasing expertise in React, Next.js, Node.js, and modern web technologies. I build scalable applications and create great user experiences.",
              author: {
                "@type": "Person",
                name: "Vipul Singh",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://vipulworks.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Person",
                name: "Vipul Singh",
              },
            }),
          }}
        />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vipul Works",
              url: "https://vipulworks.com",
              logo: "https://vipulworks.com/icons/icon.png",
              description: "Full Stack Development Services",
              founder: {
                "@type": "Person",
                name: "Vipul Singh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "vipul@vipulworks.com",
              },
            }),
          }}
        />

        {/* Structured Data for CreativeWork (Portfolio) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "Vipul Singh Portfolio",
              description:
                "My portfolio showcasing React, Next.js, Node.js, and modern web development skills with a track record of building scalable applications",
              author: {
                "@type": "Person",
                name: "Vipul Singh",
                jobTitle: "Full Stack Engineer",
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
                ],
              },
              creator: {
                "@type": "Person",
                name: "Vipul Singh",
              },
              dateCreated: "2025-08-01",
              dateModified: "2025-08-01",
              genre: "Portfolio",
              keywords:
                "Full Stack Developer, React, Next.js, Node.js, Web Development, Portfolio",
              url: "https://vipulworks.com",
              image:
                "https://res.cloudinary.com/du9tf43gi/image/upload/v1753989030/banner_e9bnfs.png",
              thumbnailUrl: "https://vipulworks.com/icons/icon.png",
              inLanguage: "en-US",
              isAccessibleForFree: true,
              license: "https://creativecommons.org/licenses/by/4.0/",
            }),
          }}
        />

        {/* Structured Data for BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://vipulworks.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://vipulworks.com/#about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Projects",
                  item: "https://vipulworks.com/#projects",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Skills",
                  item: "https://vipulworks.com/#skills",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Experience",
                  item: "https://vipulworks.com/#experience",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Contact",
                  item: "https://vipulworks.com/#contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>

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
