import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/component/Theme/theme-context";

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
    default:
      "Vipul Singh - Full Stack Developer & Software Engineer | vipulworks.com",
    template: "%s | Vipul Singh - Full Stack Developer",
  },
  description:
    "Vipul Singh is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View portfolio, projects, and hire for web development services.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Development",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "API Development",
    "REST API",
    "GraphQL",
    "Database Design",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redux",
    "Context API",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "Responsive Design",
    "Progressive Web Apps",
    "vipulworks.com",
    "Vipul Singh",
    "Portfolio",
    "Freelance Developer",
    "Hire Developer",
  ],
  authors: [{ name: "Vipul Singh", url: "https://vipulworks.com" }],
  creator: "Vipul Singh",
  publisher: "Vipul Singh",
  category: "Technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/light-icon.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/dark-icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/light-icon.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/dark-icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/light-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/dark-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Vipul Singh - Full Stack Developer & Software Engineer",
    description:
      "Vipul Singh is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View portfolio, projects, and hire for web development services.",
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
    title: "Vipul Singh - Full Stack Developer & Software Engineer",
    description:
      "Vipul Singh is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View portfolio, projects, and hire for web development services.",
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://vipulworks.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f0f2f5"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0d0d0d"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="author" content="Vipul Singh" />
        <meta name="contact" content="vipul@vipulworks.com" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />

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

        {/* Structured Data for WebSite */}
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
      </body>
    </html>
  );
}
