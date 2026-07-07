import { projects } from "@/data/projects";
import { projectsZh } from "@/data/projects.zh";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  const slugs = new Set([
    ...projects.map((p) => p.slug),
    ...projectsZh.map((p) => p.slug),
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
