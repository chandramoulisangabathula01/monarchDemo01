import { useState } from "react";
import { motion } from "framer-motion";
import { faqContent } from "@/data/landingpage";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { title, subtitle, faqs, cta } = faqContent;

  return (
    <section className="py-20 bg-[#ede2db]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="md:text-5xl font-bold mb-4 text-[#711f50] sm:text-4xl text-4xl ">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </motion.div>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-2xl text-[#711f50] font-medium">{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        <Link href={cta.link} className="mt-8 block bg-gradient-to-r from-[#711f50] to-[#e6ab65] text-white px-8 py-4 rounded-full font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md text-lg relative overflow-hidden group text-center">
          <span className="relative z-10">{cta.text}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#e6ab65] to-[#711f50] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </Link>
      </div>
    </section>
  );
}