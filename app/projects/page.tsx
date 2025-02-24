"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Modern Minimalist Home",
    description: "A sleek, contemporary interior painting project featuring clean lines and a neutral color palette.",
    image: "/placeholder.svg?text=Modern+Minimalist+Home",
  },
  {
    title: "Victorian Restoration",
    description: "Careful restoration and painting of a historic Victorian home, preserving its original charm.",
    image: "/placeholder.svg?text=Victorian+Restoration",
  },
  {
    title: "Bold Office Space",
    description: "A vibrant office makeover with bold color choices and creative accent walls.",
    image: "/placeholder.svg?text=Bold+Office+Space",
  },
  {
    title: "Coastal Retreat",
    description:
      "Exterior painting for a beachside property, using weather-resistant finishes and coastal-inspired colors.",
    image: "/placeholder.svg?text=Coastal+Retreat",
  },
]

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12 text-center">Our Projects</h1>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

