import { motion, AnimatePresence } from "framer-motion";
import { CompareDemo } from "./demo";
import { ColourfulText } from "./ui/colourful-text";
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const [currentTag, setCurrentTag] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const isTablet = useRef(typeof window !== 'undefined' && (window.innerWidth >= 768 && window.innerWidth <= 1180)).current;

  const tags = [
    "Home Decorators",
    "Industrial Painters",
    "Top-Quality Materials",
    "Interior & Exterior Painting",
    "Professional Painting Services",
    "Interior Painting & Decorating",
    "Professional Decorating Services",
    "Commercial & Residential Painting",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTag((prev) => (prev + 1) % tags.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    variants: {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      }
    },
    initial: "initial",
    animate: "animate",
    viewport: { once: true }
  };

  const buttonHover = {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300
    }
  };

  const buttonTap = {
    scale: 0.95
  };

  const statsHover = {
    scale: 1.1,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      initial="initial"
      animate="animate"
      variants={staggerContainer.variants}
      className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] w-full px-4 sm:px-6 lg:px-8 py-6 mt-9 sm:py-8 lg:py-16 bg-[#ede2db] dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden"
    >
      <motion.div 
        variants={staggerContainer.variants}
        className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 mt-8 lg:mt-0 z-10 md:px-4"
      >
        <div className="space-y-2 sm:space-y-3 lg:space-y-4 max-w-3xl mx-auto lg:mx-0">
          <motion.h1 
            variants={fadeInUp}
            className="font-['CustomFont'] leading-tight text-4xl md:text-5xl lg:text-6xl text-[#711f50] dark:text-gray-100"
          >
            Bringing Colors to Life
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTag}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-h-[50px] md:min-h-[70px] lg:min-h-[100px] flex items-center justify-center font-['CustomFont'] leading-tight text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-[#e6ab65] via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              {tags[currentTag]}
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.p 
          variants={fadeInUp}
          className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-xl max-w-xl px-4 md:px-0"
        >
          Staffordshire's premier painting and decorating service with 35+ years of expertise.
        </motion.p>
        <motion.div 
          variants={fadeInUp}
          className="flex flex-row gap-3 md:gap-4 lg:gap-8 w-full justify-center lg:justify-start px-2 md:px-4"
        >
          <motion.div 
            whileHover={statsHover}
            whileTap={buttonTap}
            className="transition-all duration-300 backdrop-blur-sm p-3 md:p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-100/50 hover:shadow-xl hover:shadow-blue-100/20 border border-blue-100/20"
          >
            <motion.h3 
              className="text-lg md:text-2xl lg:text-4xl font-bold text-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              35+
            </motion.h3>
            <p className="text-xs md:text-sm lg:text-base text-gray-600">Years Experience</p>
          </motion.div>
          <motion.div 
            whileHover={statsHover}
            whileTap={buttonTap}
            className="transition-all duration-300 backdrop-blur-sm p-6 rounded-2xl bg-gradient-to-br from-amber-50/80 to-amber-100/50 hover:shadow-xl hover:shadow-amber-100/20 border border-amber-100/20"
          >
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-4xl font-bold text-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              1000+
            </motion.h3>
            <p className="text-sm sm:text-base text-gray-600">Satisfied Clients</p>
          </motion.div>
          <motion.div 
            whileHover={statsHover}
            whileTap={buttonTap}
            className="transition-all duration-300 backdrop-blur-sm p-6 rounded-2xl bg-gradient-to-br from-pink-50/80 to-pink-100/50 hover:shadow-xl hover:shadow-amber-100/20 border border-amber-100/20"
          >
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-4xl font-bold text-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              5 stars
            </motion.h3>
            <p className="text-sm sm:text-base text-gray-600">On Google</p>
          </motion.div>
        </motion.div>
        
        {/* Call-to-action buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mt-4 px-4 md:px-0"
        >
          <motion.button
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="group relative px-6 md:px-8 py-3 md:py-4 bg-[#711f50] text-white font-semibold text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#711f50]/20 transition-all duration-300 overflow-hidden"
          >
            Get a Free Quote
          </motion.button>
          <motion.button
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="group relative px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-[#711f50] text-[#711f50] dark:text-white dark:border-white font-semibold text-base md:text-lg rounded-xl hover:shadow-xl hover:shadow-[#711f50]/10 transition-all duration-300 overflow-hidden"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="flex-1 order-1 mt-6 lg:order-2 h-[250px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        <div className="relative rounded-3xl h-full w-full overflow-hidden flex justify-center items-center">
          {(isMobile || isTablet) ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-3xl"
            >
              <source src="/bgvideo.mp4" type="video/mp4" />
            </video>
          ) : (
            <CompareDemo />
          )}
        </div>
      </div>
    </motion.div>
  );
}
