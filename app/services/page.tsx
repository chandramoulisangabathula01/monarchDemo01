'use client';

import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  // Service tiers with pricing information
  const serviceTiers = [
    {
      name: 'Basic Package',
      price: 'From £299',
      features: [
        'Single room painting',
        'Basic surface preparation',
        'Standard paint quality',
        '1-year warranty'
      ]
    },
    {
      name: 'Premium Package',
      price: 'From £599',
      features: [
        'Multiple room painting',
        'Advanced surface preparation',
        'Premium paint quality',
        '3-year warranty',
        'Free color consultation'
      ]
    },
    {
      name: 'Luxury Package',
      price: 'Custom Quote',
      features: [
        'Whole house painting',
        'Premium surface preparation',
        'Luxury paint brands',
        '5-year warranty',
        'Free color consultation',
        'Priority scheduling'
      ]
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: 'How long does a typical painting project take?',
      answer: 'Project duration varies based on size and complexity. A single room typically takes 1-2 days, while a whole house might take 1-2 weeks.'
    },
    {
      question: 'What type of paint do you use?',
      answer: 'We use premium quality paints from trusted brands like Dulux and Farrow & Ball, ensuring long-lasting and beautiful results.'
    },
    {
      question: 'Do you offer color consultation?',
      answer: 'Yes! Our Premium and Luxury packages include free color consultation with our experienced designers.'
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, we are fully insured and all our work is guaranteed. We provide warranty coverage depending on the service package.'
    }
  ];

  // Service areas
  const serviceAreas = [
    'Rugeley',
    'Lichfield',
    'Tamworth',
    'Sutton Coldfield',
    'Birmingham',
    'Cannock',
    'Stafford',
    'Walsall'
  ];

  const services = [
    {
      title: 'Interior Painting & Decorating',
      description: 'Transform your indoor spaces with our expert interior painting and decorating services. We excel at enhancing every room with precision and care.',
      features: [
        'Professional dustless extraction systems',
        'Meticulous surface preparation',
        'Premium quality paints and materials',
        'Wallpapering services'
      ],
      image: '/images/4.png'
    },
    {
      title: 'Commercial & Residential',
      description: 'Revitalize your business space with our commercial and industrial painting services. We minimize downtime while maximizing quality.',
      features: [
        'Office space transformation',
        'Industrial facility painting',
        'Minimal business disruption',
        'Health & safety compliant'
      ],
      image: '/images/8.png'
    },
    {
      title: 'Exterior Painting',
      description: "Enhance your property's curb appeal with our expert exterior painting services using premium weather-resistant materials.",
      features: [
        'Weather-resistant paints',
        'Complete surface preparation',
        'Professional equipment',
        'Long-lasting finish'
      ],
      image: '/images/17.png'
    },
  ];

  const tools = [
    {
      name: 'Mirka 1230M',
      description: 'Dustless extraction system for faster finish and dust-free sanding',
      image: '/images/16.png'
    },
    {
      name: 'Q-Tech 5 Stage HVLP',
      description: 'High volume low pressure spray system for a flawless finish',
      image: '/images/15.png'
    },
    {
      name: 'TriTech T5',
      description: 'Airless spray system for faster completion on large projects',
      image: '/images/13.png'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[60vh] bg-[#711f50] text-white flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/4.png"
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Premium painting and decorating services for residential, commercial, and industrial projects
          </p>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
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
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent">Professional Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We use state-of-the-art equipment to ensure the highest quality finish for your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.7 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#711f50]/5 to-[#e6ab65]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#711f50] group-hover:text-[#e6ab65] transition-colors duration-300">{tool.name}</h3>
                <p className="text-gray-600 leading-relaxed">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Materials Section */}
      {/* <div className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent">Premium Materials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We utilize only the highest quality products to ensure the longevity and beauty of our work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#711f50]">Exterior Masonry</h3>
              <p className="text-gray-600 mb-6">Premium weather-resistant paints for lasting protection</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                  Emperor Masonry Paint
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                  Wethertex AP77
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                  Dulux Weathershield
                </li>
              </ul>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#711f50]">Interior Walls</h3>
              <p className="text-gray-600 mb-6">High-performance paints for high-traffic areas</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                  Isomat Premium Colour
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                  Crown Trade Clean Extreme
                </li>
              </ul>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#711f50]">Ceiling Paint</h3>
              <p className="text-gray-600 mb-6">Optimal choices for perfect ceiling coverage</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                  Tikkurila Anti-Reflex White 2
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                  Isomat Ceiling Paint
                </li>
              </ul>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#711f50]">Interior Woodwork</h3>
              <p className="text-gray-600 mb-6">Durable finishes for wooden surfaces</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                  Benjamin Moore Scuff-X
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                  Johnstone's Trade Aqua Water-Based
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#711f50] text-[#e6ab65] py-16 px-4 md:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8">
            Contact us today for a free consultation and quote
          </p>
          <button className="bg-white text-[#711f50] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get a Free Quote
          </button>
        </div>
      </motion.div>
    {/* Service Packages Section */}
      {/* <div className="py-16 px-4 md:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package that suits your needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-[#711f50] text-xl font-semibold mb-4">{tier.price}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowUpRight className="w-4 h-4 mr-2 text-[#711f50]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      {/* <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          </div>
          </div> */}

          
      {/* Premium Materials Section */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
            >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#711f50] to-[#e6ab65] bg-clip-text text-transparent">
              Premium Materials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience excellence with our carefully selected premium paints
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Emperor Masonry Paint',
                description: 'Superior exterior protection with enhanced durability',
                image: '/images/1.png',
                features: ['Weather-resistant', '10-year lifespan', 'UV protection']
              },
              {
                name: 'Wethertex AP77',
                description: 'Advanced weather-resistant coating for lasting finish',
                image: '/images/7.png',
                features: ['Self-cleaning', 'Breathable coating', 'Anti-crack']
              },
              {
                name: 'Dulux Weathershield',
                description: 'Premium all-weather protection for exterior surfaces',
                image: '/images/8.png',
                features: ['All-season protection', 'Color-lock technology', 'Mold resistant']
              }
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
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
                
                <p className="text-gray-600 mb-4">
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
      <div className="relative py-24 px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/17.png" 
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
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#711f50] via-[#9a2d6a] to-[#e6ab65] bg-clip-text text-transparent">
              Areas We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl font-light">
              Delivering exceptional painting services across the West Midlands with precision and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                    className="text-[#711f50] font-bold text-2xl mb-3 group-hover:text-[#9a2d6a] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {area}
                  </motion.p>
                  <p className="text-gray-500 text-sm font-medium tracking-wide">Premium Service Area</p>
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
