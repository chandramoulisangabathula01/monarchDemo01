"use client";

import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutPageData } from "@/data/about";
import Link from "next/link";

export default function About() {
  const { teamSection, whatWeDoSection, ctaSection } = aboutPageData;

  return (
    <main className="min-h-screen bg-[#ede2db] pt-6 sm:pt-8 md:pt-10">
      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent px-4 sm:px-6">{teamSection.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden group ">
            <Image
              src={teamSection.teamImage}
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
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent">{teamSection.whoWeAre.title}</h3>
            {teamSection.whoWeAre.description.map((paragraph, index) => (
              <p key={index} className={`text-base sm:text-lg leading-relaxed ${index === 0 ? 'text-gray-600' : 'text-gray-700'}`}>
                {paragraph}
              </p>
            ))}
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
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent">{whatWeDoSection.title}</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              {whatWeDoSection.description}
            </p>
            <div className="flex items-center pt-4">
              <Link href={whatWeDoSection.buttonLink} className="inline-block">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#711f50] text-white rounded-xl hover:bg-[#8b2762] transform transition-all duration-300 shadow-lg hover:shadow-[#711f50]/30">
                  {whatWeDoSection.buttonText}
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden group transform hover:scale-[1.02] transition-all duration-500 shadow-2xl order-1 lg:order-2">
            <Image
              src={whatWeDoSection.image}
              alt="Team working"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-3xl transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </section>

      <Testimonials/>

      {/* Final CTA Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] mt-4 sm:mt-8 md:mt-12 lg:mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black/70 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={ctaSection.backgroundImage}
            alt="Professional painting work"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="transform scale-105"
          />
        </motion.div>
        <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8 md:space-y-10 max-w-4xl mx-auto backdrop-blur-sm bg-white/5 p-8 sm:p-10 md:p-12 lg:p-14 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#8b2762] to-[#e6ab65] bg-clip-text text-transparent leading-tight">
              {ctaSection.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl">
              {ctaSection.subtitle}
            </p>
            <Link
              href={ctaSection.buttonLink}
              className="inline-flex items-center justify-center mt-4 sm:mt-6 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-[#711f50] text-white rounded-lg sm:rounded-xl hover:bg-[#8b2762] transform transition-all duration-300 shadow-lg hover:shadow-[#711f50]/30 text-base sm:text-lg md:text-xl font-semibold group relative overflow-hidden w-auto"
            >
              <span className="relative z-10">{ctaSection.buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e6ab65] to-[#711f50] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer/>
    </main>
  );
}