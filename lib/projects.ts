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
    summary: "Pneumatic assist system that reduces operator effort and improves repeatable opening speed.",
    description:
      "This project focused on reducing the force needed to operate a heavy cargo door. I modeled several linkage options, selected a pneumatic architecture, and validated safety factors under repeated load cycles. The final setup improved user ergonomics while keeping maintenance simple.",
    highlights: [
      "Reduced lifting effort by optimizing actuator geometry",
      "Designed for long cycle life and low maintenance",
      "Validated with CAD fit checks and physical prototyping",
    ],
    images: [
      { src: "/placeholder.jpg", alt: "Cargo door mechanism concept" },
      { src: "/placeholder-logo.svg", alt: "Cargo lift CAD overview" },
    ],
  },
  {
    id: "whistle-aid",
    title: "Whistle Aid for Impaired Hockey",
    summary: "An assistive ESP32 system that converts whistle signals into haptic alerts for players.",
    description:
      "I built a portable device that detects whistle-like frequencies and triggers vibration feedback in near real time. The project required signal filtering, false-positive reduction, and user testing in noisy environments to make the feedback reliable during play.",
    highlights: [
      "ESP32-based sensing and signal processing",
      "Haptic alert system tuned for quick response",
      "Tested against rink-noise conditions",
    ],
    images: [
      { src: "/placeholder-user.jpg", alt: "Whistle Aid hardware prototype" },
      { src: "/placeholder-logo.png", alt: "Whistle Aid signal testing setup" },
    ],
  },
]

export const projectsById = Object.fromEntries(projects.map((project) => [project.id, project]))
