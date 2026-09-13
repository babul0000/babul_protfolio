import { MetadataRoute } from "next";
import { projects } from "../components/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://babul-portfolio.vercel.app";

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
