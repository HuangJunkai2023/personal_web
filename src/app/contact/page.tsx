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

      {/* Resume downloads */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16"
      >
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Resume</h2>
        <p className="text-sm text-neutral-500 mb-6">Two versions depending on what you&apos;re looking for.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/%E8%A5%BF%E5%8D%97%E4%BA%A4%E5%A4%A7%E9%BB%84%E4%BF%8A%E5%87%BCMCU%E5%B5%8C%E5%85%A5%E5%BC%8F%E8%BD%AF%E4%BB%B6.pdf"
            download
            className="flex items-center justify-between p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group"
          >
            <div>
              <div className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                Embedded Systems Resume
              </div>
              <div className="text-sm text-neutral-500">MCU / Firmware focus</div>
            </div>
            <span className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors text-lg">&darr;</span>
          </a>
          <a
            href="/%E8%A5%BF%E5%8D%97%E4%BA%A4%E5%A4%A7%E9%BB%84%E4%BF%8A%E5%87%BC%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD.pdf"
            download
            className="flex items-center justify-between p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group"
          >
            <div>
              <div className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                Robotics & Embodied AI Resume
              </div>
              <div className="text-sm text-neutral-500">Robotics / AI focus</div>
            </div>
            <span className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors text-lg">&darr;</span>
          </a>
        </div>
      </motion.section>
    </main>
  );
}
