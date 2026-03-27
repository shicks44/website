import Image from "next/image"
import Link from "next/link"
import { featuredProject, projects } from "@/lib/projects"

const focusItems = [
  "Mechanical Design",
  "CAD",
  "Instrumentation",
  "Testing",
  "Embedded Systems",
  "Problem Solving",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12 lg:px-12">
        <section className="mb-24 pt-4 md:mb-28">
          <p className="mb-8 inline-flex items-center rounded-md border border-blue-900/70 bg-blue-950/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100">
            Portfolio / 2026
          </p>

          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
            <div className="max-w-4xl">
              <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.05em] text-white sm:text-7xl md:text-8xl lg:text-[7.4rem]">
                Shawn
                <br />
                Hicks
              </h1>

              <div className="mt-8 space-y-3">
                <p className="text-xl font-medium leading-tight text-zinc-400 md:text-3xl">
                  Mechanical Engineering and Artificial Intelligence Student
                </p>
                <p className="text-xl font-semibold leading-tight text-white md:text-3xl">
                  Design, testing, CAD, and hands-on engineering projects
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400 md:text-base">
                <span className="inline-flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Available for internships
                </span>
                <span>London ON / Toronto ON / Mississauga ON</span>
                <span>Western University</span>
              </div>
            </div>

            <div className="justify-self-start md:justify-self-end">
              <div className="relative h-44 w-44 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:h-56 md:w-56 lg:h-64 lg:w-64">
                <Image
                  src="/images/profile.jpg"
                  alt="Shawn Hicks headshot"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
                About
              </p>
              <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                I build practical engineering projects that combine design,
                testing, and real-world problem solving.
              </h2>
            </div>

            <div className="max-w-2xl space-y-5 text-base leading-8 text-zinc-400 md:text-lg">
              <p>
                I am a Mechanical Engineering and Artificial Intelligence student
                at Western University with interests in aerospace, automotive,
                mechanical design, and instrumentation.
              </p>
              <p>
                My experience spans CAD, embedded systems, hands-on fabrication,
                and engineering problem solving through both academic and
                industry-related work.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-24">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
            Technical Focus
          </p>
          <div className="flex flex-wrap gap-3">
            {focusItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-4xl font-light tracking-[-0.03em] text-white md:text-6xl">
              Featured Project
            </h2>
            <span className="hidden text-sm uppercase tracking-[0.24em] text-zinc-500 md:block">
              Standout Work
            </span>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[280px] lg:min-h-[100%]">
                <Image
                  src={featuredProject.images[0]?.src ?? "/images/projects/edf-1.jpg"}
                  alt={featuredProject.images[0]?.alt ?? featuredProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 md:p-10">
                <div className="mb-4 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                  {featuredProject.description}
                </p>

                <ul className="mt-6 grid gap-3">
                  {featuredProject.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-zinc-300">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-sm leading-7 md:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-900/70 bg-blue-950/40 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:border-blue-500 hover:text-blue-200"
                  >
                    View case study
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>

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
                className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-6 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
                  {project.summary}
                </p>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue-400 transition group-hover:text-blue-300"
                >
                  View project
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

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
            <p className="mb-8 text-lg leading-8 text-zinc-400 md:text-2xl md:leading-[1.7]">
              I am interested in internships, engineering opportunities, and
              conversations related to mechanical design, testing, and technical
              development.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/shawn-hicks-45a364224/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-blue-400 hover:text-blue-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:shawnhicks902@gmail.com"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-blue-400 hover:text-blue-300"
              >
                Email
              </a>
              <a
              href="tel:+16479140329"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm text-white hover:border-blue-400 hover:text-blue-300"
               >
                Phone
              
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}