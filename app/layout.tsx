import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import { PageTransition } from "../components/dennis";
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
  title: "MD Babul Hossan • Freelance Designer & Developer",
  description:
    "Helping brands thrive in the digital world. Located in Dhaka, Bangladesh. Delivering tailor-made digital designs and building interactive web systems from scratch. © Code by Babul",
  keywords: [
    "MD Babul Hossan",
    "Babul Hossan",
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
    "Better Auth",
    "Tailwind CSS",
    "web development",
    "Bangladesh developer"
  ],
  authors: [{ name: "MD Babul Hossan" }],
  creator: "MD Babul Hossan",
  metadataBase: new URL("https://babul-portfolio.vercel.app"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "MD Babul Hossan — MERN Stack Developer",
    description: "MERN Stack Developer building scalable, responsive web applications using Next.js, React.js, Express.js, and MongoDB.",
    siteName: "MD Babul Hossan Portfolio",
    locale: "en_US",
    type: "website",
    url: "https://babul-portfolio.vercel.app",
    images: [
      {
        url: "/my.webp",
        width: 1200,
        height: 630,
        alt: "MD Babul Hossan — MERN Stack Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Babul Hossan — MERN Stack Developer",
    description: "MERN Stack Developer building scalable, responsive web applications using Next.js, React.js, Express.js, and MongoDB.",
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
      "name": "MD Babul Hossan",
      "jobTitle": "MERN Stack Developer",
      "url": "https://babul-portfolio.vercel.app",
      "email": "babulhossan.info@gmail.com",
      "telephone": "+8801952860053",
      "sameAs": [
        "https://github.com/babul0000",
        "https://www.linkedin.com/in/babul-hossan-09932837a/",
        "https://www.facebook.com/clik00"
      ],
      "knowsAbout": [
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
      "name": "MD Babul Hossan — MERN Stack Developer Portfolio",
      "description": "MERN Stack Developer building scalable, responsive web applications using Next.js, React.js, Express.js, and MongoDB.",
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
