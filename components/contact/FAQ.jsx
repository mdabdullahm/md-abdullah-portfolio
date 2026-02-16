"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const faqs = [
    {
      question: "Will you do both the design and development of my website?",
      answer: "Yes, I design modern user interfaces using Figma and then develop them using Next.js or React. That means I provide end-to-end solutions."
    },
    {
      question: "How long does it usually take to complete a project?",
      answer: "This depends on the type and complexity of the project. A simple landing page can be completed in 3-5 days, and a large e-commerce or dashboard project can be completed in 2-4 weeks."
    },
    {
      question: "What is your budget or payment process like?",
      answer: "I usually do project-based budgeting. 50% advance before starting work and the remaining 50% payment after the work is completed is set based on discussion via WhatsApp."
    },
    {
      question: "Will I receive any support after the work is completed?",
      answer: "Of course! I provide free technical support and help with minor changes for up to 1 month after project handover."
    },
    {
      question: "Can you redesign my current website?",
      answer: "Of course. If your current site is old technology, I can convert it to the latest Next.js and modern design."
    }
  ];

  return (
    <section className="py-15 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
          >
            Common Questions
          </motion.h4>
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter">
            FAQ <span className="text-gray-400 italic">Corner.</span>
          </h2>
        </div>

        {/* অ্যাকর্ডিয়ন লিস্ট */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-[30px] border transition-all duration-300 overflow-hidden ${
                activeIdx === index ? "border-[#00F7FF]/30 bg-white shadow-xl" : "border-gray-100 bg-white"
              }`}
            >
              <button
                onClick={() => setActiveIdx(activeIdx === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-black uppercase tracking-tight transition-colors ${activeIdx === index ? "text-black" : "text-gray-700"}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIdx === index ? "bg-[#00F7FF] text-black rotate-180" : "bg-gray-50 text-gray-400"}`}>
                  {activeIdx === index ? <FiMinus /> : <FiPlus />}
                </div>
              </button>

              <AnimatePresence>
                {activeIdx === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;