import { motion } from 'framer-motion';
import Image from 'next/image';

import { toolsContent } from '../data/landingpage';

export default function Tools() {

  return (
    <div className="  bg-gradient-to-t from-[#f7d5c5] to-[#f7d5c5] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
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

        <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 overflow-x-auto snap-x snap-mandatory flex flex-nowrap sm:grid sm:flex-wrap sm:overflow-visible sm:snap-none">
          {toolsContent.tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.7 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[85vw] sm:min-w-0 snap-center sm:snap-align-none flex-shrink-0 w-[85vw] md:w-auto"
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
  );
}