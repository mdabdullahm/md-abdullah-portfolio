"use client";
import { motion } from "framer-motion";
import { FiLayout, FiServer, FiPenTool, FiZap } from "react-icons/fi";

const SkillCategories = () => {
  const categories = [
    {
      id: "01",
      title: "Frontend Mastery",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
      icon: <FiLayout />,
      className: "lg:col-span-2 lg:row-span-2 bg-[#00F7FF]/5", // বড় কার্ড
    },
    {
      id: "02",
      title: "Backend Core",
      skills: ["Node.js", "Express", "MongoDB", "Firebase"],
      icon: <FiServer />,
      className: "lg:col-span-1 lg:row-span-1 bg-gray-50",
    },
    {
      id: "03",
      title: "UI/UX Design",
      skills: ["Figma", "Responsive Design", "Prototyping"],
      icon: <FiPenTool />,
      className: "lg:col-span-1 lg:row-span-1 bg-gray-50",
    },
    {
      id: "04",
      title: "Performance",
      skills: ["SEO", "Optimization", "Clean Code"],
      icon: <FiZap />,
      className: "lg:col-span-2 lg:row-span-1 bg-black text-white", // ডার্ক কার্ড
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
          >
            Specialization
          </motion.h4>
          <h2 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
            Skill <span className="text-gray-400 italic font-medium">Categories.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-6 h-auto lg:h-[800px]">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[40px] flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition-all duration-500 group ${cat.className}`}
            >
              <div>
                <div className={`text-4xl mb-8 flex justify-between items-start ${cat.id === "04" ? "text-[#00F7FF]" : "text-black group-hover:text-[#00F7FF]"}`}>
                  {cat.icon}
                  <span className="text-[10px] font-black opacity-30 tracking-widest">{cat.id}</span>
                </div>
                <h3 className={`text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter ${cat.id === "04" ? "text-white" : "text-black"}`}>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${
                        cat.id === "04" 
                        ? "border-white/10 bg-white/5 text-gray-400" 
                        : "border-gray-200 bg-white text-gray-500 hover:border-[#00F7FF] hover:text-[#00F7FF]"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* কার্ডের নিচে ছোট ডেসক্রিপশন বা অ্যারো */}
              <div className="mt-8 flex justify-end">
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${cat.id === "04" ? "border-white/20 text-white" : "border-gray-200 text-black group-hover:bg-[#00F7FF] group-hover:border-[#00F7FF] group-hover:text-black"}`}>
                    →
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillCategories;