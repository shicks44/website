import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectData: Record<string, any> = {
  "cargo-lift": {
    title: "Cargo Door Lift Assist",
    images: ["/images/projects/cargo_lift.jpg", "/images/projects/cargo_lift_cad.jpg"],
    content: "Detailed explanation of the pneumatic system, safety factors considered, and the efficiency increase measured...",
  },
  "whistle-aid": {
    title: "Whistle Aid for Impaired Hockey",
    images: ["/images/projects/whistle_aid.jpg"],
    content: "Developed an ESP-32 based system using frequency detection to provide haptic feedback...",
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id]

  if (!project) notFound()

  return (
    <main className="bg-gray-950 min-h-screen text-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block flex items-center gap-2">
          ← Back to Portfolio
        </Link>
        
        <h1 className="text-5xl font-bold text-white mb-8">{project.title}</h1>
        
        <div className="grid gap-8 mb-12">
          {project.images.map((img: string, index: number) => (
            <div key={index} className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <Image src={img} alt={`${project.title} view ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-semibold text-white mb-4">Technical Breakdown</h2>
          <p className="text-gray-400 leading-relaxed text-xl mb-10">{project.content}</p>
        </div>
        
        <div className="p-10 bg-gray-900 rounded-3xl border border-gray-800 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-emerald-400">Project Highlights</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-center gap-2">✓ Performance Optimized</li>
            <li className="flex items-center gap-2">✓ Safety Certified</li>
            <li className="flex items-center gap-2">✓ Real-world Deployment</li>
          </ul>
        </div>
      </div>
    </main>
  )
}