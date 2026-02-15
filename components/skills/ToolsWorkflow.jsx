"use client";
import { motion } from "framer-motion";
import { 
  SiPostman, SiFigma, 
  SiGithub, SiVercel, SiGooglechrome 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc"; // VS Code এর জন্য এটি ব্যবহার করা হয়েছে
import { FiCheckCircle } from "react-icons/fi";

const ToolsWorkflow = () => {
  const tools = [
    { 
      name: "VS Code", 
      icon: <VscCode className="text-[#007ACC]" />, // SiVisualstudiocode এর পরিবর্তে VscCode
      desc: "Primary Code Editor" 
    },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, desc: "API Testing & Debug" },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" />, desc: "UI/UX Design" },
    { name: "GitHub", icon: <SiGithub className="text-black" />, desc: "Version Control" },
    { name: "Vercel", icon: <SiVercel className="text-black" />, desc: "Deployment & Hosting" },
    { name: "Chrome Dev", icon: <SiGooglechrome className="text-[#4285F4]" />, desc: "Debugging" },
  ];

  const workflow = [
    { id: "01", title: "Discovery & Planning", desc: "First, I understand the client's needs and create a roadmap for the project." },
    { id: "02", title: "UI/UX Design", desc: "I design a modern and user-friendly interface using Figma." },
    { id: "03", title: "Development", desc: "We build websites by writing clean code using Next.js and modern technology." },
    { id: "04", title: "Testing & QA", desc: "Checking for bugs and ensuring site speed and performance." },
    { id: "05", title: "Deployment", desc: "Finally, the website is made live and handed over to the client." },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* অংশ ১: Tools I Use */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
            >
              The Toolkit
            </motion.h4>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter">
              Essential <span className="text-gray-400 italic">Tools.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-gray-50 rounded-[35px] text-center border border-gray-100 hover:border-[#00F7FF]/30 transition-all group"
              >
                <div className="text-4xl flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="text-[10px] font-black text-black uppercase tracking-widest mb-1">{tool.name}</h3>
                <p className="text-gray-400 text-[8px] uppercase font-bold">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* অংশ ২: My Workflow */}
        <div className="bg-black rounded-[50px] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F7FF]/10 blur-[100px]" />
            <div className="relative z-10">
                <h4 className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4">The Process</h4>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter mb-16">
                   My <span className="text-gray-500">Workflow.</span>
                </h2>

                <div className="space-y-12">
                  {workflow.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-6 md:gap-10 items-start group"
                    >
                      <span className="text-3xl md:text-5xl font-black text-[#00F7FF]/20 group-hover:text-[#00F7FF] transition-colors duration-500 italic">
                        {step.id}
                      </span>
                      <div className="pt-2 md:pt-4">
                        <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight flex items-center gap-3">
                          {step.title}
                          <FiCheckCircle className="text-[#00F7FF] text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsWorkflow;