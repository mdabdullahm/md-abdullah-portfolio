"use client";
import { useState } from "react"; // স্টেট ম্যানেজমেন্টের জন্য
import { motion } from "framer-motion";
import { FiCheck, FiX, FiSend } from "react-icons/fi";

const Pricing = () => {
  // ডিফল্টভাবে মাঝখানের (Standard - Index 1) প্যাকেজটি একটিভ থাকবে
  const [activeIndex, setActiveIndex] = useState(1);

  const plans = [
    {
      name: "Basic",
      price: "199",
      desc: "ছোট বিজনেস বা পার্সোনাল ব্র্যান্ডিংয়ের জন্য সেরা।",
      features: ["Single Page Website", "Responsive Design", "Basic SEO", "Contact Form", "Social Media Link"],
      notIncluded: ["E-commerce", "Custom Dashboard", "Domain & Hosting"],
      buttonText: "Get Started",
    },
    {
      name: "Standard",
      price: "499",
      desc: "একটি পূর্ণাঙ্গ বিজনেস ওয়েবসাইটের জন্য পারফেক্ট।",
      features: ["Multi-page Website", "Premium UI/UX Design", "Advanced SEO", "Admin Dashboard", "Animation Effects", "3 Months Support"],
      notIncluded: ["Advanced E-commerce"],
      buttonText: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "999",
      desc: "বড় কোম্পানি বা ই-কমার্স বিজনেসের জন্য স্কেলেবল সলিউশন।",
      features: ["Full E-commerce App", "Payment Gateway", "Inventory Management", "High-End Security", "Lottie Animations", "6 Months Support"],
      notIncluded: [],
      buttonText: "Go Enterprise",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
          >
            Investment
          </motion.h4>
          <h2 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
            Choose Your <span className="text-gray-400 italic font-medium">Plan.</span>
          </h2>
          <div className="w-16 h-1 bg-[#00F7FF] mx-auto mt-6 rounded-full" />
        </div>

        {/* প্রাইসিং কার্ডস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => {
            const isActive = activeIndex === index; // চেক করছে এই কার্ডটি একটিভ কি না

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(index)} // কার্ডে ক্লিক করলে একটিভ হবে
                className={`relative p-10 rounded-[40px] border transition-all duration-500 cursor-pointer ${
                  isActive 
                  ? "bg-black text-white border-black scale-105 shadow-2xl" 
                  : "bg-white text-black border-gray-100 hover:border-[#00F7FF]/30 shadow-sm"
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#00F7FF] text-black text-[10px] font-black uppercase px-6 py-2 rounded-full tracking-widest">
                    Recommended
                  </div>
                )}

                <h3 className={`text-xl font-black uppercase tracking-widest mb-2 ${isActive ? "text-[#00F7FF]" : "text-black"}`}>
                  {plan.name}
                </h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter">${plan.price}</span>
                  <span className={`text-[10px] font-bold uppercase ${isActive ? "text-gray-500" : "text-gray-400"}`}>/Starting From</span>
                </div>
                
                <p className={`text-sm mb-8 leading-relaxed ${isActive ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.desc}
                </p>

                {/* ফিচারস লিস্ট */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold">
                      <FiCheck className="text-[#00F7FF] text-lg shrink-0" />
                      <span className={isActive ? "text-gray-200" : "text-gray-700"}>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold opacity-30 grayscale">
                      <FiX className="text-red-500 text-lg shrink-0" />
                      <span className={isActive ? "text-gray-500" : "text-gray-400"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* বাটন (Active State Logic) */}
                <a
                  href={`https://wa.me/8801785993913?text=Hello Abdullah, I am interested in your ${plan.name} Package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // যাতে উপরের কার্ডের ক্লিক ইভেন্টে সমস্যা না হয়
                    setActiveIndex(index);
                  }}
                  className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase transition-all duration-300 ${
                    isActive 
                    ? "bg-[#00F7FF] text-black shadow-[0_10px_30px_rgba(0,247,255,0.3)] scale-105" 
                    : "bg-gray-100 text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                  <FiSend className={isActive ? "animate-bounce" : ""} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* কাস্টম অফার */}
        <div className="mt-20 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[3px]">
              Need a custom solution? <a href="https://wa.me/8801785993913" className="text-[#00F7FF] underline underline-offset-4">Contact Me Directly</a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;