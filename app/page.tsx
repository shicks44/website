import Link from "next/link"
import { projects } from "@/lib/projects"

const focusItems = ["SolidWorks", "ANSYS", "AutoCAD", "Python", "Java"]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14 lg:px-12">
        {/* HERO */}
        <section className="mb-24 pt-4 md:mb-28">
          <p className="mb-8 inline-flex items-center rounded-sm border border-blue-800/70 bg-blue-950/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100">
            Portfolio / 2025
          </p>

          <div className="max-w-4xl">
            <h1 className="text-6xl font-light leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              Shawn
              <br />
              Hicks
            </h1>

            <div className="mt-8 space-y-3">
              <p className="text-2xl font-medium leading-tight text-zinc-400 md:text-4xl">
                Mechanical Engineering and Artificial Intelligence Student
              </p>
              <p className="text-2xl font-semibold leading-tight text-white md:text-4xl">
                Design, CAD, Testing, and Technical Problem Solving
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-base text-zinc-400 md:text-lg">
              <span className="inline-flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Available for internships
              </span>
              <span>Mississauga, ON</span>
            </div>
          </div>
        </section>

        {/* CURRENTLY */}
        <section className="mb-20 md:mb-24">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 md:text-base">
            Currently
          </p>

          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Mechanical Engineering and Artificial Intelligence
            </h2>
            <p className="mt-3 text-2xl text-zinc-400 md:text-4xl">Western University</p>
            <p className="mt-3 text-lg text-zinc-500 md:text-2xl">2023 to Present</p>
          </div>
        </section>

        {/* FOCUS */}
        <section className="mb-20 md:mb-24">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 md:text-base">
            Technical Focus
          </p>

          <div className="flex flex-wrap gap-3">
            {focusItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-200 md:px-5 md:py-2.5 md:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-20 md:mb-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-4xl font-light tracking-[-0.03em] text-white md:text-6xl">
              About Me
            </h2>
            <span className="hidden text-sm uppercase tracking-[0.24em] text-zinc-500 md:block">
              Profile
            </span>
          </div>

          <div className="max-w-4xl space-y-6 text-lg leading-8 text-zinc-400 md:text-2xl md:leading-[1.75]">
            <p>
              I am Shawn Hicks, a Mechanical Engineering and Artificial Intelligence student with a
              strong interest in mechanical design, CAD, prototyping, and engineering analysis.
            </p>
            <p>
              My experience includes design work, technical problem solving, and collaboration across
              engineering and project environments. I enjoy building practical solutions that are
              clear, efficient, and grounded in real performance needs.
            </p>
            <p>
              I am especially interested in opportunities involving product development, testing,
              aerospace, automotive, and advanced engineering systems.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-20 md:mb-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-4xl font-light tracking-[-0.03em] text-white md:text-6xl">
              Projects
            </h2>
            <span className="hidden text-sm uppercase tracking-[0.24em] text-zinc-500 md:block">
              Selected Work
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition duration-200 hover:border-zinc-700 hover:bg-zinc-900"
              >
                <h3 className="mb-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-6 max-w-xl text-lg leading-8 text-zinc-400">
                  {project.summary}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-base font-semibold text-blue-400 transition group-hover:text-blue-300"
                >
                  View project
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-zinc-900 pt-16 pb-10" id="connect">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-4xl font-light tracking-[-0.03em] text-white md:text-6xl">
              Let&apos;s Connect
            </h2>
            <span className="hidden text-sm uppercase tracking-[0.24em] text-zinc-500 md:block">
              Contact
            </span>
          </div>

          <div className="max-w-4xl">
            <p className="mb-8 text-lg leading-8 text-zinc-400 md:text-2xl md:leading-[1.75]">
              I am open to internships, engineering opportunities, and professional connections.
              Please feel free to reach out through LinkedIn or email.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/shawn-hicks-45a364224/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-base font-medium text-white transition hover:border-blue-400 hover:text-blue-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:shawnhicks902@gmail.com"
                className="rounded-full border border-zinc-700 px-6 py-3 text-base font-medium text-white transition hover:border-blue-400 hover:text-blue-300"
              >
                Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}