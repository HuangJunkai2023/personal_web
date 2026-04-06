"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle
        title="Projects"
        subtitle="Engineering work, competition builds, and research explorations."
      />

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              active === cat
                ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-neutral-500 mt-20">No projects in this category yet.</p>
      )}
    </main>
  );
}
