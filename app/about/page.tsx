"use client";

import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
1        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6 text-[#711f50]">Monarch Painters</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a family business with extensive experience in the residential and commercial decoration industry. Our team of excellent interior and exterior painters brings over 35 years of combined expertise to every project. Rated 5-stars on Google, we continue to strive for excellence in everything that we do!
          </p>
          <button className="mt-8 px-6 py-3 bg-purple-50 text-[#711f50] rounded-full hover:bg-[#d1e9e4] transition-colors">
            Get a Free Quote
          </button>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-purple-50 p-8 rounded-2xl text-center"
          >
            <div className="mb-4 flex justify-center items-center">
              <Image src="/images/flag.svg" alt="Mission icon" width={40} height={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#711f50]">Mission</h3>
            <p className="text-gray-600">To provide the highest quality finish at fair prices, never cutting corners on any job.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-purple-50 p-8 rounded-2xl text-center"
          >
            <div className="mb-4 flex justify-center items-center">
              <Image src="/images/eye.svg" alt="Vision icon" width={40} height={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#711f50]">Vision</h3>
            <p className="text-gray-600">To be the most trusted choice for painting and decorating services across Staffordshire.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-purple-50 p-8 rounded-2xl text-center"
          >
            <div className="mb-4 flex justify-center items-center">
              <Image src="/images/target.svg" alt="Values icon" width={40} height={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#711f50]">Values</h3>
            <p className="text-gray-600">Excellence, professionalism, and attention to detail in every project we undertake.</p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#711f50]">More Than Just Painters.<br />We're Your Decoration Partners.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="./images/14.png"
              alt="Our team"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#711f50]">Who We Are</h3>
            <p className="text-gray-600 mb-6">
              At Monarch Painters, our team of exceptional painters and decorators brings a distinctive touch to every project. We pour our passion, intellect, and extensive experience into crafting spaces that not only mirror your unique preferences but also elevate your property's aesthetics to new heights.
            </p>
            <p className="text-gray-600">
              With over three decades of experience in all facets of commercial and residential painting and decorating, we excel in high-end development projects. We pledge to complete our work to an exceptionally high standard, on budget, and within the stipulated time frame.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#711f50]">What We Do</h3>
            <p className="text-gray-600 mb-6">
              We provide top-quality painting solutions tailored to meet your specific needs, regardless of the project's scope or scale. Our services cater to both residential and commercial clients, offering fresh painting for new constructions or repainting for renovations, covering both interior and exterior applications.
            </p>
            <button className="px-6 py-3 bg-[#e6f3f0] text-[#711f50] rounded-full hover:bg-[#d1e9e4] transition-colors">
              View Our Services
            </button>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/15.png"
              alt="Team working"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl"
            />
          </div>
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
      <section className="relative h-[600px] mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent z-10" />
        <Image
          src="/images/15.png"
          alt="Professional painting work"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center h-full">
          <h2 className="text-5xl font-bold mb-6 text-[#711f50] text-center">Transform Your Space<br />with Monarch Painters</h2>
          <p className="text-2xl text-gray-600 mb-10 text-center max-w-3xl">Serving Rugeley, Lichfield, Tamworth, Sutton Coldfield, Birmingham, and beyond.</p>
          <button className="px-8 py-4 bg-[#e6f3f0] text-[#711f50] rounded-full hover:bg-[#d1e9e4] transition-colors text-xl">
            Get a Free Quote
          </button>
        </div>
        
      </section>
      
      <Footer/>
    </main>
  );
}