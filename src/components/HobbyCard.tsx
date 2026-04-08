"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Hobby } from "@/data/hobbies";

export default function HobbyCard({ hobby, index = 0 }: { hobby: Hobby; index?: number }) {
  const [active, setActive] = useState(0);
  const imgs = hobby.images ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:shadow-lg"
    >
      {/* Main image */}
      <div className="aspect-[4/3] relative bg-neutral-100 dark:bg-neutral-800">
        {imgs.length > 0 ? (
          <Image src={imgs[active]} alt={hobby.title} fill className="object-cover transition-opacity duration-300" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">Photo</div>
        )}
      </div>

      {/* Thumbnail strip */}
      {imgs.length > 1 && (
        <div className="flex gap-1 p-2 bg-neutral-50 dark:bg-neutral-900 overflow-x-auto">
          {imgs.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative flex-shrink-0 w-12 h-9 rounded overflow-hidden border-2 transition-colors ${
                i === active ? "border-neutral-900 dark:border-white" : "border-transparent"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{hobby.title}</h3>
        <p className="mt-1 text-sm italic text-neutral-400">{hobby.tagline}</p>
        <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{hobby.description}</p>
        {hobby.links && hobby.links.length > 0 && (
          <div className="mt-4 flex flex-col gap-2">
            {hobby.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline underline-offset-2 transition-colors">
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
