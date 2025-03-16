"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CompareDemo } from "./demo";
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { heroContent } from "@/data/landingpage";

export function Hero() {
  const [currentTag, setCurrentTag] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);
  const [isIPadPro, setIsIPadPro] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    setIsTablet(
      window.innerWidth >= 768 && window.innerWidth <= 1180 ||
      (window.innerWidth === 1024 && window.innerHeight === 1366)
    );
    
    setIsIPadPro(window.innerWidth === 1024 && window.innerHeight === 1366);
    
    const handleResize = () => {
      setIsTablet(
        window.innerWidth >= 768 && window.innerWidth <= 1180 ||
        (window.innerWidth === 1024 && window.innerHeight === 1366)
      );
      setIsIPadPro(window.innerWidth === 1024 && window.innerHeight === 1366);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { tags } = heroContent;

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

  // Special layout for iPad Pro (1024x1366)
  if (isClient && isIPadPro) {
    return (
      <motion.div 
        ref={containerRef}
        initial="initial"
        animate="animate"
        variants={staggerContainer.variants}
        className="flex flex-col min-h-[calc(100vh-4rem)] w-full px-4 sm:px-6 lg:px-8 py-6 mt-9 sm:py-8 lg:py-16 bg-[#ede2db] dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden"
      >
        {/* Video/Demo Section at the top for iPad Pro */}
        <div className="w-full h-[450px] flex items-center justify-center ">
          <div className="relative rounded-3xl h-full w-full max-w-[90%] overflow-hidden flex justify-center items-center">
            {!isClient ? (
              <div className="w-full h-full bg-neutral-100 rounded-3xl flex items-center justify-center">
                <div className="animate-pulse">Loading...</div>
              </div>
            ) : (
              <CompareDemo />
            )}
          </div>
        </div>

        {/* Content Section below for iPad Pro */}
        <motion.div 
          variants={staggerContainer.variants}
          className="flex-1 flex flex-col justify-center items-center text-center space-y-6 z-10 px-4 md:px-6"
        >
          <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto">
            <motion.h1 
              variants={fadeInUp}
              className="font-['CustomFont'] leading-tight text-4xl md:text-5xl text-[#711f50] dark:text-gray-100"
            >
              {heroContent.mainHeading}
            </motion.h1>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTag}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="min-h-[70px] flex items-center justify-center font-['CustomFont'] leading-tight text-3xl md:text-4xl bg-gradient-to-r from-[#e6ab65] via-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                {tags[currentTag]}
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl"
          >
            {heroContent.description}
          </motion.p>

          {/* Stats Section */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-row gap-4 w-full justify-center max-w-3xl mx-auto"
          >
            <motion.div 
              whileHover={statsHover}
              whileTap={buttonTap}
              className="transition-all duration-300 backdrop-blur-sm p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-100/50 hover:shadow-xl hover:shadow-blue-100/20 border border-blue-100/20 flex-1"
            >
              <motion.h3 
                className="text-xl md:text-2xl font-bold text-blue-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {heroContent.stats[0].value}
              </motion.h3>
              <p className="text-sm md:text-base text-gray-600">{heroContent.stats[0].label}</p>
            </motion.div>
            <motion.div 
              whileHover={statsHover}
              whileTap={buttonTap}
              className="transition-all duration-300 backdrop-blur-sm p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-amber-100/50 hover:shadow-xl hover:shadow-amber-100/20 border border-amber-100/20 flex-1"
            >
              <motion.h3 
                className="text-xl md:text-2xl font-bold text-yellow-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {heroContent.stats[1].value}
              </motion.h3>
              <p className="text-sm md:text-base text-gray-600">{heroContent.stats[1].label}</p>
            </motion.div>
            <motion.div 
              whileHover={statsHover}
              whileTap={buttonTap}
              className="transition-all duration-300 backdrop-blur-sm p-4 rounded-2xl bg-gradient-to-br from-pink-50/80 to-pink-100/50 hover:shadow-xl hover:shadow-amber-100/20 border border-amber-100/20 flex-1"
            >
              <motion.h3 
                className="text-xl md:text-2xl font-bold text-yellow-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {heroContent.stats[2].value}
              </motion.h3>
              <p className="text-sm md:text-base text-gray-600">{heroContent.stats[2].label}</p>
            </motion.div>
          </motion.div>
          
          {/* Call-to-action buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-row gap-4 w-full justify-center max-w-md mx-auto mt-4"
          >
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="flex-1 group relative px-6 py-3 md:py-4 bg-[#711f50] text-white font-semibold text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#711f50]/20 transition-all duration-300 overflow-hidden"
            >
              Get a Free Quote
            </motion.button>
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="flex-1 group relative px-6 py-3 md:py-4 bg-transparent border-2 border-[#711f50] text-[#711f50] dark:text-white dark:border-white font-semibold text-base md:text-lg rounded-xl hover:shadow-xl hover:shadow-[#711f50]/10 transition-all duration-300 overflow-hidden"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // Original layout for all other screen sizes
  return (
    <motion.div 
      ref={containerRef}
      initial="initial"
      animate="animate"
      variants={staggerContainer.variants}
      className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] w-full px-4 sm:px-6 lg:px-8 py-6 mt-9 sm:py-8 lg:py-16 bg-[#ede2db] dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden"
    >
      {/* Left Content Section */}
      <motion.div 
        variants={staggerContainer.variants}
        className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 mt-8 lg:mt-0 z-10 md:px-4 xl:px-0"
      >
        <div className="space-y-2 sm:space-y-3 lg:space-y-4 max-w-3xl mx-auto lg:mx-0">
          <motion.h1 
            variants={fadeInUp}
            className="font-['CustomFont'] leading-tight text-4xl md:text-5xl lg:text-6xl text-[#711f50] dark:text-gray-100 px-4 md:px-6 lg:px-0"
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
              className="min-h-[50px] md:min-h-[70px] lg:min-h-[100px] flex items-center justify-center lg:justify-start font-['CustomFont'] leading-tight text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-[#e6ab65] via-purple-600 to-pink-600 bg-clip-text text-transparent px-4 md:px-6 lg:px-0"
            >
              {tags[currentTag]}
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.p 
          variants={fadeInUp}
          className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-xl max-w-xl px-6 md:px-8 lg:px-0"
        >
          Staffordshire's premier painting and decorating service with 35+ years of expertise.
        </motion.p>

        {/* Stats Section */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-row gap-3 md:gap-4 lg:gap-8 w-full justify-center lg:justify-start px-4 md:px-6 lg:px-0"
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
            className="transition-all duration-300 backdrop-blur-sm p-3 md:p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-amber-50/80 to-amber-100/50 hover:shadow-xl hover:shadow-amber-100/20 border border-amber-100/20"
          >
            <motion.h3 
              className="text-lg md:text-2xl lg:text-4xl font-bold text-yellow-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              1000+
            </motion.h3>
            <p className="text-xs md:text-sm lg:text-base text-gray-600">Satisfied Clients</p>
          </motion.div>
          <motion.div 
            whileHover={statsHover}
            whileTap={buttonTap}
            className="transition-all duration-300 backdrop-blur-sm p-3 md:p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-pink-50/80 to-pink-100/50 hover:shadow-xl hover:shadow-amber-100/20 border border-amber-100/20"
          >
            <motion.h3 
              className="text-lg md:text-2xl lg:text-4xl font-bold text-pink-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              5 stars
            </motion.h3>
            <p className="text-xs md:text-sm lg:text-base text-gray-600">On Google</p>
          </motion.div>
        </motion.div>
        
        {/* Call-to-action buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mt-4 px-6 md:px-8 lg:px-0"
        >
          <motion.button
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="group relative px-6 md:px-8 py-3 md:py-4 bg-[#711f50] text-white font-semibold text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#711f50]/20 transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            Get a Free Quote
          </motion.button>
          <motion.button
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="group relative px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-[#711f50] text-[#711f50] dark:text-white dark:border-white font-semibold text-base md:text-lg rounded-xl hover:shadow-xl hover:shadow-[#711f50]/10 transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Video/Demo Section */}
      <div className="flex-1 order-1 lg:order-2 h-[250px] md:h-[400px] lg:h-[500px] flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="relative rounded-3xl h-full w-full overflow-hidden flex justify-center items-center">
          {!isClient ? (
            <div className="w-full h-full bg-neutral-100 rounded-3xl flex items-center justify-center">
              <div className="animate-pulse">Loading...</div>
            </div>
          ) : (isMobile || isTablet) ? (
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover rounded-3xl"
            >
              <source src={heroContent.media.video.src} type={heroContent.media.video.type} />
            </video>
          ) : (
            <CompareDemo />
          )}
        </div>
      </div>
    </motion.div>
  );
}