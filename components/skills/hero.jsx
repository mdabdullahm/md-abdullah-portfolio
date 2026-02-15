"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FiCode, FiCpu, FiDatabase, FiLayout } from "react-icons/fi";

// JSON Animation ইমপোর্ট
import animationData from "../../public/heroanimation.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const SkillsHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white">
      
      {/* ১. ব্যাকগ্রাউন্ড লটি অ্যানিমেশন */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="w-full max-w-[1200px]">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* বাম পাশ: মেইন টেক্সট */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-[#00F7FF] font-black tracking-[6px] uppercase text-[10px] mb-6 px-4 py-2 border border-[#00F7FF]/20 rounded-full bg-[#00F7FF]/5"
            >
              Technical Expertise
            </motion.span>
            
            <h1 className="text-5xl md:text-8xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
              Mastering the <br /> 
              <span className="text-gray-400 italic font-medium">Modern Tech</span> <br />
              Stack<span className="text-[#00F7FF]">.</span>
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
             I don't just write code, I build digital architectures that are scalable, secure, and lightning fast. My skillset will accelerate your business' digital transformation.
            </p>

            {/* ছোট আইকন স্ট্রিপ */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-400">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-r border-gray-100 pr-6">
                <FiCode className="text-[#00F7FF]" /> Frontend
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-r border-gray-100 pr-6">
                <FiDatabase className="text-[#00F7FF]" /> Backend
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-r border-gray-100 pr-6">
                <FiCpu className="text-[#00F7FF]" /> Logic
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <FiLayout className="text-[#00F7FF]" /> Design
              </div>
            </div>
          </motion.div>

          {/* ডান পাশ: ফ্লোটিং টেক এলিমেন্ট */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 flex justify-center items-center relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* সেন্ট্রাল গ্লো */}
                <div className="absolute inset-0 bg-[#00F7FF]/20 rounded-full blur-[80px] animate-pulse" />
                
                {/* এনিমেটেড আইকন ক্লাউড (Framer Motion দিয়ে তৈরি) */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="p-10 bg-black rounded-[50px] border-4 border-[#00F7FF] shadow-[0_0_50px_rgba(0,247,255,0.3)]">
                    <span className="text-7xl md:text-8xl font-black text-white italic tracking-tighter">JS</span>
                  </div>
                </motion.div>

                {/* ছোট ভাসমান আইকন */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center text-[#00F7FF] text-2xl">
                        <FiCode />
                    </div>
                </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsHero;