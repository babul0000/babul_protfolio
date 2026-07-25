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

export const metadata = {
  title: "Babul Hossan — Full Stack Developer",
  description:
    "Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["developer", "portfolio", "full stack developer", "react", "next.js", "web development", "MERN stack", "Node.js"],
  authors: [{ name: "Babul Hossan" }],
  creator: "Babul Hossan",
  metadataBase: new URL("https://babul-portfolio.vercel.app"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Babul Hossan — Full Stack Developer",
    description: "Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Babul Hossan Portfolio",
    locale: "en_US",
    type: "website",
    url: "https://babul-portfolio.vercel.app",
    images: [
      {
        url: "/my.webp",
        width: 1200,
        height: 630,
        alt: "Babul Hossan — Full Stack Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babul Hossan — Full Stack Developer",
    description: "Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.",
    images: ["/my.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${caveat.variable}`}>
      <body className="font-sans antialiased text-themeText bg-themeBg transition-colors duration-300">
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

