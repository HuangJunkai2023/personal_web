export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  images?: string[];
  video?: string;
  featured?: boolean;
  period?: string;
  details: {
    background: string;
    work: string;
    challenges: string;
    takeaways: string;
  };
}

export const categories = [
  "All",
  "Embedded Systems",
  "Competitions",
  "Robotics & Embodied AI",
  "Hardware / Electronics",
] as const;

export const projects: Project[] = [
  {
    slug: "robomaster-infantry",
    title: "RoboMaster Swerve Drive Infantry Robot",
    description:
      "Led embedded development for a swerve-drive infantry robot — custom encoder design, gimbal stabilization, omnidirectional chassis control, and power management. Won 1st place at the Southwest Regional and 3rd nationally at RoboMaster 2025.",
    category: "Competitions",
    tags: ["STM32H7", "FreeRTOS", "CAN Bus", "PID", "FOC", "C++"],
    image: "/projects/robomaster_infantry/IMG_8531.jpg",
    images: [
      "/projects/robomaster_infantry/IMG_20250312_135819.jpg",
      "/projects/robomaster_infantry/20250316-145007.jpg",
      "/projects/robomaster_infantry/IMG_8531.jpg",
    ],
    video: "/projects/robomaster_infantry/Screenrecorder-2025-05-24-18-17-56-313.mp4",
    featured: true,
    period: "2024.09 – 2025.06",
    details: {
      background:
        "RoboMaster is a full-contact robot combat competition where teams design, build, and program robots from scratch. I was the embedded lead for our swerve-drive infantry — the most mechanically complex unit on the field, requiring precise omnidirectional movement and a stabilized gimbal that can track targets regardless of chassis orientation.",
      work: "Designed a layered firmware architecture (APP / Module / BSP) in C++ with full decoupling between application logic, motor/sensor drivers, and peripheral HAL. Built a self-developed hollow-shaft magnetic encoder using the MPS MA600 chip with a field compensation algorithm, achieving <0.1° error. Implemented swerve chassis kinematics with vector decomposition, 1st-order low-pass filtering for smooth high-agility movement, and PID-based current allocation to minimize wheel slip. Developed a gyroscope-closed-loop gimbal with MIT control (position + velocity + feedforward torque in parallel) and variable-speed integration, achieving <100 ms step response to 0.1 rad with near-zero steady-state error on a 2 kg gimbal driven by a 1 Nm direct-drive motor.",
      challenges:
        "Wireless debugging was critical for fast iteration on the field. Integrated Ozone + J-Link over LAN via an onboard Linux SBC, enabling non-intrusive parameter tuning without touching the robot. Encoder field compensation required careful characterization of magnetic interference from nearby motors.",
      takeaways:
        "2025 RoboMaster Super Combat — National 1st Prize (3rd nationally, 1st in Southwest). Alliance Match Southwest — 3rd place (National 2nd Prize).",
    },
  },
  {
    slug: "robomaster-engineer",
    title: "RoboMaster 7-DoF Arm Engineer Robot",
    description:
      "Embedded lead for a 7-axis robotic arm engineer robot with mecanum chassis. Built the full control stack from ROS2+MoveIt2 motion planning on the host PC down to real-time joint control on STM32.",
    category: "Competitions",
    tags: ["STM32", "ROS2", "MoveIt2", "IKFast", "FreeRTOS", "USB CDC"],
    image: "/projects/robomaster_engineer/IMG_8522.jpg",
    images: [
      "/projects/robomaster_engineer/IMG_20250416_000508.jpg",
      "/projects/robomaster_engineer/IMG_8522.jpg",
    ],
    video: "/projects/robomaster_engineer/VID_20250423_233416.mp4",
    featured: true,
    period: "2024.09 – 2025.06",
    details: {
      background:
        "The engineer robot must autonomously pick up ore and exchange resources — tasks requiring precise 7-DoF arm control and reliable communication between a high-level planner and a real-time embedded controller.",
      work: "Implemented USB virtual serial port communication between the STM32 lower computer and the ROS2 upper computer, using ring buffers and DMA double-buffering (ping-pong) for reliable high-throughput data transfer with CRC validation in a dedicated FreeRTOS task. On the upper computer, built a ROS2 + MoveIt2 + KDL arm control module with full simulation in NVIDIA Isaac Sim. Used IKFast (URDF-generated) for inverse kinematics at 4 ms per solve, and KDL for forward kinematics to handle non-Pieper configurations. Built a custom teach pendant using absolute encoders to map controller positions to arm joint targets for high-precision teleoperation and data collection.",
      challenges:
        "Coordinating a 7-DoF arm with a moving mecanum chassis required careful frame transforms and latency management. The IKFast solver needed a clean URDF with accurate joint limits to avoid degenerate solutions near singularities.",
      takeaways:
        "2025 RoboMaster Super Combat — National 2nd Prize.",
    },
  },
  {
    slug: "embodied-ai-housework-robot",
    title: "Embodied AI Housework Robot",
    description:
      "Built a mobile manipulation system based on Diffusion Policy and VLA (π0.5) for household tasks. Deployed on a 7-DoF arm + differential drive base, with TeleOp data collection using a single smartphone.",
    category: "Robotics & Embodied AI",
    tags: ["Diffusion Policy", "VLA", "ROS1", "Jetson", "RealSense", "Python"],
    image: "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA.jpg",
    images: [
      "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA.jpg",
      "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA.jpg",
      "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E5%AE%9E%E9%AA%8C%E5%9C%BA%E6%99%AF.jpg",
    ],
    video: "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BAdemo.mp4",
    featured: true,
    period: "2025.11 – Present",
    details: {
      background:
        "Research project at the SenseTime–West China Hospital Joint Lab (Huaxi Jingchuang Medical Technology). The goal: build a mobile manipulation system capable of household tasks like wiping tables and transporting objects, using imitation learning from human demonstrations.",
      work: "Designed the full system around a Jetson edge compute node, integrating a 1080p 180° fisheye wrist camera and a RealSense depth camera for perception. Visual data streams wirelessly to a remote RTX 2080Ti inference server running Diffusion Policy and VLA (π0.5) models. The Jetson receives inferred actions and controls a Puwei P500 differential drive base (via ROS1 Docker) and a Rokae ER3 Pro 7-DoF arm with a Jodell EPG two-finger gripper. Data collection uses smartphone AR (TeleOp) — a single phone captures full 6-DoF pose for teleoperation and demonstration recording.",
      challenges:
        "Closing the perception–decision–execution loop over wireless with acceptable latency required careful pipeline optimization. The fisheye lens introduced significant distortion that needed calibration before feeding into the policy network.",
      takeaways:
        "Ongoing research. Currently exploring tactile-augmented diffusion policies for contact-rich assembly tasks, combining high-level action generation with high-frequency tactile residual correction.",
    },
  },
  {
    slug: "electronic-design-contest",
    title: "National Electronic Design Contest",
    description:
      "Built a complete electronic system from scratch in 4 days for the National Electronic Design Contest. Competed at the provincial level.",
    category: "Competitions",
    tags: ["STM32", "Analog Design", "PCB", "Signal Processing"],
    image: "/projects/%E7%94%B5%E8%B5%9B/IMG_20250802_105951.jpg",
    images: [
      "/projects/%E7%94%B5%E8%B5%9B/IMG_20250727_215616.jpg",
      "/projects/%E7%94%B5%E8%B5%9B/IMG_20250802_105951.jpg",
    ],
    video: "/projects/%E7%94%B5%E8%B5%9B/1775487820166_COMPRESSED.mp4",
    featured: false,
    period: "2025.07 – 2025.08",
    details: {
      background:
        "The National Electronic Design Contest (全国大学生电子设计竞赛) gives teams four days to design, build, and test a complete electronic system from scratch. It's one of the most demanding undergraduate engineering competitions in China.",
      work: "Designed and implemented the full system including schematic, PCB layout, firmware, and testing within the competition window. Focused on signal integrity, analog front-end design, and real-time STM32 control.",
      challenges:
        "Four days is extremely tight for a complete hardware + firmware system. Prioritizing what to build vs. what to simplify under time pressure is the core skill the competition tests.",
      takeaways:
        "Learned to make fast, pragmatic engineering decisions under a hard deadline. The competition sharpened both my hardware intuition and my ability to debug under pressure.",
    },
  },
  {
    slug: "diy-rc-controller",
    title: "Open-Source Custom RC Controller",
    description:
      "Designed and open-sourced a custom RC transmitter — custom PCB, STM32 firmware, and ergonomic 3D-printed housing.",
    category: "Hardware / Electronics",
    tags: ["STM32", "KiCad", "3D Printing", "RF", "Open Source"],
    image: "/projects/diy%26opensource/%E8%87%AA%E5%B7%B1%E8%AE%BE%E8%AE%A1%E5%BC%80%E6%BA%90%E7%9A%84%E9%81%A5%E6%8E%A7%E5%99%A8.jpg",
    images: [
      "/projects/diy%26opensource/%E8%87%AA%E5%B7%B1%E8%AE%BE%E8%AE%A1%E5%BC%80%E6%BA%90%E7%9A%84%E9%81%A5%E6%8E%A7%E5%99%A8.jpg",
    ],
    featured: false,
    details: {
      background:
        "Off-the-shelf RC controllers are either too expensive, too limited, or both. I wanted a transmitter I could fully customize — hardware, firmware, and form factor — and share with others.",
      work: "Designed the PCB in KiCad around an STM32 microcontroller with hall-effect gimbals, custom switch layout, and a compact RF module. Wrote firmware from scratch with configurable channel mapping and protocol support. Modeled and 3D-printed the housing for a comfortable grip.",
      challenges:
        "RF noise from the STM32 clock harmonics required careful PCB layout and shielding around the RF module. Getting the gimbal feel right took several iterations of spring tension and mechanical travel adjustment.",
      takeaways:
        "Open-sourced the design. A good exercise in making something polished enough that others can actually use it.",
    },
  },
];
