"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

const socials = [
  { label: "Email", href: `mailto:${siteConfig.contact.email}`, value: siteConfig.contact.email },
  { label: "GitHub", href: siteConfig.contact.github, value: "github.com/yourusername" },
  { label: "LinkedIn", href: siteConfig.contact.linkedin, value: "linkedin.com/in/yourusername" },
  { label: "Bilibili", href: siteConfig.contact.bilibili, value: "space.bilibili.com/yourid" },
  { label: "Instagram", href: siteConfig.contact.instagram, value: "@yourusername" },
];

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <SectionTitle
        title="Contact"
        subtitle="I'm always open to interesting conversations and collaborations."
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-12"
      >
        Whether you want to talk about embedded systems, robotics research, a project idea, or just share a good cycling route — feel free to reach out. I usually respond within a day or two.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-4">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target={s.label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group"
          >
            <div>
              <div className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                {s.label}
              </div>
              <div className="text-sm text-neutral-500">{s.value}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
