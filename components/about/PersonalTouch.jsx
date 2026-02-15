"use client";
import { motion } from "framer-motion";
import { FiMusic, FiCoffee, FiMapPin, FiCamera } from "react-icons/fi";

const PersonalTouch = () => {
  const hobbies = [
    { title: "Coffee Lover", icon: <FiCoffee />, desc: "ভালো এক কাপ কফি আমার কোডিং এনার্জির উৎস।" },
    { title: "Music Addict", icon: <FiMusic />, desc: "লো-ফাই মিউজিক শুনে কোড করতে আমি সবচেয়ে বেশি ভালোবাসি।" },
    { title: "Traveling", icon: <FiMapPin />, desc: "নতুন নতুন জায়গা ঘোরা আমার সৃজনশীলতাকে বাড়িয়ে দেয়।" },
    { title: "Photography", icon: <FiCamera />, desc: "সুন্দর মুহূর্তগুলোকে লেন্সে বন্দি করা আমার পুরনো শখ।" },
  ];

  return (
    <section className="py-15 bg-white relative overflow-hidden">
      <div className="max-w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* ১. বাম পাশ: ভিজ্যুয়াল কন্টেন্ট (শখের আইকন গ্রিড) */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
             {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00F7FF]/5 rounded-full blur-[100px] -z-10" />
             
             {hobbies.map((hobby, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: index * 0.1 }}
                 whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
                 className="p-8 bg-gray-50 rounded-[40px] text-center border border-gray-100 hover:border-[#00F7FF]/40 hover:bg-white transition-all duration-500 shadow-sm"
               >
                 <div className="text-3xl text-[#00F7FF] mb-4 flex justify-center">
                   {hobby.icon}
                 </div>
                 <h4 className="text-black font-black text-xs uppercase tracking-widest mb-2">
                   {hobby.title}
                 </h4>
                 <p className="text-gray-400 text-[10px] leading-relaxed">
                   {hobby.desc}
                 </p>
               </motion.div>
             ))}
          </div>

          {/* ২. ডান পাশ: টেক্সট কন্টেন্ট */}
          <div className="lg:w-1/2">
            <motion.h4 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
            >
              Beyond the code
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-black leading-tight mb-8 uppercase tracking-tighter"
            >
              The Person <br /> 
              <span className="text-gray-400 italic">Behind the Screen.</span>
            </motion.h2>
            
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                যখন আমি কোডিং করি না, তখন আমাকে সাধারণত কোনো নতুন জায়গা ঘুরতে বা পছন্দের কোনো গান শুনতে দেখা যায়। আমি মনে করি জীবনটা কেবল কাজের জন্য নয়, বরং ছোট ছোট আনন্দ উপভোগ করার জন্য।
              </p>
              <p>
                আমার এই শখগুলোই আমাকে মানসিকভাবে সুস্থ রাখে এবং প্রতিটি নতুন প্রজেক্টে নতুন উদ্যমে কাজ করার প্রেরণা জোগায়। আমি বিশ্বাস করি একজন ভালো ডেভেলপার হওয়ার আগে একজন ভালো মানুষ হওয়া প্রয়োজন।
              </p>
              
              {/* পার্সোনাল ট্রেটস (Traits) */}
              <div className="pt-6 flex flex-wrap gap-3">
                {["Thinker", "Learner", "Problem Solver", "Creative"].map((trait, i) => (
                  <span key={i} className="px-5 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#00F7FF] hover:text-black transition-colors">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalTouch;