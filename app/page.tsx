import Link from "next/link"
import { projects } from "@/lib/projects"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 py-20 text-gray-100">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-emerald-400">
            Portfolio
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Projects
          </h1>
          <p className="max-w-2xl text-lg text-gray-400">
            I think your idea is strong. Giving every project its own dedicated page makes your work easier to explore
            and gives you room for visuals, engineering decisions, and measurable outcomes.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-emerald-400/60"
            >
              <h2 className="mb-3 text-2xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="mb-6 text-gray-400">
                {project.summary}
              </p>
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 font-medium text-emerald-400 hover:text-emerald-300"
              >
                View project details <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}