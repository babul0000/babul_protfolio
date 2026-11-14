import type { Metadata } from "next";
import { projects } from "../../../components/projectsData";
import { siteUrl } from "../../../lib/siteConfig";

type Props = {
  params: { id: string };
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found | Babul Hossan",
      description: "Case study not found.",
    };
  }

  const title = `${project.name} Case Study | Babul Hossan — Full Stack Developer`;
  const description = `${project.desc || project.tagline} Built by Babul Hossan, MERN Stack Developer in Dhaka.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/project/${params.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/project/${params.id}`,
      type: "article",
      images: [
        {
          url: project.image || "/my.webp",
          width: 1200,
          height: 630,
          alt: `${project.name} by Babul Hossan`,
        },
      ],
    },
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
