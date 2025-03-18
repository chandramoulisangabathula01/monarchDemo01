import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


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
            className="w-full md:w-auto"
          >
            <Button 
              size="lg" 
              className="w-full md:w-auto text-base md:text-lg bg-gradient-to-r from-[#711f50] via-[#8a2761] to-[#711f50] bg-[length:200%_100%] hover:bg-[length:100%_100%] rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
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
              src="./images/studio/20240429_165826 (Large).webp"
              alt="Professional painting team at work"
              width={300}
              height={400}
              className="rounded-[2rem] md:rounded-[2.5rem] w-full h-auto"
            />
            <Image
              src="./images/studio/20240514_134755 (Large).webp"
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