"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Expertise() {
  return (
    <div className="bg-[#711f50] text-white px-4 md:px-8 py-8 md:py-8 rounded-3xl mx-4 md:mx-8">
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-bold mb-4 text-[#e6ab65]">
          Our Expertise
        </motion.h2>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowUpRight className="w-6 h-6" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
        {[
          {
            image: "/images/gallery/interior 2.jpg",
            title: "Residential",
            description: "Expert interior & exterior home painting with meticulous attention to detail",
          },
          {
            image: "/images/gallery/outdoor 4.jpg",
            title: "Commercial",
            description: "Transforming workplaces with minimal downtime and maximum impact",
          },
          {
            image: "/images/gallery/livingroom 3.jpg",
            title: "Premium Quality",
            description: "Using top-tier products like Emperor Masonry Paint and Benjamin Moore",
          },
          {
            image: "/images/gallery/interior 4.jpg",
            title: "Advanced Tech",
            description: "Utilizing Mirka 1230M & TriTech T5 spray systems for flawless finish",
          },
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative h-64 rounded-3xl border-4 border-[#e6ab65] overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}