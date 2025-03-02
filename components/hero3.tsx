import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { CompareDemo } from './demo';
// import { Button } from '@/components/ui/button';
// import './globals.css';
// import "./globals.css";

export default function Hero2() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="text-6xl font-bold mb-4">What We Do</h1>
          <h2 className="text-4xl font-bold mb-8 handwritten text-primary">Monarch Painters Limited</h2>
          <ul className="text-xl space-y-4 mb-8 text-gray-600">
            <li>✅ 35+ years combined experience in professional painting</li>
            <li>✅ Superior quality finishes for projects of any size</li>
            <li>✅ Fair pricing with no corners cut on any job</li>
          </ul>
          <Button 
            size="lg" 
            className="text-lg bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#818CF8] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute -inset-2 bg-[#FFFFFF]/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Button>
        </div>
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 order-1 lg:order-2 h-300px] sm:h-[300px] md:h-[500px] "
          >
             <CompareDemo />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
