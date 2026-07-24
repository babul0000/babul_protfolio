import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Babul Hossan — Full Stack Developer",
  description:
    "Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["developer", "portfolio", "full stack developer", "react", "next.js", "web development", "MERN stack", "Node.js"],
  authors: [{ name: "Babul Hossan" }],
  creator: "Babul Hossan",
  openGraph: {
    title: "Babul Hossan — Full Stack Developer",
    description: "Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Babul Hossan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Babul Hossan — Full Stack Developer",
    description: "Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xrj9ikq3pl");
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

