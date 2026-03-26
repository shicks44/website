export type Project = {
  id: string
  title: string
  summary: string
  description: string
  highlights: string[]
  images: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    id: "cargo-lift",
    title: "Cargo Door Lift Assist",
    summary:
      "Mechanical design project focused on improving operator ergonomics, controlled motion, and repeatable cargo door operation.",
    description:
      "This project focused on reducing the effort required to open and control a heavy cargo door through a mechanical assist system. I evaluated multiple design concepts, developed CAD models, reviewed force paths and geometry, and selected an approach that improved usability while maintaining a simple and serviceable design. The project emphasized practical engineering judgement, design iteration, and clear communication of technical decisions.",
    highlights: [
      "Developed and compared multiple concept layouts in CAD",
      "Improved operator usability by reducing required opening effort",
      "Considered geometry, load paths, and maintainability in the final design",
      "Used an iterative design process to refine performance and fit",
    ],
    images: [
      { src: "/images/projects/cargo-lift-1.jpg", alt: "Cargo door lift assist mechanical concept" },
      { src: "/images/projects/cargo-lift-2.jpg", alt: "Cargo door lift assist CAD model" },
    ],
  },
  {
    id: "whistle-aid",
    title: "Whistle Aid for Impaired Hockey",
    summary:
      "Assistive engineering project using embedded hardware and signal detection to convert whistle cues into haptic feedback.",
    description:
      "This project involved designing a portable embedded system that detects whistle-like frequencies and translates them into vibration-based alerts for players. The work included signal detection logic, hardware integration, and testing in noisy conditions where false triggers had to be reduced. The final concept combined practical electronics, user-focused design, and rapid prototyping to create a system aimed at improving accessibility during play.",
    highlights: [
      "Built an ESP32-based prototype for real-time signal detection",
      "Integrated haptic feedback to deliver immediate user alerts",
      "Tested and refined performance under noisy operating conditions",
      "Applied a user-centered design approach to improve accessibility",
    ],
    images: [
      { src: "/images/projects/whistle-aid-1.jpg", alt: "Whistle Aid embedded hardware prototype" },
      { src: "/images/projects/whistle-aid-2.jpg", alt: "Whistle Aid testing and signal detection setup" },
    ],
  },
]

export const projectsById = Object.fromEntries(
  projects.map((project) => [project.id, project])
)