export type Project = {
  id: string
  title: string
  summary: string
  description: string
  challenge: string
  approach: string
  outcome: string
  highlights: string[]
  tools: string[]
  tags: string[]
  images: { src: string; alt: string }[]
  featured?: boolean
  github?: string
}

export const projects: Project[] = [
  {
    id: "edf-thrust-stand",
    title: "EDF Thrust Test Stand",
    summary:
      "Custom propulsion test rig for measuring thrust, current, and system performance of a high-power electric ducted fan.",
    description:
      "Designed and built a thrust test stand for a 90 mm electric ducted fan system to support propulsion testing and data-driven performance evaluation. The project combines mechanical design, instrumentation, embedded systems, and safe high-current integration.",
    challenge:
      "The goal was to create a test platform capable of measuring thrust and electrical performance reliably while remaining safe, modular, and practical to build with student-level resources.",
    approach:
      "I designed the mechanical rig around load-cell-based thrust measurement, integrated current sensing and Arduino-based data acquisition, and structured the system for live monitoring and future expansion into fault detection and test automation.",
    outcome:
      "The project demonstrates hands-on aerospace testing, instrumentation, and systems integration experience while showing the ability to move from concept to a functional engineering prototype.",
    highlights: [
      "Designed a mechanical rig for thrust measurement using a load cell",
      "Integrated current sensing and Arduino-based data acquisition",
      "Structured the system for live monitoring and future testing workflows",
      "Considered high-current safety through switching, wiring, and protection components",
    ],
    tools: ["SolidWorks", "Arduino", "Sensors", "DAQ", "Electrical Integration"],
    tags: ["Aerospace", "Instrumentation", "Embedded Systems", "Mechanical Design"],
    images: [
      { src: "/placeholder.jpg", alt: "EDF thrust stand image coming soon" },
      { src: "/placeholder.jpg", alt: "EDF test rig image coming soon" },
    ],
    featured: true,
  },
  {
    id: "end-effector",
    title: "Rear Disk End Effector",
    summary:
      "Industrial mechanical design work focused on a custom end effector for real client requirements.",
    description:
      "Contributed to the design of a rear diskend effector during my time at POW Engineering Group. The work involved CAD development, iterative refinement, and engineering collaboration to align the design with functional and manufacturing requirements.",
    challenge:
      "The project required balancing client requirements, practical functionality, and manufacturability within an industrial setting.",
    approach:
      "I used CAD modeling and design iteration to refine the concept, support reviews, and improve the design’s readiness for implementation within a broader engineering workflow.",
    outcome:
      "This work strengthened my experience with professional mechanical design, stakeholder collaboration, and translating engineering requirements into manufacturable solutions.",
    highlights: [
      "Created detailed CAD models in SolidWorks",
      "Supported real design iterations tied to project requirements",
      "Considered manufacturability and durability in design decisions",
      "Worked within a professional engineering environment",
    ],
    tools: ["SolidWorks", "Mechanical Design", "Design Reviews", "Manufacturing Considerations"],
    tags: ["Mechanical Design", "CAD", "Industrial Engineering"],
    images: [
      { src: "/images/projects/end-effector-1.jpeg", alt: "End effector Front View" },
      { src: "/images/projects/end-effector-2.jpeg", alt: "End effector Rear View" },
    ],
  },
  {
    id: "shopping-cart-gokart",
    title: "Shopping Cart Go-Kart Build",
    summary:
      "Hands-on fabrication project that converted a shopping cart into a functional motorized go-kart.",
    description:
      "Designed and built a motorized go-kart using a shopping cart as the base structure. The project involved mechanical modification, drivetrain integration, structural support decisions, and hands-on fabrication.",
    challenge:
      "The build required converting a non-automotive structure into something functional, stable, and controllable while working through real mechanical constraints.",
    approach:
      "I modified the frame, planned how the drivetrain would mount and transfer load, and focused on practical fabrication choices that improved structural integrity and usability.",
    outcome:
      "The project highlights initiative, fabrication ability, and a strong practical understanding of mechanical systems beyond classroom work.",
    highlights: [
      "Modified the structure to support rider and drivetrain loads",
      "Integrated motor and drive components into a custom build",
      "Focused on structural stability and basic operational safety",
      "Built hands-on fabrication and assembly experience",
    ],
    tools: ["Fabrication", "Mechanical Assembly", "Structural Modification", "Problem Solving"],
    tags: ["Fabrication", "Mechanical Systems", "Hands-On Engineering"],
    images: [
      { src: "/images/projects/gokart-1.jpeg", alt: "Shopping cart go-kart build" },
      { src: "/images/projects/gokart-2.jpeg", alt: "Go-kart steering rack" },
    ],
  },
  {
    id: "cargo-lift",
    title: "Cargo Door Assist Mechanism",
    summary:
      "Mechanical design concept focused on improving ergonomics and reducing operator effort through geometry-driven design.",
    description:
      "Designed a cargo door assist concept to reduce the force required for operation. The project involved concept development, CAD modeling, and evaluation of linkage geometry and force transmission.",
    challenge:
      "The challenge was to improve usability without overcomplicating the mechanism or reducing practicality.",
    approach:
      "I explored multiple design concepts, evaluated geometry and load paths, and refined the design toward a practical, mechanically simple solution.",
    outcome:
      "The project demonstrates a solid foundation in CAD-driven design thinking, ergonomic improvement, and concept iteration.",
    highlights: [
      "Developed multiple CAD concepts using SolidWorks",
      "Evaluated linkage geometry and force paths",
      "Improved ergonomics through design refinement",
      "Used iterative design to improve fit and function",
    ],
    tools: ["SolidWorks", "Mechanical Design", "Concept Development", "Geometry Analysis"],
    tags: ["Mechanical Design", "CAD"],
    images: [
      { src: "/placeholder.jpg", alt: "Cargo door assist image coming soon" },
      { src: "/placeholder.jpg", alt: "Cargo door assist CAD image coming soon" },
    ],
  },
  {
    id: "whistle-aid",
    title: "Assistive Whistle Detection System",
    summary:
      "Embedded system that converts whistle signals into real-time haptic feedback for accessibility-focused use.",
    description:
      "Developed an ESP32-based system that detects whistle-like frequencies and triggers vibration alerts. The project combines embedded hardware, signal detection, and user-oriented design.",
    challenge:
      "The main challenge was reducing false triggers while maintaining fast, reliable response in noisy environments.",
    approach:
      "I focused on signal detection logic, hardware integration, and testing under realistic conditions to improve robustness and usability.",
    outcome:
      "This project shows embedded systems capability, applied signal handling, and an ability to design with user needs in mind.",
    highlights: [
      "Built an ESP32-based embedded prototype",
      "Implemented filtering logic to reduce false triggers",
      "Integrated haptic feedback for immediate alerts",
      "Tested system performance in noisy environments",
    ],
    tools: ["ESP32", "Embedded Systems", "Signal Processing", "Prototyping"],
    tags: ["Embedded Systems", "Signal Processing", "Accessibility"],
    images: [
      { src: "/images/projects/whistle-1.png", alt: "Assistive whistle detection prototype" },
      { src: "/images/projects/whistle-2.png", alt: "Whistle detection testing setup" },
    ],
  },
]

export const projectsById = Object.fromEntries(
  projects.map((project) => [project.id, project])
) as Record<string, Project>

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0]
