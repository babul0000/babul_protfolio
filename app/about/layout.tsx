import type { Metadata } from "next";
import { siteUrl } from "../../lib/siteConfig";

export const metadata: Metadata = {
  title: "About Babul Hossan | Full Stack & MERN Stack Developer in Dhaka",
  description:
    "Discover Babul Hossan's background, full stack engineering skills, development philosophy, and experience as a MERN Stack Developer in Dhaka, Bangladesh.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Babul Hossan | Full Stack & MERN Stack Developer in Dhaka",
    description:
      "Discover Babul Hossan's background, full stack engineering skills, development philosophy, and experience as a MERN Stack Developer in Dhaka, Bangladesh.",
    url: `${siteUrl}/about`,
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
