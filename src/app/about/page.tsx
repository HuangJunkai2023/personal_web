"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const techStack = [
  {
    category: "Embedded",
    items: ["STM32H7 / F4 / F1", "FreeRTOS", "CAN / SPI / I2C / UART", "USB CDC / DMA", "KiCad PCB Design", "Ozone / J-Link"],
  },
  {
    category: "Robotics",
    items: ["ROS2 / ROS1", "MoveIt2", "Isaac Sim", "IKFast / KDL", "PID / MIT / LADRC", "Kalman Filter"],
  },
  {
    category: "Embodied AI",
    items: ["Diffusion Policy", "VLA (π0 / π0.5)", "LoRA Fine-tuning", "LeRobot Dataset", "TeleOp / Data Collection", "RK3588 Deployment"],
  },
  {
    category: "Software",
    items: ["C / C++ (OOP)", "Python", "PyTorch", "Docker", "Git / GitFlow", "Linux"],
  },
  {
    category: "Hardware",
    items: ["STM32CubeMX", "Fusion 360", "3D Printing", "SMD Soldering", "Oscilloscope / Logic Analyzer"],
  },
];

const experiences = [
  {
    period: "2025.11 – Present",
    role: "Research Engineer — Embodied AI",
    org: "Huaxi Jingchuang Medical Technology (SenseTime × West China Hospital Joint Lab)",
    points: [
      "Built a mobile manipulation system based on Diffusion Policy and VLA (π0.5) for household tasks (wiping tables, transporting objects).",
      "Jetson edge node + 1080p fisheye wrist camera + RealSense depth camera → wireless inference on RTX 2080Ti server → Rokae ER3 Pro 7-DoF arm + Puwei P500 differential base.",
      "TeleOp data collection using smartphone AR pose tracking — single phone for full system teleoperation.",
      "Exploring tactile-augmented diffusion policies for contact-rich assembly tasks.",
    ],
  },
  {
    period: "2025.07 – 2025.12",
    role: "Researcher — VLA Real-Robot System",
    org: "University Project",
    points: [
      "Built an embodied AI system combining natural language understanding and robot control using Dobot CR5 arm + AG-95 gripper + dual D435 depth cameras.",
      "Collected 100+ demonstrations, built LeRobot-format dataset, LoRA fine-tuned π0 VLA model.",
      "Voice-to-text + camera input → ΔJoint output (6-axis + gripper). Deployed via TCP after Isaac Sim validation.",
    ],
  },
  {
    period: "2025.01 – 2025.08",
    role: "First Author — EI Conference Paper",
    org: "Embedded AI Research",
    points: [
      "\"Transformer Pruning and Optimization for Embodied AI: An Embedded Implementation on RK3588\"",
      "Proposed HALSP (Hybrid Adaptive Layer Selection Pruning) for hardware-friendly Transformer sparsification.",
      "Achieved <100ms response time on RK3588 while maintaining >80% accuracy in a VCM + CNN + LLM multimodal pipeline.",
    ],
  },
  {
    period: "2025.07 – 2025.09",
    role: "Inventor — Patent",
    org: "Rail Transit Anomaly Detection",
    points: [
      "\"A method, system and device for video anomaly object insertion and automatic mask generation\"",
      "Keyframe annotation + trajectory interpolation + VGG19/AdaIN style transfer + Poisson blending. One annotated frame generates 30 interpolated frames with pixel-level masks.",
    ],
  },
  {
    period: "2024.09 – 2025.06",
    role: "Embedded Lead — Infantry & Engineer Robots",
    org: "RoboMaster Competition Team, Southwest Jiaotong University",
    points: [
      "Infantry (swerve drive): APP/Module/BSP layered C++ firmware on STM32H7. Self-developed MA600 hollow-shaft encoder with field compensation (<0.1° error). Gyroscope-closed-loop gimbal with MIT control — <100ms step response to 0.1 rad, near-zero steady-state error.",
      "Engineer (7-DoF arm + mecanum): ROS2 + MoveIt2 + IKFast (4ms/solve) + KDL on upper computer. USB CDC with DMA ping-pong buffers + FreeRTOS CRC task. Self-built teach pendant using absolute encoders.",
      "Results: National 1st Prize (3rd nationally, 1st Southwest) · Alliance Match 3rd Place · Engineer National 2nd Prize — 6 national awards total.",
    ],
  },
  {
    period: "2025.03 – 2025.08",
    role: "4th Author — CCF-B Paper",
    org: "Medical Imaging Research",
    points: [
      "\"Anti-Forgetting Test-time Adaptation for Robust Medical Image Analysis under Distribution Shift\"",
    ],
  },
];

const awards = [
  { title: "RoboMaster 2025 Super Combat", result: "National 1st Prize — 3rd nationally, 1st in Southwest" },
  { title: "RoboMaster 2025 Alliance Match Southwest", result: "3rd Place (National 2nd Prize)" },
  { title: "RoboMaster 2025 Engineer Robot", result: "National 2nd Prize" },
  { title: "National Electronic Design Contest", result: "Provincial Award" },
  { title: "National academic competition awards", result: "9 national-level awards total, 1 provincial" },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-12">
          <div className="w-28 h-28 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
            <Image src="/avatar.jpg" alt="Junkai Huang" width={112} height={112} className="w-full h-full object-cover" />
          </div>
          <div>
            <SectionTitle title="About" />
          </div>
        </div>
      </motion.div>

      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        <p>
          I&apos;m Junkai Huang, a junior at Southwest Jiaotong University (211) studying Electronic Information Engineering — GPA 3.73/4.0 (91.65, ranked 18/81). President of the university robotics association, and embedded lead for the RoboMaster competition team.
        </p>
        <p>
          My work sits at the intersection of real-time embedded systems and embodied AI. On the hardware side, I build firmware for STM32 microcontrollers, design PCBs, and develop motor control systems. On the AI side, I train and deploy vision-language-action models on real robot hardware — from data collection to sim-to-real transfer to edge deployment on RK3588.
        </p>
        <p>
          I&apos;ve published an EI conference paper as first author, co-authored a CCF-B paper, filed an invention patent, and won 9 national-level competition awards including a RoboMaster National 1st Prize.
        </p>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Education</h3>
        <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-6">
          <div className="text-xs text-neutral-400 mb-1">2023.09 – 2027.06</div>
          <div className="font-medium text-neutral-900 dark:text-white">Southwest Jiaotong University (211)</div>
          <div className="text-sm text-neutral-500 mb-3">B.Eng. Electronic Information Engineering</div>
          <div className="flex flex-wrap gap-3 text-sm text-neutral-600 dark:text-neutral-400">
            <span>GPA 3.73 / 4.0 (91.65)</span>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <span>Rank 18 / 81</span>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <span>CET-6 547</span>
            <span className="text-neutral-300 dark:text-neutral-600">·</span>
            <span>IELTS 6.5</span>
          </div>
          <p className="mt-2 text-sm text-neutral-500">
            Key courses: Engineering Mathematics (94), Circuit Analysis & Design (96), Electronic Devices (96), Power Electronics, Embedded Systems.
          </p>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Experience & Research</h3>
        <div className="space-y-10">
          {experiences.map((e) => (
            <div key={e.role + e.period} className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-6">
              <div className="text-xs text-neutral-400 mb-1">{e.period}</div>
              <div className="font-medium text-neutral-900 dark:text-white">{e.role}</div>
              <div className="text-sm text-neutral-500 mb-3">{e.org}</div>
              <ul className="space-y-2">
                {e.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <span className="text-neutral-400 mt-0.5 flex-shrink-0">▸</span>{p}
                  </li>
                ))}
              </ul>
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
        <div className="space-y-3">
          {awards.map((a) => (
            <div key={a.title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-sm text-neutral-700 dark:text-neutral-300">{a.title}</span>
              <span className="text-sm text-neutral-500 sm:text-right">{a.result}</span>
            </div>
          ))}
        </div>
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
          I like building things that exist in the physical world. Writing code that makes a motor spin precisely, a robot arm reach for an object, or a gimbal hold steady while the chassis underneath slides sideways at full speed — that feedback loop between software and physics is what keeps me engaged. Embedded systems are where every microsecond matters and every byte counts.
        </p>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Embodied AI is the natural extension: giving machines the ability to perceive, reason, and act in unstructured environments using learned policies rather than hand-coded rules. I want to work at the intersection of real-time control, hardware design, and machine learning — and I&apos;m building toward that one project at a time.
        </p>
      </motion.section>
    </main>
  );
}
