import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why should I choose a Noovo camper van?",
      answer: "Noovo camper vans offer unparalleled comfort and flexibility for your adventures.",
    },
    {
      question: "What are the financing options available?",
      answer: "We provide various financing options to suit your needs, including flexible payment plans.",
    },
    {
      question: "What can I expect life to be like?",
      answer: "Life in a Noovo camper van is about freedom, adventure, and creating unforgettable memories.",
    },
    {
      question: "Do you offer financing?",
      answer: "Yes, we offer financing options to help you get on the road with ease.",
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