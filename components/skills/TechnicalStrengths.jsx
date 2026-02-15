"use client";
import { motion } from "framer-motion";
import { FiCheck, FiCpu, FiHardDrive, FiShield, FiTrendingUp } from "react-icons/fi";

const TechnicalStrengths = () => {
  const strengths = [
    {
      title: "Optimized Architecture",
      desc: "I create code structures that are scalable and easy to maintain. Clean code and design patterns are the cornerstones of my work.",
      icon: <FiCpu />,
      tags: ["Clean Code", "Scalability"]
    },
    {
      title: "Performance First",
      desc: "My specialty is website speed and core web vitals. I ensure lightning fast loading speeds.",
      icon: <FiTrendingUp />,
      tags: ["Speed", "SEO"]
    },
    {
      title: "Complex Logic Solving",
      desc: "I am adept at translating complex business logic and data manipulation into simple code. I take on any technical challenge.",
      icon: <FiHardDrive />,
      tags: ["Algorithms", "Logic"]
    },
    {
      title: "Security Mindset",
      desc: "I always follow modern security standards (OWASP) when handling data security and authentication.",
      icon: <FiShield />,
      tags: ["Security", "JWT"]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* সেকশন হেডার */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
            >
              The Pro Level
            </motion.h4>
            <h2 className="text-4xl md:text-7xl font-black text-black leading-tight uppercase tracking-tighter">
              Technical <br /> 
              <span className="text-gray-400 italic">Strengths.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md pb-2 border-l-4 border-[#00F7FF] pl-6">
            Not just coding, I create solutions that maintain professional standards and help businesses grow.
          </p>
        </div>

        {/* স্ট্রেংথ কার্ডস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group p-10 bg-gray-50 rounded-[50px] border border-gray-100 hover:border-[#00F7FF]/30 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* আইকন বক্স */}
                <div className="w-20 h-20 shrink-0 bg-white rounded-[30px] flex items-center justify-center text-4xl text-black shadow-inner group-hover:bg-[#00F7FF] group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>

                {/* কন্টেন্ট */}
                <div>
                  <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  {/* ছোট ট্যাগস */}
                  <div className="flex gap-3">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-[9px] font-black text-black bg-gray-200 px-3 py-1.5 rounded-full uppercase tracking-widest group-hover:bg-[#00F7FF]/10 group-hover:text-[#00F7FF] transition-colors">
                        <FiCheck /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* নিচে একটি হাই-এন্ড মেসেজ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center border-t border-gray-100 pt-16"
        >
          <div className="inline-block p-1 rounded-full bg-gray-50 border border-gray-100 mb-6">
             <div className="px-6 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-[#00F7FF]">
                Enterprise Ready Developer
             </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto italic text-lg">
            "I don't just build websites; I build digital architectures that withstand the test of time and traffic."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TechnicalStrengths;