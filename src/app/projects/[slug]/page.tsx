import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    return {
      title: project ? `${project.title} — Projects` : "Project Not Found",
      description: project?.description,
    };
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const sections = [
    { title: "Background", content: project.details.background },
    { title: "What I Did", content: project.details.work },
    { title: "Challenges", content: project.details.challenges },
    { title: "Takeaways", content: project.details.takeaways },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <Link href="/projects" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
        &larr; Back to Projects
      </Link>

      <div className="mt-8">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">{project.category}</span>
          {project.period && <span className="text-xs text-neutral-400">{project.period}</span>}
        </div>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1.5 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            {tag}
          </span>
        ))}
      </div>

      {/* Hero image */}
      <div className="mt-10 aspect-video relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {project.image ? (
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-neutral-400">Project Image</div>
        )}
      </div>

      {/* Detail sections */}
      <div className="mt-16 space-y-12">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{s.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{s.content}</p>
          </section>
        ))}
      </div>

      {/* Gallery */}
      {project.images && project.images.length > 1 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((src, i) => (
              <div key={i} className="aspect-[4/3] relative rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image src={src} alt={`${project.title} ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Video */}
      {project.video && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Video</h2>
          <video
            src={project.video}
            controls
            className="w-full rounded-2xl bg-black"
            playsInline
          />
        </section>
      )}

      <div className="mt-16">
        <Link href="/projects" className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
          &larr; All Projects
        </Link>
      </div>
    </main>
  );
}
