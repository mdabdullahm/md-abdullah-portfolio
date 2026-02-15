"use client";
import { motion } from "framer-motion";
import { FiTarget, FiZap, FiMessageCircle, FiTrendingUp } from "react-icons/fi";

const WhyWorkWithMe = () => {
  const values = [
    {
      title: "Results-Driven Approach",
      desc: "আমি শুধু সুন্দর ডিজাইন করি না, বরং এমন ওয়েবসাইট তৈরি করি যা আপনার ব্যবসায়িক লক্ষ্য অর্জনে সাহায্য করে।",
      icon: <FiTarget />,
      bg: "bg-blue-50"
    },
    {
      title: "Swift Communication",
      desc: "প্রোজেক্টের প্রতিটি ধাপে আমি আপনাকে আপডেট রাখব। ক্লিয়ার এবং দ্রুত কমিউনিকেশন আমার কাজের অন্যতম বৈশিষ্ট্য।",
      icon: <FiMessageCircle />,
      bg: "bg-green-50"
    },
    {
      title: "Performance & SEO",
      desc: "আপনার সাইট হবে বিদ্যুতের মতো দ্রুত এবং সার্চ ইঞ্জিনে অপ্টিমাইজড, যা আপনার অর্গানিক ট্রাফিক বাড়াতে সাহায্য করবে।",
      icon: <FiZap />,
      bg: "bg-yellow-50"
    },
    {
      title: "Scalable Solutions",
      desc: "আমি এমনভাবে কোড লিখি যাতে আপনার ব্যবসার বৃদ্ধির সাথে সাথে ওয়েবসাইটটিও খুব সহজে বড় করা যায়।",
      icon: <FiTrendingUp />,
      bg: "bg-purple-50"
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#00F7FF]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* ১. বাম পাশ: টেক্সট কন্টেন্ট */}
          <div className="lg:col-span-5">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
            >
              The Partnership
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-black leading-tight mb-8 uppercase tracking-tighter"
            >
              Why Work <span className="text-gray-400 italic font-medium">With Me?</span>
            </motion.h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              একজন ডেভেলপার হিসেবে আমার মূল লক্ষ্য হলো আপনার আইডিয়াকে এমন একটি ডিজিটাল রূপ দেওয়া যা বাজারে প্রতিযোগিতা করতে সক্ষম। আমি আপনার প্রোজেক্টকে নিজের মনে করে সর্বোচ্চ গুরুত্ব দিই।
            </p>
            
            {/* ছোট একটি চেক লিস্ট */}
            <ul className="space-y-4">
              {["Custom Tailored Solutions", "Clean & Professional Code", "Ongoing Technical Support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-black font-bold text-sm uppercase tracking-wide">
                  <span className="w-5 h-5 bg-[#00F7FF] rounded-full flex items-center justify-center text-[10px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ২. ডান পাশ: কার্ডস গ্রিড */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-2xl hover:border-[#00F7FF]/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl text-black group-hover:bg-[#00F7FF] transition-all duration-500 mb-6 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-black mb-3 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;