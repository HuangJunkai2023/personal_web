"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const techStack = [
  {
    category: "Embedded",
    items: ["STM32H7 / F4 / F1", "ESP32", "FreeRTOS", "CAN Bus", "SPI / I2C / UART / USB CDC", "DMA / Interrupt"],
  },
  {
    category: "Robotics",
    items: ["ROS2 / ROS1", "MoveIt2", "Isaac Sim", "IKFast / KDL", "PID / MIT Control", "Kalman Filter"],
  },
  {
    category: "AI / ML",
    items: ["Diffusion Policy", "VLA (π0.5)", "PyTorch", "Imitation Learning", "Sim-to-Real"],
  },
  {
    category: "Hardware",
    items: ["KiCad", "PCB Design (4-layer)", "Magnetic Encoder Design", "3D Printing", "Oscilloscope / Logic Analyzer"],
  },
  {
    category: "Software",
    items: ["C / C++ (OOP)", "Python", "TypeScript", "Git", "Linux / Docker"],
  },
];

const experiences = [
  {
    period: "2025.11 – Present",
    role: "Research Engineer",
    org: "SenseTime – West China Hospital Joint Lab (Huaxi Jingchuang Medical Technology)",
    desc: "Building a mobile manipulation system for household tasks using Diffusion Policy and VLA (π0.5). Designed the full perception–inference–execution pipeline on Jetson + RealSense + 7-DoF arm. Exploring tactile-augmented diffusion policies for contact-rich assembly.",
  },
  {
    period: "2024.09 – 2025.06",
    role: "Embedded Lead — Infantry & Engineer Robots",
    org: "RoboMaster Competition Team, Southwest Jiaotong University",
    desc: "Led embedded development for two robots simultaneously. Infantry: swerve-drive chassis with self-developed MA600 hollow-shaft encoder, gyroscope-closed-loop gimbal with MIT control, achieving <0.1° encoder error and <100 ms gimbal step response. Engineer: 7-DoF arm with ROS2 + MoveIt2 + IKFast (4 ms/solve) and USB CDC communication with DMA double-buffering.",
  },
  {
    period: "2025.07 – 2025.08",
    role: "Competitor",
    org: "National Electronic Design Contest (全国大学生电子设计竞赛)",
    desc: "Designed and built a complete electronic system from scratch within a 4-day competition window. Full stack: schematic, PCB layout, STM32 firmware, and analog front-end.",
  },
];

const awards = [
  "2025 RoboMaster Super Combat — National 1st Prize (3rd nationally, 1st in Southwest)",
  "2025 RoboMaster Alliance Match Southwest — 3rd Place (National 2nd Prize)",
  "2025 RoboMaster Super Combat (Engineer) — National 2nd Prize",
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <SectionTitle title="About" />
      </motion.div>

      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        <p>
          I&apos;m Junkai Huang, a student engineer at Southwest Jiaotong University focused on embedded systems, robotics, and embodied AI. Most of my time goes into writing firmware for STM32 microcontrollers, building real-time control systems for competition robots, and exploring how imitation learning can give machines the ability to manipulate the physical world.
        </p>
        <p>
          I&apos;ve been the embedded lead for RoboMaster competition robots for two consecutive seasons — responsible for everything from low-level motor control and custom encoder hardware to high-level chassis kinematics and gimbal stabilization. In parallel, I&apos;m doing research on mobile manipulation using Diffusion Policy and VLA models at the SenseTime–West China Hospital Joint Lab.
        </p>
        <p>
          Outside of engineering, I&apos;m into karting, road cycling, sim racing, 3D printing, and endlessly tweaking my desk setup. I also have a habit of taking apart any electronic device I can get my hands on.
        </p>
      </motion.section>

      {/* What I'm working on */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">What I&apos;m Working On</h3>
        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
          <li className="flex gap-3"><span className="text-neutral-400 mt-0.5">▸</span>Tactile-augmented diffusion policies for contact-rich robotic assembly</li>
          <li className="flex gap-3"><span className="text-neutral-400 mt-0.5">▸</span>Hierarchical tactile force-control execution framework (slow policy + fast tactile residual)</li>
          <li className="flex gap-3"><span className="text-neutral-400 mt-0.5">▸</span>Continued development of the RoboMaster robot platform</li>
          <li className="flex gap-3"><span className="text-neutral-400 mt-0.5">▸</span>Sim-to-real transfer and TeleOp data collection pipelines</li>
        </ul>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Experience</h3>
        <div className="space-y-8">
          {experiences.map((e) => (
            <div key={e.role} className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-6">
              <div className="text-xs text-neutral-400 mb-1">{e.period}</div>
              <div className="font-medium text-neutral-900 dark:text-white">{e.role}</div>
              <div className="text-sm text-neutral-500 mb-2">{e.org}</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Awards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Awards</h3>
        <ul className="space-y-3">
          {awards.map((a) => (
            <li key={a} className="flex gap-3 text-neutral-600 dark:text-neutral-400 text-sm">
              <span className="text-neutral-400 mt-0.5 flex-shrink-0">▸</span>{a}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Tech Stack</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group) => (
            <div key={group.category}>
              <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Why Embedded Systems & Embodied AI</h3>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I like building things that exist in the physical world. Software is powerful, but there&apos;s something uniquely satisfying about writing code that makes a motor spin precisely, a robot arm reach for an object, or a gimbal hold steady while the chassis underneath it is sliding sideways at full speed. Embedded systems are where software meets physics — every microsecond matters, every byte of memory counts.
        </p>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Embodied AI takes this further. The question of how to give a robot the ability to perceive, reason, and act in unstructured environments — using learned policies rather than hand-coded rules — is one of the most interesting open problems in engineering right now. I want to work at that intersection of control systems, real-time firmware, and machine learning.
        </p>
      </motion.section>
    </main>
  );
}
