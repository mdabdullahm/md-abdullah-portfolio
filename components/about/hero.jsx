"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FiDownload, FiUser } from "react-icons/fi";

// JSON Animation ইমপোর্ট
import animationData from "@/public/heroanimation.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AboutHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white">
      
      {/* ব্যাকগ্রাউন্ড লটি অ্যানিমেশন */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15 flex items-center justify-center">
        <div className="w-full max-w-[1100px]">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ১. বাম পাশ: রাউন্ডেড ইমেজ */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-64 h-64 md:w-[480px] md:h-[480px]">
              {/* এনিমেটেড বর্ডার রিং */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-15px] border-2 border-dashed border-[#00F7FF]/40 rounded-full"
              />
              
              {/* মেইন ইমেজ (Rounded Full) */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.1)] bg-gray-50">
                <Image 
                  src="/heroimg.jpg" 
                  alt="Md Abdullah" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              {/* স্ট্যাটাস ব্যাজ */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 -right-10 bg-black text-white p-5 rounded-3xl shadow-2xl border border-white/10 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00F7FF] rounded-full flex items-center justify-center text-black font-bold">
                    <FiUser size={20}/>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Role</p>
                    <p className="text-sm font-bold">Full Stack Dev</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ২. ডান পাশ: টেক্সট কন্টেন্ট */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-[#00F7FF] font-black tracking-[6px] uppercase text-[10px] mb-5 px-4 py-1.5 border border-[#00F7FF]/20 rounded-full bg-[#00F7FF]/5"
            >
              My Story
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.1] mb-8 uppercase tracking-tighter">
              A Developer <br /> 
              <span className="text-gray-400 italic">With a Passion</span> <br />
              for <span className="text-[#00F7FF]">Innovation.</span>
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              I am Md. Abdullah. For the past 2 years, I have been trying to make people's lives easier by creating digital solutions. Coding is not just a job for me, it is an art.
            </p>

            {/* বাটন গ্রুপ */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
  {/* Download CV - Solid Active Color */}
  <motion.a
    href="/resume.pdf" // এখানে তোমার CV ফাইলের পাথ দাও
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center gap-3 bg-[#00F7FF] text-black px-10 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-[0_10px_30px_rgba(0,247,255,0.3)] hover:shadow-[0_15px_40px_rgba(0,247,255,0.5)] transition-all cursor-pointer"
  >
    <FiDownload className="text-black text-lg" />
    Download CV
  </motion.a>

  {/* Let's Talk - Border Active Style */}
  <motion.a
    href="https://wa.me/8801785993913"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center gap-3 border-2 border-[#00F7FF] text-black px-10 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase hover:bg-[#00F7FF] hover:text-black transition-all cursor-pointer shadow-sm"
  >
    Let's Talk
  </motion.a>
</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;