import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import { PageTransition } from "../components/dennis";
import { siteUrl, siteConfig } from "../lib/siteConfig";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Babul Hossan | Full Stack & MERN Stack Developer in Dhaka",
    template: "%s | Babul Hossan",
  },
  description:
    "Babul Hossan is a Full Stack & MERN Stack Developer based in Dhaka, Bangladesh, building modern, high-performance web applications with Next.js, React, Node.js, and TypeScript.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteUrl }],
  creator: siteConfig.author,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "yTOeLLn-BWwvmfrCdNGscdNBwlzTH6qgp_-sQJQJ5_U",
  },
  openGraph: {
    title: "Babul Hossan | Full Stack & MERN Stack Developer in Dhaka",
    description:
      "Full Stack & MERN Stack Developer based in Dhaka building scalable, interactive web applications using Next.js, React, Node.js, and TypeScript.",
    siteName: "Babul Hossan Portfolio",
    locale: "en_US",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/my.webp",
        width: 1200,
        height: 630,
        alt: "Babul Hossan — Full Stack & MERN Stack Developer in Dhaka",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babul Hossan | Full Stack & MERN Stack Developer in Dhaka",
    description:
      "Full Stack & MERN Stack Developer based in Dhaka building scalable, interactive web applications using Next.js, React, Node.js, and TypeScript.",
    images: ["/my.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Babul Hossan",
      "jobTitle": "Full Stack & MERN Stack Developer",
      "url": siteUrl,
      "email": siteConfig.email,
      "telephone": siteConfig.phone,
      "sameAs": [
        siteConfig.socials.github,
        siteConfig.socials.linkedin,
        siteConfig.socials.facebook,
      ],
      "knowsAbout": [
        "Full Stack Development",
        "MERN Stack",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Tailwind CSS",
        "REST APIs",
        "Better Auth"
      ],
      "image": `${siteUrl}/my.webp`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "Bangladesh"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Babul Hossan — Full Stack & MERN Stack Developer Portfolio",
      "description":
        "Full Stack & MERN Stack Developer in Dhaka building scalable, interactive web applications using Next.js, React, Node.js, and TypeScript.",
      "publisher": {
        "@id": `${siteUrl}/#person`
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased text-themeText bg-themeBg selection:bg-emerald-500/20 selection:text-emerald-500">
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xrj9ikq3pl");
          `}
        </Script>
        {/* Dennis Snellenberg Route Transition Curtain */}
        <PageTransition />
        {children}
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
