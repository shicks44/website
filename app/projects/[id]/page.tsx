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
    <main className="min-h-screen bg-gray-950 py-20 text-gray-100">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
        >
          <span aria-hidden>←</span> Back to projects
        </Link>

        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          {project.title}
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {project.images.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="p-4 text-sm text-gray-400">{image.alt}</p>
            </div>
          ))}
        </div>

        <section className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
          <h2 className="mb-5 text-2xl font-semibold text-white">
            Project Highlights
          </h2>
          <ul className="space-y-3 text-gray-300">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span aria-hidden className="pt-1 text-emerald-400">
                  ✓
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}