"use client";

import { motion } from "framer-motion";
import type { Hobby } from "@/data/hobbies";

export default function HobbyCard({ hobby, index = 0 }: { hobby: Hobby; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:shadow-lg"
    >
      {/* Placeholder image */}
      <div className="aspect-[4/3] bg-gradient-to-br from-neutral-50 to-neutral-150 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
        <span className="text-neutral-400 dark:text-neutral-600 text-sm">Photo</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {hobby.title}
        </h3>
        <p className="mt-1 text-sm italic text-neutral-400">{hobby.tagline}</p>
        <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
          {hobby.description}
        </p>
      </div>
    </motion.div>
  );
}
