"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t } from "@/data/translations";
import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

const socials = [
  { label: "Email", href: `mailto:${siteConfig.contact.email}`, value: siteConfig.contact.email },
  { label: "GitHub", href: siteConfig.contact.github, value: "github.com/HuangJunkai2023" },
  { label: "LinkedIn", href: siteConfig.contact.linkedin, value: "linkedin.com/in/yourusername" },
  { label: "Bilibili", href: siteConfig.contact.bilibili, value: "space.bilibili.com/yourid" },
  { label: "Instagram", href: siteConfig.contact.instagram, value: "@yourusername" },
];

export default function ContactPage() {
  const { lang } = useLang();
  const ui = t[lang].contact;

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <SectionTitle title={ui.title} subtitle={ui.sub} />
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-12">
        {ui.desc}
      </motion.p>
      <div className="grid sm:grid-cols-2 gap-4">
        {socials.map((s, i) => (
          <motion.a key={s.label} href={s.href} target={s.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group">
            <div>
              <div className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">{s.label}</div>
              <div className="text-sm text-neutral-500">{s.value}</div>
            </div>
          </motion.a>
        ))}
      </div>
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-16">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{ui.resumeTitle}</h2>
        <p className="text-sm text-neutral-500 mb-6">{ui.resumeDesc}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a href="/resume-embedded.pdf" download className="flex items-center justify-between p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group">
            <div>
              <div className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">{ui.resumeEmbedded}</div>
              <div className="text-sm text-neutral-500">{ui.resumeEmbeddedSub}</div>
            </div>
            <span className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors text-lg">&darr;</span>
          </a>
          <a href="/resume-robotics.pdf" download className="flex items-center justify-between p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group">
            <div>
              <div className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">{ui.resumeRobotics}</div>
              <div className="text-sm text-neutral-500">{ui.resumeRoboticsSub}</div>
            </div>
            <span className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors text-lg">&darr;</span>
          </a>
        </div>
      </motion.section>
    </main>
  );
}
