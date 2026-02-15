"use client";
import { motion } from "framer-motion";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import dynamic from "next/dynamic";

// যদি ব্যাকগ্রাউন্ডে অ্যানিমেশন দিতে চাও (public/services.json ব্যবহার করছি এখানে)
import animationData from "@/public/services.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CTA = () => {
  return (
    <section className="py-15 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-black rounded-[50px] p-10 md:p-20 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.2)]">
          
          {/* ১. ব্যাকগ্রাউন্ড লটি অ্যানিমেশন (JSON) */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
            <div className="w-full scale-150 md:scale-100">
              <Lottie 
                animationData={animationData} 
                loop={true} 
              />
            </div>
          </div>

          {/* ২. গ্লো ইফেক্টস */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#00F7FF]/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />

          {/* ৩. মেইন কন্টেন্ট */}
          <div className="relative z-10 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#00F7FF] font-bold tracking-[6px] uppercase text-xs mb-6">
                Got a project in mind?
              </h4>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
                Let’s create <br /> 
                <span className="text-gray-500 italic">Something Iconic.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
                I am ready to take your business to the top on the digital platform. Start discussing the project today.
              </p>
            </motion.div>

            {/* বাটন গ্রুপ */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/8801785993913" // এখানে তোমার নাম্বার দাও
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-[#00F7FF] text-black px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase transition-all shadow-[0_15px_40px_rgba(0,247,255,0.3)]"
              >
                <FaWhatsapp className="text-xl" />
                Start Chatting
                <FiArrowUpRight className="text-lg group-hover:rotate-45 transition-transform" />
              </motion.a>

              {/* Email Button */}
              <motion.a
                href="mdabdullahmorol38@gmail.com" // এখানে তোমার ইমেইল দাও
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all"
              >
                <FiMail className="text-xl" />
                Send Email
              </motion.a>
            </div>

            {/* নিচের ছোট টেক্সট */}
            <div className="mt-12 flex items-center gap-4 text-gray-500">
              <span className="w-10 h-[1px] bg-gray-800"></span>
              <p className="text-[10px] font-bold uppercase tracking-[3px]">Typically responds within 2 hours</p>
              <span className="w-10 h-[1px] bg-gray-800"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;