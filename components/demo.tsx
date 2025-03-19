import React, { useState, useEffect } from "react";
import { Compare } from "@/components/ui/autocompare/compare";
import { motion } from "framer-motion";

export function CompareDemo() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="p-1 md:p-2 border rounded-3xl dark:bg-neutral-900 bg-neutral-100/80 border-neutral-200 dark:border-neutral-800 mx-auto w-full h-full backdrop-blur-sm "
      >
        
          <Compare
            firstImage="/images/studio/36.webp"
            secondImage="/images/studio/35.5.webp"
            firstImageClassName="object-cover object-left-top w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            secondImageClassname="object-cover object-left-top w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
            autoplayDuration={4000}
            showHandlebar={true}
          />
       
      </motion.div>
    </motion.div>
  );
}