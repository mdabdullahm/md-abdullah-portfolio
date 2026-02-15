"use client";
import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiBriefcase, FiAward } from "react-icons/fi";

const Timeline = () => {
  const journey = [
    {
      year: "2021",
      title: "Started the Journey",
      company: "Self-Learning",
      desc: "I started my coding journey with HTML and CSS out of curiosity about technology.",
      icon: <FiBookOpen />,
    },
    {
      year: "2022",
      title: "Frontend Development",
      company: "Project Based",
      desc: "I gained expertise in JavaScript and React and completed several small and large frontend projects.",
      icon: <FiCode />,
    },
    {
      year: "2023",
      title: "Full Stack Transition",
      company: "Freelance Work",
      desc: "I started working as a full-stack developer by learning Node.js and MongoDB.",
      icon: <FiBriefcase />,
    },
    {
      year: "2024 - Present",
      title: "Next.js Specialist",
      company: "Abdullah.Dev",
      desc: "Currently I am working with Next.js and modern cloud solutions and handling high-end client projects.",
      icon: <FiAward />,
    },
  ];

  return (
    <section className="py-15 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* section header */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
          >
            Evolution
          </motion.h4>
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter">
            My <span className="text-gray-400 italic">Journey.</span>
          </h2>
          <div className="w-16 h-1 bg-[#00F7FF] mx-auto mt-6 rounded-full" />
        </div>

        {/* টাইমলাইন মেইন কন্টেইনার */}
        <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0 md:flex md:flex-col md:items-center md:border-l-0">
          
          {/* ডেস্কটপে মাঝখানের লাইন */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gray-100"></div>

          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative mb-16 md:mb-24 w-full flex flex-col ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center`}
            >
              {/* টাইমলাইন ডট/আইকন */}
              <div className="absolute -left-[17px] md:left-1/2 md:-translate-x-1/2 z-20 w-8 h-8 bg-white border-4 border-[#00F7FF] rounded-full shadow-[0_0_15px_rgba(0,247,255,0.4)] flex items-center justify-center text-[#00F7FF] text-xs">
                 {/* ডটের ভেতর আইকন দিলে ছোট হয়ে যাবে, তাই ডট হিসেবেই রাখা ভালো */}
              </div>

              {/* কন্টেন্ট কার্ড */}
              <div className={`w-full md:w-[45%] ml-10 md:ml-0 ${
                index % 2 === 0 ? "md:pr-16" : "md:pl-16"
              }`}>
                <div className="p-8 md:p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl hover:border-[#00F7FF]/20 transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-[#00F7FF] uppercase tracking-widest bg-[#00F7FF]/5 px-4 py-1.5 rounded-full">
                      {item.year}
                    </span>
                    <div className="text-2xl text-gray-300 group-hover:text-[#00F7FF] transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-2 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#00F7FF] text-[10px] font-bold uppercase mb-4 tracking-widest">
                    {item.company}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* ডেস্কটপে অন্য পাশের জন্য গ্যাপ */}
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;