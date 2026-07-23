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
        {children}
      </body>
    </html>
  );
}

