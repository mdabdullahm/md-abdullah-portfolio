"use client";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiNodedotjs, SiMongodb, SiGithub, 
  SiFramer, SiGit, SiFirebase, SiFigma 
} from "react-icons/si";

const DetailedSkills = () => {
  const skillCategories = [
    {
      category: "Core Fundamentals",
      skills: [
        { name: "HTML5", level: 98, icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", level: 95, icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "JavaScript", level: 85, icon: <SiJavascript className="text-[#F7DF1E]" /> },
      ]
    },
    {
      category: "Frontend Frameworks",
      skills: [
        { name: "React", level: 90, icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", level: 92, icon: <SiNextdotjs className="text-black" /> },
        { name: "Tailwind", level: 99, icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Framer", level: 80, icon: <SiFramer className="text-[#0055FF]" /> },
      ]
    },
    {
      category: "Backend & Data",
      skills: [
        { name: "Node.js", level: 85, icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "MongoDB", level: 80, icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Firebase", level: 88, icon: <SiFirebase className="text-[#FFCA28]" /> },
      ]
    },
    {
      category: "Tools & Design",
      skills: [
        { name: "Figma", level: 75, icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: "Git", level: 90, icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", level: 95, icon: <SiGithub className="text-black" /> },
      ]
    }
  ];

  return (
    <section className="py-15 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
          >
            Technical Proficiency
          </motion.h4>
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter">
            Detailed <span className="text-gray-400 italic">Proficiency.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            The technologies I use make your project more powerful and modern.
          </p>
        </div>

        {/* স্কিল ক্যাটাগরি গ্রিড (৪টি কার্ডের জন্য ২ কলাম লেআউট) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#00F7FF]/20 transition-all duration-500"
            >
              <h3 className="text-xl font-black text-black mb-10 uppercase tracking-widest border-b border-gray-100 pb-4">
                {cat.category}
              </h3>
              
              <div className="space-y-8">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="font-bold text-gray-800 uppercase text-xs tracking-widest">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-black text-[#00F7FF]">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-[#00F7FF] rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 h-full w-2 bg-white/40 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DetailedSkills;