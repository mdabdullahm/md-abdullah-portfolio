"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiCheckCircle, FiCoffee } from "react-icons/fi";

const About = () => {
  const stats = [
    { icon: <FiAward />, label: "Experience", value: "2+ Years" },
    { icon: <FiCheckCircle />, label: "Completed", value: "50+ Projects" },
    { icon: <FiCoffee />, label: "Availability", value: "Full-Time" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* ১. বাম পাশ: ইমেজ পার্ট */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* ছবির পেছনের ডেকোরেটিভ বক্স */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#00F7FF] rounded-[40px] z-0" />
              
              {/* মেইন ইমেজ */}
              <div className="relative z-10 w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
                <Image 
                  src="/heroimg.jpg" // তুমি এখানে তোমার অন্য কোনো ছবিও দিতে পারো
                  alt="About Abdullah" 
                  fill
                  className="object-cover"
                />
              </div>

              {/* ছোট ভাসমান এলিমেন্ট */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-10 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-gray-100 hidden md:block"
              >
                <p className="text-[#00F7FF] font-black text-3xl">99%</p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Client Satisfaction</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ২. ডান পাশ: টেক্সট কন্টেন্ট */}
          <div className="lg:w-1/2">
            <motion.h4 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#00F7FF] font-bold tracking-[5px] uppercase text-[10px] mb-4"
            >
              Get to know me
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-black leading-tight mb-8"
            >
              Who is <span className="text-gray-400 italic">Abdullah?</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed mb-10"
            >
              I am a passionate full-stack web developer. I love solving complex problems with simple and beautiful code. For the past 2 years, I have been building various digital solutions using modern technologies such as <strong>Next.js, React, and Node.js</strong>.
            </motion.p>

            {/* ছোট স্ট্যাটাস কার্ডস */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {stats.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#00F7FF]/30 transition-all"
                >
                  <div className="text-[#00F7FF] text-2xl mb-2">{item.icon}</div>
                  <h5 className="text-black font-black text-sm">{item.value}</h5>
                  <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-10 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all cursor-pointer"
            >
              Download CV
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;