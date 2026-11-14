import type { Metadata } from "next";
import { siteUrl } from "../../lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Babul Hossan | Hire MERN Stack Developer in Dhaka",
  description:
    "Get in touch with Babul Hossan for freelance web development, full-stack Next.js projects, or technical consultations in Dhaka, Bangladesh.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Babul Hossan | Hire MERN Stack Developer in Dhaka",
    description:
      "Get in touch with Babul Hossan for freelance web development, full-stack Next.js projects, or technical consultations in Dhaka, Bangladesh.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
