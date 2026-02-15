"use client";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiFramer, SiGit, SiGithub,
  SiFirebase,
  SiFigma
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "GitHub", icon: <SiGithub className="text-black" /> }, // নতুন যুক্ত করা হয়েছে
    { name: "Framer", icon: <SiFramer className="text-[#0055FF]" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "Firebase", level: 88, icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Figma", level: 75, icon: <SiFigma className="text-[#F24E1E]" /> },
  ];

  // স্লাইডারটিকে বিরতিহীন করার জন্য লিস্টটি ডাবল করা হয়েছে
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section id="skills" className="py-15 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* সেকশন হেডার */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00F7FF] font-bold tracking-[5px] uppercase text-xs mb-3"
          >
            My Tech Stack
          </motion.h4>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            Tools I Use to <span className="text-gray-400">Build.</span>
          </h2>
        </div>

        {/* স্লাইডার কন্টেইনার */}
        <div className="relative flex overflow-hidden group">
          {/* দুই পাশে হালকা ফেড ইফেক্ট (Gradient Overlay) */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* স্লাইড এনিমেশন */}
          <motion.div
            className="flex gap-8 py-10"
            animate={{ x: ["0%", "-50%"] }} // বাম দিকে স্লাইড হবে
            transition={{
              ease: "linear",
              duration: 80, // স্পিড কন্ট্রোল করতে পারো (বেশি দিলে স্লো হবে)
              repeat: Infinity
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white border border-gray-100 px-8 py-5 rounded-2xl shadow-sm hover:border-[#00F7FF] hover:shadow-[0_10px_30px_rgba(0,247,255,0.1)] transition-all duration-300 group/item"
              >
                <div className="text-4xl group-hover/item:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-lg font-bold text-gray-800 uppercase tracking-wider">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* নিচের ছোট টেক্সট */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex justify-center items-center gap-2 text-gray-400 font-medium"
        >
          <div className="w-10 h-[1px] bg-gray-200"></div>
          <span>I am constantly learning new technologies and keeping myself updated so that I can provide the best digital solutions.</span>
          <div className="w-10 h-[1px] bg-gray-200"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;