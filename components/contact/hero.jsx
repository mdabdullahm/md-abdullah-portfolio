"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

// লটি অ্যানিমেশন (আগের heroanimation.json ব্যবহার করছি)
import animationData from "../../public/heroanimation.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ContactHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white">
      
      {/* ব্যাকগ্রাউন্ড লটি অ্যানিমেশন */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="w-full max-w-[1200px]">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* বাম পাশ: হেডার টেক্সট */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-6"
            >
              Contact Me
            </motion.h4>
            <h1 className="text-5xl md:text-8xl font-black text-black leading-[0.9] mb-8 uppercase tracking-tighter">
              Let’s build <br /> 
              <span className="text-gray-400 italic">Something</span> <br />
              Great<span className="text-[#00F7FF]">.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              আপনার কোনো আইডিয়া আছে বা নতুন কোনো প্রোজেক্ট নিয়ে আলোচনা করতে চান? আমি মাত্র এক ক্লিক দূরে আছি!
            </p>

            {/* সোশ্যাল আইকনস */}
            <div className="flex justify-center lg:justify-start gap-6">
              {[
                { icon: <FaEnvelope />, link: "mailto:yourmail@gmail.com" },
                { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourprofile" },
                { icon: <FaGithub />, link: "https://github.com/yourgithub" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{ y: -5, color: "#00F7FF" }}
                  className="text-2xl text-gray-300 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ডান পাশ: মেইন WhatsApp কার্ড */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative p-10 md:p-16 bg-black rounded-[60px] border-4 border-[#00F7FF] shadow-2xl overflow-hidden group">
               {/* গ্লো ইফেক্ট */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F7FF]/10 blur-[100px]" />
               
               <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-[#00F7FF] rounded-full flex items-center justify-center text-black text-5xl mx-auto mb-8 shadow-[0_0_30px_rgba(0,247,255,0.4)]">
                    <FaWhatsapp />
                  </div>
                  <h3 className="text-white text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
                    Quick Connect
                  </h3>
                  <p className="text-gray-400 mb-10 text-sm md:text-base">
                    সরাসরি আমার সাথে হোয়াটসঅ্যাপে কথা বলতে নিচের বাটনে ক্লিক করুন। আমি সাধারণত ১-২ ঘণ্টার মধ্যে রিপ্লাই দেই।
                  </p>
                  
                  <motion.a
                    href="https://wa.me/8801785993913?text=Hello Abdullah, I would like to discuss a project with you."
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-[#00F7FF] text-black px-12 py-5 rounded-2xl font-black text-xs tracking-widest uppercase shadow-[0_15px_40px_rgba(0,247,255,0.3)]"
                  >
                    Start WhatsApp Chat
                  </motion.a>

                  <p className="mt-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Available: 10:00 AM - 10:00 PM (GMT+6)
                  </p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;