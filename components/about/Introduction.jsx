"use client";
import { motion } from "framer-motion";
import { FiCheckSquare, FiTarget, FiPenTool } from "react-icons/fi";

const Introduction = () => {
  const values = [
    {
      title: "Problem Solver",
      desc: "I don't just write code, but find simple solutions to complex digital problems.",
      icon: <FiTarget className="text-[#00F7FF]" />,
    },
    {
      title: "Clean Architect",
      desc: "Keeping the code clean and maintainable is one of my main goals.",
      icon: <FiPenTool className="text-[#00F7FF]" />,
    },
    {
      title: "User Focused",
      desc: "We always design and develop interfaces with user needs in mind.",
      icon: <FiCheckSquare className="text-[#00F7FF]" />,
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* ১. বাম পাশ: মেইন বায়ো (Story) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h4 className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-6">
              Professional Bio
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
              Crafting Digital <span className="text-gray-400">Masterpieces</span> <br /> 
              With Precision.
            </h2>
            
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed italic">
              <p>
                My journey began with a deep curiosity about technology and design. Over the past 2 years, I have developed myself as a full-stack developer, with my main focus on <strong>Next.js, React, and modern cloud technologies</strong>.
              </p>
              <p>
                I believe that a website is not just a repository of information, it is a brand identity. So I strive to be perfect in every pixel and every line of code. I love to create applications that not only look beautiful, but also work lightning fast.
              </p>
              <p className="text-black font-bold not-italic border-l-4 border-[#00F7FF] pl-6 py-2">
                "My goal is to transform your idea into a digital reality that will transcend the boundaries of your business."
              </p>
            </div>
          </motion.div>

          {/* ২. ডান পাশ: Key Values (Card Style) */}
          <div className="lg:col-span-5 space-y-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-[35px] border border-gray-100 hover:border-[#00F7FF]/30 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm group-hover:bg-[#C9D6DF] group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-black mb-2 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;