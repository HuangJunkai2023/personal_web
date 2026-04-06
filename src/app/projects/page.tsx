"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t } from "@/data/translations";
import { projects, categories } from "@/data/projects";
import { projectsZh, categoriesZh } from "@/data/projects.zh";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

export default function ProjectsPage() {
  const { lang } = useLang();
  const ui = t[lang].projects;
  const allProjects = lang === "zh" ? projectsZh : projects;
  const allCategories = lang === "zh" ? categoriesZh : categories;

  const [activeIdx, setActiveIdx] = useState(0);
  const active = allCategories[activeIdx];

  // Map zh category back to en for filtering (projects share same category field in en)
  const enCategories = categories;
  const filtered = activeIdx === 0
    ? allProjects
    : allProjects.filter((p) => {
        if (lang === "zh") {
          return p.category === allCategories[activeIdx];
        }
        return p.category === enCategories[activeIdx];
      });

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle title={ui.title} subtitle={ui.sub} />
      <div className="flex flex-wrap gap-2 mb-10">
        {allCategories.map((cat, i) => (
          <button
            key={cat}
            onClick={() => setActiveIdx(i)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              activeIdx === i
                ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div key={activeIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
      </motion.div>
      {filtered.length === 0 && <p className="text-center text-neutral-500 mt-20">{ui.empty}</p>}
    </main>
  );
}
