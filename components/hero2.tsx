import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button'; // Adjust import based on your button component location

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
          <Button size="lg" className="text-lg">
            Get Started
          </Button>
        </div>
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <Image
              src="./images/tech3.webp"
              alt="Professional painting team at work"
              width={300}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="./images/5.2.png"
              alt="High-quality painting finish example"
              width={300}
              height={400}
              className="rounded-lg mt-12"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
