import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Babul Hossan — Full Stack MERN Developer | Next.js, TypeScript & PostgreSQL",
  description:
    "Production-focused Full-Stack MERN Developer specializing in React, Next.js 14, Node.js, Express, MongoDB, TypeScript, and PostgreSQL with Prisma ORM.",
  keywords: [
    "MERN stack developer",
    "full stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "TypeScript",
    "web development",
    "Bangladesh developer"
  ],
  authors: [{ name: "Babul Hossan" }],
  creator: "Babul Hossan",
  metadataBase: new URL("https://babul-portfolio.vercel.app"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Babul Hossan — Full Stack MERN Developer",
    description: "Building smart & scalable web solutions. Full-stack MERN developer specializing in Next.js 14, TypeScript, MongoDB, and PostgreSQL.",
    siteName: "Babul Hossan Portfolio",
    locale: "en_US",
    type: "website",
    url: "https://babul-portfolio.vercel.app",
    images: [
      {
        url: "/my.webp",
        width: 1200,
        height: 630,
        alt: "Babul Hossan — Full Stack MERN Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babul Hossan — Full Stack MERN Developer",
    description: "Building smart & scalable web solutions. Full-stack MERN developer specializing in Next.js 14, TypeScript, MongoDB, and PostgreSQL.",
    images: ["/my.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://babul-portfolio.vercel.app/#person",
      "name": "Babul Hossan",
      "jobTitle": "Full Stack MERN Developer",
      "url": "https://babul-portfolio.vercel.app",
      "sameAs": [
        "https://github.com/babul0000",
        "https://www.linkedin.com/in/babul-hossan-09932837a/",
        "https://www.facebook.com/clik00"
      ],
      "knowsAbout": [
        "MERN Stack",
        "React.js",
        "Next.js 14",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Tailwind CSS",
        "REST APIs"
      ],
      "image": "https://babul-portfolio.vercel.app/my.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "Bangladesh"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://babul-portfolio.vercel.app/#website",
      "url": "https://babul-portfolio.vercel.app",
      "name": "Babul Hossan — Full Stack MERN Developer Portfolio",
      "description": "Building smart & scalable web solutions. Full-stack MERN developer specializing in Next.js 14, TypeScript, MongoDB, and PostgreSQL.",
      "publisher": {
        "@id": "https://babul-portfolio.vercel.app/#person"
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
    <html lang="en" className={`scroll-smooth ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-themeText bg-themeBg">
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xrj9ikq3pl");
          `}
        </Script>
        {children}
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
