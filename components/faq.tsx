import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why choose Monarch Painters Limited?",
      answer: "We take pride in our top-tier craftsmanship and attention to detail, ensuring every project reflects your unique style and vision. With over 35 years of combined experience, we deliver superior paint jobs for every project, regardless of size.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Rugeley, Lichfield, Tamworth, Sutton Coldfield, Birmingham, Cannock, Stafford, Penkridge, Derby, Wolverhampton and many more areas in Staffordshire.",
    },
    {
      question: "What types of projects do you handle?",
      answer: "We specialize in both residential and commercial projects, including interior/exterior painting, industrial painting, and high-end developments. We use top-quality materials and the latest techniques for durable, beautiful results.",
    },
    {
      question: "What makes your service different?",
      answer: "We're a family business with a 5-star Google rating, committed to sustainability and professionalism. We use advanced equipment like the Mirka 1230M dustless extraction system and TriTech T5 airless spray system for flawless finishes.",
    },
    {
      question: "What materials do you use?",
      answer: "We use premium products like Emperor Masonry Paint, Isomat Premium Colour, Benjamin Moore Scuff-X, and Zinsser AllCoat for exterior woodwork, ensuring long-lasting, high-quality results.",
    },
    {
      question: "How do you ensure quality?",
      answer: "We never cut corners, maintain clear communication, and deliver on every promise. Our team is fully equipped with top-tier tools and follows strict health and safety guidelines for every project.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
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

        <button className="mt-12 mx-auto block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-colors">
          Read more FAQs
        </button>
      </div>
    </section>
  );
}