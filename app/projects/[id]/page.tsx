import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects, projectsById } from "@/lib/projects"

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projectsById[id]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14 lg:px-12">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-zinc-400 transition hover:text-white"
          >
            <span aria-hidden>←</span>
            Back to portfolio
          </Link>
        </div>

        <section className="border-b border-zinc-900 pb-12 md:pb-16">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
              Project Case Study
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400 md:text-2xl md:leading-[1.65]">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-200"
                >
                  {tag}
                </span>
              ))}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-blue-900/60 bg-blue-950/40 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-500 hover:text-blue-200"
                >
                  View GitHub →
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="grid gap-12 pt-12 md:grid-cols-[1.3fr_0.7fr] md:pt-16">
          <div>
            <div className="mb-12 grid gap-6">
              {project.images.map((image, index) => (
                <figure
                  key={`${image.src}-${index}`}
                  className="overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950"
                >
                  <div className="relative h-[260px] w-full sm:h-[360px] md:h-[430px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-zinc-800 px-5 py-4 text-sm leading-6 text-zinc-400">
                    {image.alt}
                  </figcaption>
                </figure>
              ))}
            </div>

            <section className="mb-8 rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-7 md:p-8">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                Overview
              </p>
              <h2 className="mb-5 text-2xl font-semibold text-white md:text-3xl">
                Project Summary
              </h2>
              <p className="text-base leading-8 text-zinc-400 md:text-lg">
                {project.description}
              </p>
            </section>

            <div className="grid gap-8">
              <section className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-7 md:p-8">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Challenge
                </p>
                <p className="text-base leading-8 text-zinc-400 md:text-lg">
                  {project.challenge}
                </p>
              </section>

              <section className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-7 md:p-8">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Approach
                </p>
                <p className="text-base leading-8 text-zinc-400 md:text-lg">
                  {project.approach}
                </p>
              </section>

              <section className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-7 md:p-8">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Outcome
                </p>
                <p className="text-base leading-8 text-zinc-400 md:text-lg">
                  {project.outcome}
                </p>
              </section>

              <section className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-7 md:p-8">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Highlights
                </p>
                <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                  Key Contributions
                </h2>

                <ul className="grid gap-4">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-black/40 px-5 py-4"
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-bold text-emerald-400"
                      >
                        ✓
                      </span>
                      <span className="text-base leading-7 text-zinc-300">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-6">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                Recruiter Snapshot
              </p>

              <div className="space-y-5">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Project Type
                  </p>
                  <p className="text-base font-medium text-white">
                    Engineering Project
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Focus Areas
                  </p>
                  <p className="text-base leading-7 text-zinc-300">
                    {project.tags.join(" • ")}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Skills Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-6">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                Why It Matters
              </p>
              <p className="text-base leading-7 text-zinc-300">
                This project reflects practical execution, engineering judgment,
                and the ability to turn technical ideas into functional outcomes.
              </p>
            </section>

            <section className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-6">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                Navigation
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-between rounded-2xl border border-zinc-800 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900"
                >
                  Back to homepage
                  <span aria-hidden>→</span>
                </Link>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between rounded-2xl border border-zinc-800 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900"
                  >
                    Open GitHub
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </section>
          </aside>
        </section>
      </div>
    </main>
  )
}