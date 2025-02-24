"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here (e.g., send data to an API)
    console.log("Form submitted:", formData)
  }

  return (
    <main className="pt-20">
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-4">
                We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                <p>123 Painter's Lane</p>
                <p>Staffordshire, ST4 1AB</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p>Phone: 01234 567890</p>
                <p>Email: info@monarchpainters.com</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-semibold">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

