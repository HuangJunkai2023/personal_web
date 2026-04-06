import type { Project } from "./projects";

export const categoriesZh = ["全部", "嵌入式系统", "竞赛", "机器人与具身智能", "硬件 / 电子"] as const;

export const projectsZh: Project[] = [
  {
    slug: "robomaster-infantry",
    title: "RoboMaster 舵轮底盘步兵机器人",
    description:
      "担任嵌入式电控负责人，主导舵轮底盘步兵机器人的全栈固件开发——自研编码器、陀螺仪闭环云台、全向底盘控制与功率管理。2025年RoboMaster超级对抗赛全国一等奖（西南站第一，全国第三）。",
    category: "竞赛",
    tags: ["STM32H7", "FreeRTOS", "CAN总线", "PID", "FOC", "C++"],
    image: "/projects/robomaster_infantry/IMG_8531.jpg",
    images: [
      "/projects/robomaster_infantry/IMG_8531.jpg",
      "/projects/robomaster_infantry/IMG_20250312_135819.jpg",
      "/projects/robomaster_infantry/20250316-145007.jpg",
    ],
    video: "/projects/robomaster_infantry/Screenrecorder-2025-05-24-18-17-56-313.mp4",
    featured: true,
    period: "2024.09 – 2025.06",
    details: {
      background:
        "RoboMaster 是一项全接触机器人对抗竞赛，队伍需要从零设计、制造并编程机器人。我负责舵轮底盘步兵机器人的嵌入式开发——这是场上机械结构最复杂的单位，需要精准的全向移动和不受底盘姿态影响的稳定云台。",
      work: "采用 C++ 面向对象设计 APP/Module/BSP 三层解耦固件架构。使用 MPS MA600 芯片自研高精中空编码器，配合磁场补偿算法实现小于 0.1° 的误差。实现舵轮底盘向量运动解算，配合一阶低通滤波平滑高机动移动，以及 PID 误差占比电流分配技术减少打滑。开发陀螺仪闭环云台，融合变速积分与 MIT 控制（角度环、角速度环、前馈力矩并联），在约 2kg 直驱云台上实现 100ms 内无超调达到 0.1 弧度阶跃响应。",
      challenges:
        "无线调试对快速迭代至关重要。通过车载 Linux 上位机配合 Ozone + J-Link 局域网调试，实现无侵入式调参。编码器磁场补偿需要对周边电机磁场干扰进行精细标定。",
      takeaways:
        "2025 RoboMaster 超级对抗赛全国一等奖（全国第三，西南站第一）。盟赛西南站季军（全国二等奖）。",
    },
  },
  {
    slug: "robomaster-engineer",
    title: "RoboMaster 7轴机械臂工程机器人",
    description:
      "担任嵌入式电控负责人，主导麦轮底盘7轴机械臂工程机器人的全栈控制——从上位机 ROS2+MoveIt2 运动规划到 STM32 实时关节控制。",
    category: "竞赛",
    tags: ["STM32", "ROS2", "MoveIt2", "IKFast", "FreeRTOS", "USB CDC"],
    image: "/projects/robomaster_engineer/IMG_8522.jpg",
    images: [
      "/projects/robomaster_engineer/IMG_8522.jpg",
      "/projects/robomaster_engineer/IMG_20250416_000508.jpg",
    ],
    video: "/projects/robomaster_engineer/VID_20250423_233416.mp4",
    featured: true,
    period: "2024.09 – 2025.06",
    details: {
      background:
        "工程机器人需要自主拾取矿石并完成资源兑换——这要求精准的7自由度机械臂控制，以及高层规划器与实时嵌入式控制器之间的可靠通信。",
      work: "实现 STM32 下位机与 ROS2 上位机之间的 USB 虚拟串口通信，采用环形缓冲区与 DMA 乒乓缓冲区保障高吞吐量数据传输，在独立 FreeRTOS 任务中完成 CRC 校验。上位机基于 ROS2 + MoveIt2 + KDL 开发机械臂控制模块，在 NVIDIA Isaac Sim 完成仿真验证。使用 IKFast（URDF 自动生成）进行逆运动学求解，单次解算仅需 4ms；正运动学采用 KDL 库处理不满足 Pieper 准则的构型。自研示教器，通过绝对编码器位置映射机械臂关节闭环位置，实现高精度示教与数据采集。",
      challenges:
        "在运动底盘上协调7自由度机械臂需要精细的坐标系变换和延时管理。IKFast 求解器需要关节限位准确的 URDF 文件，以避免奇异点附近的退化解。",
      takeaways:
        "2025 RoboMaster 超级对抗赛全国二等奖。",
    },
  },
  {
    slug: "embodied-ai-housework-robot",
    title: "具身智能家务机器人",
    description:
      "基于 Diffusion Policy 和 VLA（π0.5）构建家务任务移动操作系统，部署于7自由度机械臂+差速底盘，使用单台手机完成 TeleOp 数据采集。",
    category: "机器人与具身智能",
    tags: ["Diffusion Policy", "VLA", "ROS1", "Jetson", "RealSense", "Python"],
    image: "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA.jpg",
    images: [
      "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA.jpg",
      "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA.jpg",
      "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E5%AE%9E%E9%AA%8C%E5%9C%BA%E6%99%AF.jpg",
    ],
    video: "/projects/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E5%8D%8E%E8%A5%BF%E7%B2%BE%E5%88%9B%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E5%95%86%E6%B1%A4%E7%A7%91%E6%8A%80-%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%E8%81%94%E5%90%88%E5%AE%9E%E9%AA%8C%E5%AE%A4%EF%BC%89/%E5%AE%B6%E5%8A%A1%E6%9C%BA%E5%99%A8%E4%BA%BAdemo.mp4",
    featured: true,
    period: "2025.11 – 至今",
    details: {
      background:
        "华西精创医疗科技有限公司（商汤科技-华西医院联合实验室）科研项目。目标：构建能够完成家务任务（如擦桌子、搬运物品）的移动操作系统，通过模仿学习从人类示教中习得技能。",
      work: "以 Jetson 边缘计算平台为核心控制节点，接入腕部 1080p 180° 鱼眼相机和底盘 RealSense 深度相机进行感知。视觉数据通过无线网络传输至远程 RTX 2080Ti 推理服务器，运行 Diffusion Policy 和 VLA（π0.5）模型进行动作策略推理。Jetson 接收推理结果后控制朴为 P500 二轮差速底盘（借助 ROS1 Docker）与 Rokae ER3 Pro 七轴机械臂及 Jodell EPG 二指夹爪执行任务。数据采集使用手机 AR 功能（TeleOp）读取位姿，仅需一台手机即可完成整个系统示教。",
      challenges:
        "在无线环境下以可接受的延迟闭合感知-决策-执行回路，需要对整个推理流水线进行精细优化。鱼眼镜头引入的显著畸变需要在输入策略网络前进行标定校正。",
      takeaways:
        "持续进行中的科研项目。目前正在探索面向接触密集型装配任务的触觉增强扩散策略，将高层动作生成与高频触觉残差修正相结合。",
    },
  },
  {
    slug: "electronic-design-contest",
    title: "全国大学生电子设计竞赛",
    description:
      "在4天竞赛窗口内从零设计并制作完整电子系统，参加全国大学生电子设计竞赛，获省级奖项。",
    category: "竞赛",
    tags: ["STM32", "模拟电路设计", "PCB", "信号处理"],
    image: "/projects/%E7%94%B5%E8%B5%9B/IMG_20250802_105951.jpg",
    images: [
      "/projects/%E7%94%B5%E8%B5%9B/IMG_20250802_105951.jpg",
      "/projects/%E7%94%B5%E8%B5%9B/IMG_20250727_215616.jpg",
    ],
    video: "/projects/%E7%94%B5%E8%B5%9B/video_20240730_200807.mp4",
    featured: false,
    period: "2025.07 – 2025.08",
    details: {
      background:
        "全国大学生电子设计竞赛要求队伍在四天内从零完成一套完整电子系统的设计、制作与测试，是国内最具挑战性的本科工程类竞赛之一。",
      work: "在竞赛窗口内完成原理图设计、PCB 布局、STM32 固件开发与系统测试的全流程。重点关注信号完整性、模拟前端设计与实时控制。",
      challenges:
        "四天时间对于完整的硬件+固件系统极为紧张。在时间压力下判断哪些功能必须实现、哪些可以简化，是竞赛考察的核心能力。",
      takeaways:
        "在硬性截止时间下快速做出务实的工程决策。竞赛磨练了硬件直觉和高压调试能力。",
    },
  },
  {
    slug: "diy-rc-controller",
    title: "开源自研遥控器",
    description:
      "从零设计并开源了一款自定义 RC 发射器——自制 PCB、STM32 固件与人体工学 3D 打印外壳。",
    category: "硬件 / 电子",
    tags: ["STM32", "KiCad", "3D打印", "RF", "开源"],
    image: "/projects/diy%26opensource/%E8%87%AA%E5%B7%B1%E8%AE%BE%E8%AE%A1%E5%BC%80%E6%BA%90%E7%9A%84%E9%81%A5%E6%8E%A7%E5%99%A8.jpg",
    images: [
      "/projects/diy%26opensource/%E8%87%AA%E5%B7%B1%E8%AE%BE%E8%AE%A1%E5%BC%80%E6%BA%90%E7%9A%84%E9%81%A5%E6%8E%A7%E5%99%A8.jpg",
    ],
    featured: false,
    details: {
      background:
        "市售遥控器要么太贵，要么功能受限，要么两者兼有。我想要一款可以完全自定义的发射器——硬件、固件、外形都由自己掌控，并分享给其他人。",
      work: "在 KiCad 中围绕 STM32 微控制器设计 PCB，配备霍尔效应摇杆、自定义开关布局和紧凑型 RF 模块。从零编写固件，支持可配置通道映射和协议。建模并 3D 打印外壳，追求舒适握感。",
      challenges:
        "STM32 时钟谐波产生的 RF 噪声需要精细的 PCB 布局和 RF 模块周围的屏蔽处理。摇杆手感调整经历了多次弹簧张力和机械行程的迭代。",
      takeaways:
        "已开源设计。这是一次让作品足够完善到他人可以实际使用的好练习。",
    },
  },
];
