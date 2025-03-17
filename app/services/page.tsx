'use client';

import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import Image from 'next/image';
import { services, professionalTools, serviceAreas as serviceAreasData, premiumMaterials } from '@/data/services';
import Features from '@/components/Features';
import Tools from '@/components/tools';

export default function Services() {
  // Service tiers with pricing information
  

  // FAQ items
 

  const { areas: serviceAreas } = serviceAreasData;

  return (
    <main className="min-h-screen bg-[#ede2db]">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] bg-[#711f50] text-white flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/4.png"
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
            Premium painting and decorating services for residential, commercial, and industrial projects
          </p>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-36 sm:h-40 md:h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Professional Tools Section */}
      {/* <div className="bg-[#ede2db] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent">Professional Tools</h2>
            <p className="text-gray-600 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto text-base sm:text-lg">
              We use state-of-the-art equipment to ensure the highest quality finish for your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 overflow-x-auto snap-x snap-mandatory flex flex-nowrap sm:grid sm:flex-wrap sm:overflow-visible sm:snap-none">
            {professionalTools.tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.7 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[85vw] sm:min-w-0 snap-center sm:snap-align-none"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#711f50]/5 to-[#e6ab65]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-36 sm:h-40 md:h-48 mb-4 sm:mb-5 md:mb-6 rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#711f50] group-hover:text-[#e6ab65] transition-colors duration-300">{tool.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}
<Features/>
      
      
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#711f50] text-[#e6ab65] py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            Contact us today for a free consultation and quote
          </p>
          <button className="bg-white text-[#711f50] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300">
            Get a Free Quote
          </button>
        </div>
      </motion.div>
    
          <Tools/>
      {/* Premium Materials Section */}
      {/* <div className="py-20 px-4 md:px-8 bg-gradient-to-t from-[#f7d5c5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
            >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent">
              Premium Materials
            </h2>
            <p className="text-gray-600 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto text-base sm:text-lg">
              Experience excellence with our carefully selected premium paints
            </p>
          </motion.div>

          <div className=" grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 overflow-x-auto snap-x snap-mandatory flex flex-nowrap sm:grid sm:flex-wrap sm:overflow-visible sm:snap-none">
            {premiumMaterials.materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden min-w-[85vw] sm:min-w-0 snap-center sm:snap-align-none"
              >
                <div className="absolute top-0 left-0 w-full h-2  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                
                <div className="relative h-56 mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={material.image}
                    alt={material.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-[#711f50] mb-3 group-hover:text-[#e6ab65] transition-colors duration-300">
                  {material.name}
                </h3>
                
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  {material.description}
                </p>

                <div className="space-y-2">
                  {material.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}


      {/* Service Areas Section */}
      <div className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/studio/17.webp" 
            alt="Map background"
            fill
            className="object-cover opacity-10 scale-105 transform hover:scale-110 transition-transform duration-1000"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#711f50] via-[#9a2d6a] to-[#e6ab65] bg-clip-text text-transparent drop-shadow-sm">
                Areas We Serve
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-600 max-w-2xl mx-auto text-xl font-light"
            >
              Delivering exceptional painting services across the West Midlands with precision and passion
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 25px 30px -12px rgba(113, 31, 80, 0.2)'
                }}
                className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform cursor-pointer group relative overflow-hidden border border-gray-100/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#711f50]/5 via-[#9a2d6a]/5 to-[#e6ab65]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#711f50] via-[#9a2d6a] to-[#e6ab65] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div 
                    className="w-12 h-12 mb-4 bg-[#711f50]/10 rounded-full flex items-center justify-center group-hover:bg-[#711f50]/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-6 h-6 text-[#711f50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </motion.div>
                  
                  <motion.p 
                    className="text-[#711f50] font-bold text-lg sm:text-xl md:text-2xl group-hover:text-[#9a2d6a] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {area}
                  </motion.p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-[#711f50] via-[#9a2d6a] to-[#e6ab65] mt-2"
                  />
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#711f50]/5 via-[#9a2d6a]/5 to-transparent rounded-tl-full transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 text-xl mb-8 font-light inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
              Not in our service area? 
              <motion.span 
                className="text-[#711f50] font-semibold hover:text-[#9a2d6a] transition-colors duration-300 cursor-pointer inline-flex items-center gap-1"
                whileHover={{ x: 5 }}
              >
                Contact us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </motion.span>
            </p>
          </motion.div>
        </div>
      </div>
   
        
      <FAQ/>
      
      <Footer/>
    </main>
  );
}