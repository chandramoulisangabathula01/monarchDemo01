'use client';

import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import Image from 'next/image';
import { services, professionalTools, serviceAreas as serviceAreasData, premiumMaterials } from '@/data/services';

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
      <div className="bg-[#ede2db] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
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
      </div>

      
      
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
    
          
      {/* Premium Materials Section */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-t from-[#f7d5c5]">
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
      </div>
      {/* Service Areas Section */}
      <div className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/studio/17.webp" 
            alt="Map background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#711f50] via-[#9a2d6a] to-[#e6ab65] bg-clip-text text-transparent">
              Areas We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl font-light">
              Delivering exceptional painting services across the West Midlands with precision and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 25px 30px -12px rgba(113, 31, 80, 0.15)'
                }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform cursor-pointer group relative overflow-hidden border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#711f50]/10 to-[#e6ab65]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.p 
                    className="text-[#711f50] font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 group-hover:text-[#9a2d6a] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {area}
                  </motion.p>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium tracking-wide">Premium Service Area</p>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-[#711f50] via-[#9a2d6a] to-[#e6ab65] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#711f50]/5 to-transparent rounded-bl-full transform translate-x-full translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-20 text-center"
          >
            <p className="text-gray-600 text-xl mb-8 font-light">
              Not in our service area? <span className="text-[#711f50] font-semibold hover:text-[#9a2d6a] transition-colors duration-300 cursor-pointer">Contact us</span> to discuss your project
            </p>
          </motion.div>
        </div>
      </div>
   
        
      <FAQ/>
      
      <Footer/>
    </main>
  );
}
