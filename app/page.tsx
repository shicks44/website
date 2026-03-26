import Link from "next/link"
import { projects } from "@/lib/projects"

const focusItems = ["SolidWorks", "Ansys", "AutoCAD", "Java", "Python"]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-12 md:py-14">

        {/* HERO */}
        <section className="mb-24">
          <p className="mb-8 inline-block bg-blue-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            Portfolio / 2025
          </p>

          <h1 className="mb-8 text-6xl font-light leading-[0.95] tracking-tight text-gray-100 md:text-8xl">
            Shawn
            <br />
            Hicks
          </h1>

          <p className="mb-3 text-3xl font-medium text-gray-400 md:text-5xl">
            Mechanical Engineering Student
          </p>
          <p className="mb-8 text-3xl font-medium text-gray-100 md:text-5xl">
            Design, CAD, and Client Relations.
          </p>

          <div className="mb-12 flex flex-wrap items-center gap-6 text-2xl text-gray-400">
            <span className="inline-flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              Available for work
            </span>
            <span>London/Toronto</span>
          </div>

          <div className="flex flex-wrap gap-4 text-base">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-700 px-5 py-2 text-gray-200 transition hover:border-gray-500 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shawn@example.com"
              className="rounded-full border border-gray-700 px-5 py-2 text-gray-200 transition hover:border-gray-500 hover:text-white"
            >
              Email
            </a>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-20">
          <p className="mb-6 text-3xl uppercase tracking-wide text-gray-500">
            Currently
          </p>
          <h2 className="mb-3 text-4xl font-medium text-gray-100">
            Mechanical Engineering and Artificial Intelligence
          </h2>
          <p className="mb-2 text-4xl text-gray-400">@ Western University</p>
          <p className="text-3xl text-gray-500">2023 — Present</p>
        </section>

        {/* SKILLS */}
        <section className="mb-20">
          <p className="mb-6 text-3xl uppercase tracking-wide text-gray-500">
            Focus
          </p>
          <div className="flex flex-wrap gap-4">
            {focusItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-800 px-5 py-2 text-2xl text-gray-200 md:text-3xl"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-5xl font-light text-gray-100 md:text-6xl">
              About Me
            </h2>
            <span className="text-xl uppercase tracking-[0.2em] text-gray-500">
              Who I Am
            </span>
          </div>

          <div className="space-y-8 text-4xl leading-relaxed text-gray-400">
            <p>
              I’m Shawn Hicks, a Mechanical Design Engineering student passionate about
              <span className="text-gray-100"> design, CAD, and client collaboration.</span>
            </p>
            <p>
              My focus lies in bridging engineering with creativity whether through mechanical systems, product design,
              or automation tools. I enjoy solving real-world problems with practical, elegant solutions.
            </p>
            <p>
              Outside of engineering, I’m curious about how design thinking can shape better user experiences and
              create meaningful impact.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="pb-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-5xl font-light text-gray-100 md:text-6xl">
              Projects
            </h2>
            <span className="text-xl uppercase tracking-[0.2em] text-gray-500">
              Selected Work
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-gray-800 bg-gray-950 p-6"
              >
                <h3 className="mb-3 text-3xl font-medium text-gray-100">
                  {project.title}
                </h3>
                <p className="mb-4 text-2xl text-gray-400">
                  {project.summary}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-xl font-medium text-blue-400 hover:text-blue-300"
                >
                  Open project page <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}