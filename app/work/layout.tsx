import type { Metadata } from "next";
import { siteUrl } from "../../lib/siteConfig";

export const metadata: Metadata = {
  title: "Portfolio & Projects | Babul Hossan — Full Stack Developer",
  description:
    "Browse featured web applications, full-stack systems, and MERN projects created by Babul Hossan, a Full Stack Developer & MERN Specialist in Dhaka.",
  alternates: {
    canonical: `${siteUrl}/work`,
  },
  openGraph: {
    title: "Portfolio & Projects | Babul Hossan — Full Stack Developer",
    description:
      "Browse featured web applications, full-stack systems, and MERN projects created by Babul Hossan, a Full Stack Developer & MERN Specialist in Dhaka.",
    url: `${siteUrl}/work`,
    type: "website",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
