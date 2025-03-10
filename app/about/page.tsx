"use client";

import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#ede2db] pt-6 sm:pt-8 md:pt-10">
      {/* Hero Section */}
      

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent px-4 sm:px-6">More Than Just Painters.<br />We're Your Decoration Partners.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden group ">
            <Image
              src="./images/14.png"
              alt="Our team"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-3xl transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-[#711f50]/20 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent">Who We Are</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              At Monarch Painters, our team of exceptional painters and decorators brings a distinctive touch to every project. We pour our passion, intellect, and extensive experience into crafting spaces that not only mirror your unique preferences but also elevate your property's aesthetics to new heights.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With over three decades of experience in all facets of commercial and residential painting and decorating, we excel in high-end development projects. We pledge to complete our work to an exceptionally high standard, on budget, and within the stipulated time frame.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-[#711f50]/20 transition-all duration-300 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent">What We Do</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              We provide top-quality painting solutions tailored to meet your specific needs, regardless of the project's scope or scale. Our services cater to both residential and commercial clients, offering fresh painting for new constructions or repainting for renovations, covering both interior and exterior applications.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#711f50] text-white rounded-xl hover:bg-[#8b2762] transform transition-all duration-300 shadow-lg hover:shadow-[#711f50]/30">
              View Our Services
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden group transform hover:scale-[1.02] transition-all duration-500 shadow-2xl order-1 lg:order-2">
            <Image
              src="/images/15.png"
              alt="Team working"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-3xl transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      {/* <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8 text-[#711f50]">Customer Success Stories</h3>
        <div className="flex overflow-x-auto gap-8 pb-8 hide-scrollbar">
          {[
            {
              quote: "Very professional consultations. Several options were discussed. Exceptional and took the time to view all my questions to my satisfaction.",
              author: "Allen M.",
              rating: 5
            },
            {
              quote: "The team was professional, punctual, and did a fantastic job. Would highly recommend!",
              author: "Rachel K.",
              rating: 5
            },
            {
              quote: "Outstanding service and attention to detail. They transformed our home beautifully.",
              author: "Sarah P.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex-shrink-0 w-[350px] bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <p className="text-gray-600 font-semibold">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-[#e6f3f0] text-[#711f50] rounded-full hover:bg-[#d1e9e4] transition-colors">
            More Reviews
          </button>
        </div>
      </section> */}
      <Testimonials/>

      {/* Final CTA Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] mt-8 sm:mt-12 md:mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black/70 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/15.png"
            alt="Professional painting work"
            fill
            style={{ objectFit: 'cover' }}
            className="transform scale-105"
          />
        </motion.div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-4xl mx-auto backdrop-blur-sm bg-white/5 p-12 rounded-3xl border border-white/10"
          >
            <h2 className="text-6xl font-bold bg-gradient-to-r from-[#8b2762] to-[#e6ab65] bg-clip-text text-transparent">
              Transform Your Space with Monarch Painters
            </h2>
            <p className="text-xl sm:text-2xl text-white/90">
              Serving Rugeley, Lichfield, Tamworth, Sutton Coldfield, Birmingham, and beyond.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#711f50] text-white rounded-xl hover:bg-[#8b2762] transform transition-all duration-300 shadow-lg hover:shadow-[#711f50]/30 text-lg sm:text-xl font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e6ab65] to-[#711f50] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer/>
    </main>
  );
}