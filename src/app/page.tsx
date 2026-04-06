"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t } from "@/data/translations";
import { siteConfig } from "@/data/site";
import { siteConfigZh } from "@/data/site.zh";
import { projects } from "@/data/projects";
import { projectsZh } from "@/data/projects.zh";
import { hobbies } from "@/data/hobbies";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const { lang } = useLang();
  const ui = t[lang];
  const site = lang === "zh" ? siteConfigZh : siteConfig;
  const allProjects = lang === "zh" ? projectsZh : projects;
  const allHobbies = lang === "zh" ? [] : hobbies; // hobbies preview uses titles only
  const featured = allProjects.filter((p) => p.featured);
  const previewHobbies = (lang === "zh"
    ? [{ id: "karting", title: "卡丁车", tagline: "不需要驾照的最接近赛车的运动。" },
       { id: "cycling", title: "骑行", tagline: "两个轮子，没有电机，足够多的痛苦。" },
       { id: "desk-setup", title: "桌搭", tagline: "魔法发生的地方（以及永远理不完的走线）。" }]
    : hobbies.slice(0, 3));

  return (
    <main>
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-32 w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <motion.div className="flex-1" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">{ui.hero.badge}</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">{site.name}</h1>
              <p className="mt-6 text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">{site.headline}</p>
              <p className="mt-4 text-base text-neutral-500 max-w-xl leading-relaxed">{site.subheadline}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {site.keywords.map((kw) => (
                  <span key={kw} className="px-3 py-1.5 text-sm rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">{kw}</span>
                ))}
              </div>
              <div className="mt-10 flex gap-4">
                <Link href="/projects" className="px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-80 transition-opacity">{ui.hero.viewProjects}</Link>
                <Link href="/about" className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">{ui.hero.aboutMe}</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex-shrink-0">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image src="/avatar.jpg" alt="Junkai Huang" width={288} height={288} className="w-full h-full object-cover" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle title={ui.home.featuredTitle} subtitle={ui.home.featuredSub} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">{ui.home.viewAll}</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle title={ui.home.lifeTitle} subtitle={ui.home.lifeSub} />
        <div className="grid md:grid-cols-3 gap-6">
          {previewHobbies.map((h, i) => (
            <motion.div key={h.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{h.title}</h3>
              <p className="mt-1 text-sm italic text-neutral-400">{h.tagline}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/life" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">{ui.home.seeMore}</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">{ui.home.ctaTitle}</h2>
          <p className="mt-3 text-neutral-500 max-w-lg mx-auto">{ui.home.ctaDesc}</p>
          <Link href="/contact" className="inline-block mt-6 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-80 transition-opacity">{ui.home.ctaBtn}</Link>
        </motion.div>
      </section>
    </main>
  );
}
