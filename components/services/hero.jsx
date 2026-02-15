"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FiCheck, FiActivity, FiZap, FiTarget } from "react-icons/fi";

// তোমার দেওয়া সেই services.json অ্যানিমেশনটি ব্যবহার করছি
import animationData from "../../public/services.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ServicesHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white">
      
      {/* ১. ব্যাকগ্রাউন্ড লটি অ্যানিমেশন (JSON) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="w-full max-w-[1200px]">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      {/* ২. ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#00F7FF]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* বাম পাশ: টেক্সট কন্টেন্ট */}
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
              Expert Solutions
            </motion.span>
            
            <h1 className="text-5xl md:text-8xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
              Services Built <br /> 
              <span className="text-gray-400 italic font-medium">For Your</span> <br />
              Success<span className="text-[#00F7FF]">.</span>
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              আমি শুধু ওয়েবসাইট বানাই না, বরং এমন ডিজিটাল ইকোসিস্টেম তৈরি করি যা আপনার ব্যবসাকে এগিয়ে নিয়ে যায়। আমার প্রতিটি সার্ভিস আপনার ইউনিক ডিমান্ড অনুযায়ী কাস্টমাইজড।
            </p>

            {/* ৩টি কি হাইলাইটস */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12">
               {[
                 { label: "Premium Quality", icon: <FiZap /> },
                 { label: "Result Oriented", icon: <FiTarget /> },
                 { label: "High Performance", icon: <FiActivity /> }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 group">
                    <span className="text-[#00F7FF] text-lg group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black">{item.label}</span>
                 </div>
               ))}
            </div>

            {/* বাটন */}
            <div className="flex justify-center lg:justify-start">
               <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-10 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase hover:bg-[#00F7FF] hover:text-black transition-all duration-300 shadow-xl"
               >
                 Book a Free Consultation
               </motion.button>
            </div>
          </motion.div>

          {/* ডান পাশ: ভিজ্যুয়াল এলিমেন্ট */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 relative flex justify-center items-center"
          >
             <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* গ্লোয়িং বক্স */}
                <div className="absolute inset-0 bg-[#00F7FF]/20 rounded-[60px] blur-[80px] animate-pulse" />
                
                {/* মেইন সার্ভিস আইকন কার্ড */}
                <div className="relative z-10 p-12 bg-black rounded-[60px] border-4 border-[#00F7FF] shadow-2xl flex flex-col items-center justify-center text-center">
                    <FiZap className="text-6xl text-[#00F7FF] mb-6" />
                    <h3 className="text-white font-black text-xl uppercase tracking-tighter">100% Digital <br/> Excellence</h3>
                </div>

                {/* ছোট ভাসমান চেক ব্যাজ */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-5 bg-white p-5 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-3"
                >
                    <div className="w-8 h-8 bg-[#00F7FF] rounded-full flex items-center justify-center text-black">
                      <FiCheck />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-black">Verified <br/> Expert</span>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;