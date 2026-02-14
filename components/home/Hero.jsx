"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
// JSON ফাইলটি ইমপোর্ট করো
import animationData from "@/public/titockheroanimation.json";

// Lottie কে dynamic import করা হচ্ছে যাতে Next.js এ কোনো সমস্যা না হয়
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pb-12 px-6 overflow-hidden bg-white">
      
      {/* ১. ব্যাকগ্রাউন্ড লটি অ্যানিমেশন (JSON) - একদম পেছনে */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 flex items-center justify-center">
        <div className="w-full max-w-[1200px]">
          <Lottie 
            animationData={animationData} 
            loop={true} 
            className="w-full h-full"
          />
        </div>
      </div>

      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-[#00F7FF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* ১. বাম পাশ: টেক্সট কন্টেন্ট */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block text-[#00F7FF] font-bold tracking-[5px] uppercase mb-5 text-sm"
          >
            Available for Hire
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.1] mb-6">
            Hi, I'm <span className="text-[#00F7FF]">Abdullah</span> <br />
            <span className="text-gray-400 italic">Full-Stack Dev</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build modern and high-performance web applications. I'm ready to turn your ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00F7FF] text-black px-10 py-4 rounded-2xl font-black text-sm tracking-widest uppercase shadow-[0_10px_30px_rgba(0,247,255,0.3)] hover:shadow-[0_15px_40px_rgba(0,247,255,0.5)] transition-all cursor-pointer"
            >
              My Projects
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-100 text-black px-10 py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-gray-50 transition-all cursor-pointer"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* ২. ডান পাশ: গোল ইমেজ (Rounded Full) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            
            {/* ইমেজের পেছনের এনিমেটেড রিং */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-[#00F7FF]/40 rounded-full"
            />

            {/* মেইন ইমেজ কন্টেইনার */}
            <div className="absolute inset-4 rounded-full border-[8px] border-white shadow-2xl overflow-hidden bg-gray-50">
              <Image 
                src="/heroimg.jpg" 
                alt="Abdullah Hero" 
                fill
                className="object-cover rounded-full" // ইমেজ গোল করার জন্য
                priority
              />
            </div>

            {/* গ্লোয়িং ইফেক্ট */}
            <div className="absolute inset-4 rounded-full border-4 border-[#00F7FF]/20 pointer-events-none"></div>

            {/* ছোট ভাসমান ব্যাজ */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-10 left-0 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;