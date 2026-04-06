"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <SectionTitle title="About Me" subtitle="The short version — and the slightly longer one." />
      </motion.div>

      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="prose prose-neutral dark:prose-invert max-w-none"
      >
        {siteConfig.about.split("\n\n").map((p, i) => (
          <p key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {p}
          </p>
        ))}
      </motion.section>

      {/* What I'm Doing Now */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
          What I&apos;m Working On
        </h3>
        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
          <li className="flex gap-3"><span className="text-neutral-400">&#9656;</span>Exploring vision-language-action models for robotic manipulation</li>
          <li className="flex gap-3"><span className="text-neutral-400">&#9656;</span>Building control systems for competition robots (RoboMaster)</li>
          <li className="flex gap-3"><span className="text-neutral-400">&#9656;</span>Developing custom STM32-based motor controllers</li>
          <li className="flex gap-3"><span className="text-neutral-400">&#9656;</span>Learning more about sim-to-real transfer and imitation learning</li>
        </ul>
      </motion.section>

      {/* Why Embedded + Robotics + Embodied AI */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
          Why Embedded Systems, Robotics & Embodied AI
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I like building things that exist in the physical world. Software is powerful, but there&apos;s something uniquely satisfying about writing code that makes a motor spin, a robot arm reach, or a sensor respond to its environment. Embedded systems are where software meets physics — every microsecond matters, every bit of memory counts, and you can&apos;t just restart the server when something goes wrong.
        </p>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Embodied AI takes this further — giving machines the ability to perceive, reason, and act in unstructured environments. It&apos;s the frontier where control theory, computer vision, and language models converge. I want to be part of building that future.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
          Tech Stack
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.techStack.map((group) => (
            <div key={group.category}>
              <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Interests */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
          Outside of Work
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          When I&apos;m not in front of a terminal or soldering iron, you&apos;ll find me at the karting track, on a road bike, tweaking my sim racing setup, or 3D-printing parts for whatever project I&apos;m currently obsessed with. I also enjoy photography — mostly street and architecture — and I have a never-ending quest for the perfect desk setup.
        </p>
      </motion.section>
    </main>
  );
}
