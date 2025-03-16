import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { Button } from '@/components/ui/button';
// import './globals.css';
// import "./globals.css";

export default function Hero2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from('h1', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
        }
      });

      gsap.from('h2', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
        }
      });

      gsap.from('ul li', {
        duration: 0.8,
        x: -50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        <div className="px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#711f50]">What We Do</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 handwritten text-primary">Monarch Painters Limited</h2>
          <ul className="text-lg md:text-xl space-y-3 md:space-y-4 mb-6 md:mb-8 text-gray-600">
            <li>✅ 35+ years combined experience in professional painting</li>
            <li>✅ Superior quality finishes for projects of any size</li>
            <li>✅ Fair pricing with no corners cut on any job</li>
          </ul>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full md:w-auto"
          >
            <Button 
              size="lg" 
              className="w-full md:w-auto text-base md:text-lg bg-[#711f50] rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute -inset-2 bg-[#FFFFFF]/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
          </motion.div>
        </div>
        <div className="relative mt-8 md:mt-0">
          <motion.div
            style={{ opacity, scale }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            className="grid grid-cols-2 gap-3 md:gap-4 px-4 md:px-0"
          >
            <Image
              src="./images/tech3.webp"
              alt="Professional painting team at work"
              width={300}
              height={400}
              className="rounded-[2rem] md:rounded-[2.5rem] w-full h-auto"
            />
            <Image
              src="./images/studio/20230728_132854.webp"
              alt="High-quality painting finish example"
              width={300}
              height={400}
              priority
              className="rounded-[2rem] md:rounded-[2.5rem] mt-8 md:mt-12 w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
