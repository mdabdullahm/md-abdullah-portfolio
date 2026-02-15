"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FiArrowDown, FiLayers, FiCheckCircle } from "react-icons/fi";

// JSON Animation ইমপোর্ট
import animationData from "../../public/heroanimation.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ProjectsHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white">
      
      {/* ১. ব্যাকগ্রাউন্ড লটি অ্যানিমেশন */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="w-full max-w-[1300px]">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      {/* ২. ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00F7FF]/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* ছোট ট্যাগ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-100 bg-gray-50 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00F7FF] animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-[3px] text-gray-500">Portfolio Showcase</span>
        </motion.div>

        {/* মেইন টাইটেল */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-9xl font-black text-black leading-[0.9] uppercase tracking-tighter mb-10">
            Digital <br />
            <span className="text-gray-400 italic font-medium">Masterpieces</span>
            <span className="text-[#00F7FF]">.</span>
          </h1>
        </motion.div>

        {/* সাব-টাইটেল বা ডেসক্রিপশন */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
        >
          I don't write simple code, but rather create digital experiences that help you achieve your business goals and capture the hearts of users.
        </motion.p>

        {/* প্রোজেক্ট স্ট্যাটাস ব্যাজ (Badge Grid) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <FiLayers className="text-[#00F7FF] text-xl" />
            <span className="text-[11px] font-black uppercase tracking-widest text-black">50+ Projects</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <FiCheckCircle className="text-[#00F7FF] text-xl" />
            <span className="text-[11px] font-black uppercase tracking-widest text-black">100% Satisfaction</span>
          </div>
        </motion.div>

        {/* স্ক্রল ডাউন ইন্ডিকেটর */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
        >
          <div className="w-10 h-16 rounded-full border-2 border-gray-100 flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-3 bg-[#00F7FF] rounded-full" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[4px] text-gray-400">Explore Work</span>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsHero;