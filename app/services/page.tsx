"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Interior Painting",
    description:
      "Transform your indoor spaces with our expert interior painting services. We use premium paints and techniques to create stunning, long-lasting finishes.",
    image: "/placeholder.svg?text=Interior+Painting",
  },
  {
    title: "Exterior Painting",
    description:
      "Enhance your home's curb appeal with our professional exterior painting services. We ensure durable, weather-resistant finishes that protect and beautify.",
    image: "/placeholder.svg?text=Exterior+Painting",
  },
  {
    title: "Decorative Finishes",
    description:
      "Add a touch of luxury with our decorative finishes. From faux effects to textured walls, we bring artistry to your spaces.",
    image: "/placeholder.svg?text=Decorative+Finishes",
  },
  {
    title: "Wallpaper Installation",
    description:
      "Transform your walls with our expert wallpaper installation services. We offer a wide range of patterns and textures to suit your style.",
    image: "/placeholder.svg?text=Wallpaper+Installation",
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12 text-center">Our Services</h1>
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

