"use client";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiNextdotjs, SiTailwindcss, SiRedux, SiFramer 
} from "react-icons/si";

const FrontendSkills = () => {
  const skills = [
    {
      name: "React.js",
      level: 95,
      icon: <SiReact className="text-[#61DAFB]" />,
      desc: "Hooks, Context API, and Complex State Management.",
    },
    {
      name: "Next.js",
      level: 92,
      icon: <SiNextdotjs className="text-black" />,
      desc: "Server Components, SSR, App Router, and Optimization.",
    },
    {
      name: "JavaScript",
      level: 88,
      icon: <SiJavascript className="text-[#F7DF1E]" />,
      desc: "ES6+, Async/Await, and DOM Manipulation.",
    },
    {
      name: "Tailwind CSS",
      level: 98,
      icon: <SiTailwindcss className="text-[#38BDF8]" />,
      desc: "Custom Configurations, Responsive Layouts, and Design Systems.",
    },
    {
      name: "Framer Motion",
      level: 85,
      icon: <SiFramer className="text-[#FF0055]" />,
      desc: "Smooth Page Transitions and Interactive UI Animations.",
    },
    {
      name: "HTML5 & CSS3",
      level: 95,
      icon: <div className="flex gap-1"><SiHtml5 className="text-[#E34F26]" /><SiCss3 className="text-[#1572B6]" /></div>,
      desc: "Semantic Layouts, Flexbox, Grid, and Modern CSS.",
    },
  ];

  return (
    <section className="py-15 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
            >
              The Front-end
            </motion.h4>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
              Visual <span className="text-gray-400 italic font-medium">Mastery.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed">
            I create interfaces that are not only beautiful to look at, but also user-friendly and high-performing.
          </p>
        </div>

        {/* স্কিল কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-white border border-gray-100 rounded-[40px] hover:border-[#00F7FF]/30 hover:shadow-2xl hover:shadow-[#00F7FF]/5 transition-all duration-500"
            >
              {/* আইকন এবং পার্সেন্টেজ */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <span className="text-lg font-black text-[#00F7FF] italic">
                  {skill.level}%
                </span>
              </div>

              {/* নাম এবং বর্ণনা */}
              <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-tight">
                {skill.name}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-8 font-medium">
                {skill.desc}
              </p>

              {/* প্রগ্রেস বার */}
              <div className="relative h-[4px] w-full bg-gray-50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-[#00F7FF] rounded-full"
                >
                  <div className="absolute top-0 right-0 h-full w-4 bg-white/40 blur-[2px]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* বটম ইনফো */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="w-12 h-[1px] bg-gray-200 hidden md:block"></div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[4px]">
              Expert in pixel-perfect and responsive design
            </p>
            <div className="w-12 h-[1px] bg-gray-200 hidden md:block"></div>
        </div>

      </div>
    </section>
  );
};

export default FrontendSkills;