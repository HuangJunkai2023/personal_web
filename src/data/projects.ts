export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
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
    slug: "stm32-motor-controller",
    title: "STM32 Brushless Motor Controller",
    description:
      "Designed and implemented a FOC (Field-Oriented Control) driver for BLDC motors on STM32F4, achieving smooth torque control at low speeds for robotic joint applications.",
    category: "Embedded Systems",
    tags: ["STM32F4", "FOC", "CAN Bus", "PCB Design", "C"],
    featured: true,
    details: {
      background:
        "Robotic joints demand precise, low-speed torque control that off-the-shelf ESCs can't deliver. I needed a compact controller that speaks CAN and fits inside a custom actuator housing.",
      work: "Wrote the full FOC pipeline — Clarke/Park transforms, PI current loops, SVM generation — running at 20 kHz on a STM32F405. Designed a 4-layer PCB with integrated current sensing and CAN transceiver. Tuned the control loops on a dynamometer rig.",
      challenges:
        "Getting stable current sampling in the presence of switching noise was the hardest part. Ended up redesigning the sense resistor layout twice and adding a hardware blanking window before ADC triggers.",
      takeaways:
        "Deepened my understanding of power electronics and real-time control. The board is now used across three different robot platforms in our lab.",
    },
  },
  {
    slug: "robomaster-infantry",
    title: "RoboMaster Infantry Robot",
    description:
      "Led embedded development for our team's infantry robot — real-time gimbal control, chassis omnidirectional movement, and a custom shooting system with automatic target tracking.",
    category: "Competitions",
    tags: ["STM32", "FreeRTOS", "PID", "CAN", "UART", "Computer Vision"],
    featured: true,
    details: {
      background:
        "RoboMaster is a robotics competition where teams build and program robots to compete in real-time battles. The infantry robot is the most versatile unit — it needs to move fast, aim precisely, and react to targets in milliseconds.",
      work: "Architected the firmware on FreeRTOS with separate tasks for gimbal stabilization (IMU + dual-axis PID at 1 kHz), chassis control (mecanum inverse kinematics), and communication with the vision co-processor over UART. Implemented a referee system protocol parser and an automatic ammo feeder with jam detection.",
      challenges:
        "Latency between the vision module's detection and the gimbal response was initially ~80 ms. Reduced it to ~15 ms by switching to DMA-based UART, pre-computing gimbal trajectories, and adding a Kalman predictor for moving targets.",
      takeaways:
        "This project taught me how to build reliable real-time systems under extreme time pressure. Our team placed in the regional top 8.",
    },
  },
  {
    slug: "electronic-design-contest",
    title: "National Electronic Design Contest — Signal Generator",
    description:
      "Built a high-precision DDS signal generator with STM32 + DAC, supporting arbitrary waveforms up to 10 MHz with THD below -50 dB.",
    category: "Competitions",
    tags: ["STM32", "DDS", "Analog Design", "PCB", "FPGA"],
    featured: false,
    details: {
      background:
        "The National Electronic Design Contest gives teams four days to design, build, and test an electronic system from scratch. Our topic required generating clean, arbitrary waveforms with strict spectral purity requirements.",
      work: "Implemented a DDS core on STM32H7 driving a 14-bit DAC at 100 MSPS through an FPGA-based interpolation stage. Designed a 6th-order elliptic reconstruction filter and a programmable output amplifier. Wrote a simple UI on a TFT screen for waveform selection and parameter tuning.",
      challenges:
        "Meeting the THD spec at higher frequencies required careful PCB layout — separating analog and digital grounds, using short traces to the DAC output, and adding proper decoupling. We went through three board revisions in two days.",
      takeaways:
        "Learned to make fast, pragmatic engineering decisions under a hard deadline. Won provincial first prize.",
    },
  },
  {
    slug: "robot-arm-embodied-ai",
    title: "Embodied AI — 6-DoF Robotic Arm Manipulation",
    description:
      "Exploring vision-language-action models for robotic manipulation. Training a 6-DoF arm to perform pick-and-place tasks from natural language instructions and RGB-D input.",
    category: "Robotics & Embodied AI",
    tags: ["Python", "PyTorch", "ROS2", "VLA", "Sim-to-Real"],
    featured: true,
    details: {
      background:
        "Embodied AI aims to give robots the ability to understand and act in the physical world. I'm investigating how vision-language-action (VLA) models can enable a robot arm to follow open-ended instructions without task-specific programming.",
      work: "Set up a sim-to-real pipeline: training in Isaac Sim with domain randomization, then deploying on a real 6-DoF arm with RealSense depth cameras. Fine-tuning a VLA model on our collected demonstration data. Building the ROS2 control stack for real-time inference and execution.",
      challenges:
        "The sim-to-real gap is real — policies that work perfectly in simulation often fail on hardware due to calibration errors, latency, and visual domain shift. Currently experimenting with better domain randomization and a small amount of real-world fine-tuning.",
      takeaways:
        "This is ongoing research. It's pushing me to understand both the ML side (transformers, imitation learning) and the systems side (real-time control, sensor fusion) deeply.",
    },
  },
  {
    slug: "vision-tracking-turret",
    title: "Auto-Tracking Turret with Computer Vision",
    description:
      "A pan-tilt turret that detects and tracks colored targets in real time using OpenCV on a Jetson Nano, with STM32 handling the servo control loop.",
    category: "Robotics & Embodied AI",
    tags: ["Jetson Nano", "OpenCV", "STM32", "PID", "Python", "C"],
    details: {
      background:
        "Built as a testbed for vision-guided aiming systems. The goal was sub-100ms detection-to-actuation latency with smooth tracking on moving targets.",
      work: "Ran a lightweight HSV-based detection pipeline on the Jetson Nano at 60 FPS, sending target coordinates to an STM32 over serial. The STM32 runs cascaded PID loops for the pan and tilt servos. Added a Kalman filter for target prediction during brief occlusions.",
      challenges:
        "Lighting changes caused the HSV thresholds to break constantly. Solved it with an adaptive calibration routine that runs on startup and adjusts thresholds based on ambient light measured by the camera's auto-exposure metadata.",
      takeaways:
        "Good exercise in heterogeneous system design — splitting compute between a Linux SBC and a microcontroller based on latency and determinism requirements.",
    },
  },
  {
    slug: "custom-mechanical-keyboard",
    title: "Custom Split Mechanical Keyboard",
    description:
      "Designed a split ergonomic keyboard from scratch — custom PCB with STM32, hot-swap sockets, RGB underglow, and QMK firmware with custom keymaps.",
    category: "Hardware / Electronics",
    tags: ["STM32", "KiCad", "QMK", "PCB Design", "3D Printing"],
    details: {
      background:
        "Wanted a keyboard that fits my workflow — split layout for ergonomics, programmable layers for embedded development shortcuts, and a compact form factor for my desk setup.",
      work: "Designed the schematic and PCB in KiCad with an STM32F072 (native USB, no crystal needed). Added per-key RGB LEDs, hot-swap sockets, and a USB-C interconnect between halves. 3D-printed the case in resin for a clean finish. Wrote custom QMK layers optimized for C development and terminal navigation.",
      challenges:
        "Routing a split keyboard PCB with RGB and hot-swap is tight. Had to go to 4 layers and carefully manage the ground plane under the USB data lines to pass compliance.",
      takeaways:
        "A fun project that combined PCB design, firmware, mechanical design, and 3D printing. I use it every day.",
    },
  },
  {
    slug: "smart-plant-monitor",
    title: "IoT Plant Monitoring System",
    description:
      "An ESP32-based sensor node that monitors soil moisture, light, and temperature, pushing data to a self-hosted dashboard via MQTT.",
    category: "Hardware / Electronics",
    tags: ["ESP32", "MQTT", "Sensors", "3D Printing", "IoT"],
    details: {
      background:
        "I kept forgetting to water my plants. Rather than set a reminder like a normal person, I built a monitoring system.",
      work: "Designed a compact sensor board around the ESP32-C3 with capacitive soil moisture, ambient light, and temperature/humidity sensors. Runs on a LiPo with solar charging, sleeping most of the time and waking every 15 minutes to take readings and publish over MQTT. The dashboard runs on a Raspberry Pi with Grafana.",
      challenges:
        "Getting reliable soil moisture readings required calibrating the capacitive sensor for different soil types and pot sizes. Also had to optimize deep sleep current draw to get reasonable battery life with the small solar panel.",
      takeaways:
        "A satisfying end-to-end IoT project — hardware, firmware, networking, and visualization. The plants are doing better now.",
    },
  },
];
