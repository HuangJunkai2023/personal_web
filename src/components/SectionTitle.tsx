"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-neutral-500 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
