"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t } from "@/data/translations";
import { siteConfig } from "@/data/site";
import { siteConfigZh } from "@/data/site.zh";
import SectionTitle from "@/components/SectionTitle";

const experiencesEn = [
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
    points: ["\"Anti-Forgetting Test-time Adaptation for Robust Medical Image Analysis under Distribution Shift\""],
  },
];

const experiencesZh = [
  {
    period: "2025.11 – 至今",
    role: "科研工程师 — 具身智能",
    org: "华西精创医疗科技有限公司（商汤科技-华西医院联合实验室）",
    points: [
      "基于 Diffusion Policy 和 VLA（π0.5）构建家务任务移动操作系统（擦桌子、搬运物品等）。",
      "Jetson 边缘节点 + 1080p 鱼眼腕部相机 + RealSense 深度相机 → 无线推理至 RTX 2080Ti 服务器 → Rokae ER3 Pro 七轴机械臂 + 朴为 P500 差速底盘。",
      "使用手机 AR 功能（TeleOp）进行数据采集，单台手机完成整个系统示教。",
      "探索面向接触密集型装配任务的触觉增强扩散策略。",
    ],
  },
  {
    period: "2025.07 – 2025.12",
    role: "研究员 — VLA 实机系统",
    org: "校级项目",
    points: [
      "基于 Dobot CR5 机械臂 + AG-95 夹爪 + 双 D435 深度相机，构建融合自然语言理解与机器人控制的具身智能系统。",
      "采集 100+ 条示教数据，制作 LeRobot 格式数据集，对 π0 VLA 模型进行 LoRA 微调。",
      "语音转文字 + 相机输入 → ΔJoint 输出（六轴+夹爪）。Isaac Sim 仿真验证后通过 TCP 连接实机部署。",
    ],
  },
  {
    period: "2025.01 – 2025.08",
    role: "EI 会议论文独立一作",
    org: "嵌入式 AI 研究",
    points: [
      "《Transformer Pruning and Optimization for Embodied AI: An Embedded Implementation on RK3588》",
      "提出 HALSP（混合感知层选择结构化剪枝）方法，实现硬件友好型 Transformer 稀疏化。",
      "在 VCM + CNN + LLM 多模态流水线中，保持 80% 以上准确率的同时将 RK3588 响应时间优化至 100ms 以内。",
    ],
  },
  {
    period: "2025.07 – 2025.09",
    role: "发明人 — 发明专利",
    org: "轨道交通异常检测",
    points: [
      "《一种视频异常物体插入与掩码自动生成方法、系统及设备》",
      "关键帧标注 + 轨迹插值 + VGG19/AdaIN 风格迁移 + 泊松融合。标注一帧可插值生成 30 帧并附带像素级掩码。",
    ],
  },
  {
    period: "2024.09 – 2025.06",
    role: "嵌入式电控负责人 — 步兵 & 工程机器人",
    org: "西南交通大学 RoboMaster 竞赛队",
    points: [
      "步兵（舵轮底盘）：STM32H7 上 APP/Module/BSP 三层解耦 C++ 固件。自研 MA600 中空编码器（误差 <0.1°）。陀螺仪闭环云台 MIT 控制——100ms 内无超调达到 0.1 弧度阶跃响应。",
      "工程（7轴机械臂+麦轮）：上位机 ROS2 + MoveIt2 + IKFast（4ms/次）+ KDL。USB CDC DMA 乒乓缓冲 + FreeRTOS CRC 任务。自研绝对编码器示教器。",
      "成果：全国一等奖（全国第三，西南站第一）· 盟赛西南站季军 · 工程机器人全国二等奖 — 共 6 项国奖。",
    ],
  },
  {
    period: "2025.03 – 2025.08",
    role: "CCF-B 论文四作",
    org: "医学影像研究",
    points: ["《Anti-Forgetting Test-time Adaptation for Robust Medical Image Analysis under Distribution Shift》"],
  },
];

const awardsEn = [
  { title: "RoboMaster 2025 — Super Combat, Infantry Robot Competition Award", result: "National 1st Prize" },
  { title: "RoboMaster 2025 — Super Combat, Engineer Robot Competition Award", result: "National 2nd Prize" },
  { title: "RoboMaster 2025 — Super Combat, National Finals", result: "National 3rd Prize" },
  { title: "RoboMaster 2025 — Super Combat, Regional (Central)", result: "2nd Prize" },
  { title: "RoboMaster 2025 — Alliance Match 3v3, Infantry Competition Award", result: "National 2nd Prize" },
  { title: "RoboMaster 2025 — Alliance Match Southwest", result: "1st Prize" },
  { title: "RoboMaster 2024 — Super Combat, Dart Robot Competition Award", result: "National 2nd Prize" },
  { title: "RoboMaster 2024 — Super Combat, National Finals", result: "National 3rd Prize" },
  { title: "RoboMaster 2024 — Super Combat, Regional (Southern)", result: "2nd Prize" },
];

const awardsZh = [
  { title: "第二十四届全国大学生机器人大赛 RoboMaster2025 超级对抗赛 · 机器人竞技奖步兵组", result: "全国一等奖" },
  { title: "第二十四届全国大学生机器人大赛 RoboMaster2025 超级对抗赛 · 机器人竞技奖工程组", result: "全国二等奖" },
  { title: "第二十四届全国大学生机器人大赛 RoboMaster2025 超级对抗赛 · 全国赛", result: "全国三等奖" },
  { title: "第二十四届全国大学生机器人大赛 RoboMaster2025 超级对抗赛 · 区域赛（中部赛区）", result: "二等奖" },
  { title: "第二十四届全国大学生机器人大赛 RoboMaster2025 高校联盟赛3V3 · 步兵竞技奖", result: "全国二等奖" },
  { title: "第二十四届全国大学生机器人大赛 RoboMaster2025 高校联盟赛（西南站）", result: "一等奖" },
  { title: "第二十三届全国大学生机器人大赛 RoboMaster2024 超级对抗赛 · 机器人竞技奖飞镖组", result: "全国二等奖" },
  { title: "第二十三届全国大学生机器人大赛 RoboMaster2024 超级对抗赛 · 全国赛", result: "全国三等奖" },
  { title: "第二十三届全国大学生机器人大赛 RoboMaster2024 超级对抗赛 · 区域赛（南部赛区）", result: "二等奖" },
];

export default function AboutPage() {
  const { lang } = useLang();
  const ui = t[lang].about;
  const site = lang === "zh" ? siteConfigZh : siteConfig;
  const experiences = lang === "zh" ? experiencesZh : experiencesEn;
  const awards = lang === "zh" ? awardsZh : awardsEn;

  const introEn = [
    "I'm Junkai Huang, a junior at Southwest Jiaotong University (211) studying Electronic Information Engineering — GPA 3.73/4.0 (91.65, ranked 18/81). President of the university robotics association, and embedded lead for the RoboMaster competition team.",
    "My work sits at the intersection of real-time embedded systems and embodied AI. On the hardware side, I build firmware for STM32 microcontrollers, design PCBs, and develop motor control systems. On the AI side, I train and deploy vision-language-action models on real robot hardware — from data collection to sim-to-real transfer to edge deployment on RK3588.",
    "I've published an EI conference paper as first author, co-authored a CCF-B paper, filed an invention patent, and won 9 national-level competition awards including a RoboMaster National 1st Prize.",
    "ISTJ-T — systematic, detail-oriented, and allergic to half-finished work.",
  ];
  const introZh = [
    "我是黄俊凯，西南交通大学（211）电子信息工程专业大三学生，GPA 3.73/4.0（91.65，排名 18/81）。现任校机器人协会会长，RoboMaster 竞赛队嵌入式电控负责人。",
    "我的工作处于实时嵌入式系统与具身智能的交叉点。硬件侧，我为 STM32 微控制器编写固件、设计 PCB、开发电机控制系统；AI 侧，我在真实机器人硬件上训练和部署视觉-语言-动作模型——从数据采集到 Sim-to-Real 迁移，再到 RK3588 边缘部署。",
    "已以第一作者发表 EI 会议论文一篇，参与发表 CCF-B 论文一篇，申请发明专利一项，获国家级学科竞赛奖项 9 项，其中包括 RoboMaster 全国一等奖。",
    "ISTJ-T — 系统性思维，注重细节，对半途而废过敏。",
  ];
  const intro = lang === "zh" ? introZh : introEn;

  const eduEn = { period: "2023.09 – 2027.06", school: "Southwest Jiaotong University (211)", degree: "B.Eng. Electronic Information Engineering", stats: "GPA 3.73 / 4.0 (91.65) · Rank 18 / 81 · CET-6 547 · IELTS 6.5", courses: "Key courses: Engineering Mathematics (94), Circuit Analysis & Design (96), Electronic Devices (96), Power Electronics, Embedded Systems." };
  const eduZh = { period: "2023.09 – 2027.06", school: "西南交通大学（211）", degree: "电子信息工程 本科", stats: "GPA 3.73 / 4.0（91.65）· 排名 18 / 81 · CET-6 547 · 雅思 6.5", courses: "主要课程：工程数学（94）、电路分析与设计（96）、电子器件物理（96）、电力电子、嵌入式系统。" };
  const edu = lang === "zh" ? eduZh : eduEn;

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-12">
          <div className="w-28 h-28 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
            <Image src="/avatar.jpg" alt="Junkai Huang" width={112} height={112} className="w-full h-full object-cover" />
          </div>
          <div><SectionTitle title={ui.title} /></div>
        </div>
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {intro.map((p, i) => <p key={i}>{p}</p>)}
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">{ui.nowTitle}</h3>
        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
          {ui.now.map((item, i) => (
            <li key={i} className="flex gap-3"><span className="text-neutral-400 mt-0.5 flex-shrink-0">▸</span>{item}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">{ui.eduTitle}</h3>
        <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-6">
          <div className="text-xs text-neutral-400 mb-1">{edu.period}</div>
          <div className="font-medium text-neutral-900 dark:text-white">{edu.school}</div>
          <div className="text-sm text-neutral-500 mb-3">{edu.degree}</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">{edu.stats}</div>
          <p className="mt-2 text-sm text-neutral-500">{edu.courses}</p>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">{ui.expTitle}</h3>
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

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">{ui.awardsTitle}</h3>
        <div className="space-y-3">
          {awards.map((a) => (
            <div key={a.title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-sm text-neutral-700 dark:text-neutral-300">{a.title}</span>
              <span className="text-sm text-neutral-500 sm:text-right">{a.result}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">{ui.stackTitle}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.techStack.map((group) => (
            <div key={group.category}>
              <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">{ui.whyTitle}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{ui.why1}</p>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">{ui.why2}</p>
      </motion.section>
    </main>
  );
}
