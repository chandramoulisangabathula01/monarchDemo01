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
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="text-5xl font-bold mb-4 text-[#711f50] ">What We Do</h1>
          <h2 className="text-4xl font-bold mb-8 handwritten text-primary">Monarch Painters Limited</h2>
          <ul className="md:text-xl  space-y-4 mb-8 text-gray-600">
            <li>✅ 35+ years combined experience in professional painting</li>
            <li>✅ Superior quality finishes for projects of any size</li>
            <li>✅ Fair pricing with no corners cut on any job</li>
          </ul>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              size="lg" 
              className="text-lg bg-[#711f50] rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute -inset-2 bg-[#FFFFFF]/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Button>
        </motion.div>
        </div>
        <div className="relative">
          <motion.div
            style={{ opacity, scale }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            className="grid grid-cols-2 gap-4"
          >
            <Image
              src="./images/tech3.webp"
              alt="Professional painting team at work"
              width={300}
              height={400}
              className="rounded-[2.5rem] "
            />
            <Image
              src="./images/5.2.png"
              alt="High-quality painting finish example"
              width={300}
              height={400}
              className="rounded-[2.5rem] mt-12 "
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
