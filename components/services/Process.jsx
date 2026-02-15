"use client";
import { motion } from "framer-motion";
import { FiSearch, FiEdit, FiLayout, FiCode, FiSend } from "react-icons/fi";

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      desc: "প্রথমে আমি আপনার প্রজেক্টের লক্ষ্য এবং প্রয়োজনীয়তাগুলো গভীরভাবে বোঝার চেষ্টা করি এবং একটি রোডম্যাপ তৈরি করি।",
      icon: <FiSearch />,
    },
    {
      id: "02",
      title: "Planning & Skeleton",
      desc: "আইডিয়াগুলোকে একটি স্ট্রাকচারে রূপান্তর করি এবং সাইটের ইনফরমেশন আর্কিটেকচার তৈরি করি।",
      icon: <FiEdit />,
    },
    {
      id: "03",
      title: "UI/UX Design",
      desc: "আধুনিক এবং ইউজার-ফ্রেন্ডলি ইন্টারফেস ডিজাইন করি যা আপনার ব্র্যান্ডের পরিচয় ফুটিয়ে তুলবে।",
      icon: <FiLayout />,
    },
    {
      id: "04",
      title: "Development",
      desc: "Next.js এবং আধুনিক টেকনোলজি ব্যবহার করে ক্লিন এবং স্কেলেবল কোড লিখে ওয়েবসাইট বিল্ড করি।",
      icon: <FiCode />,
    },
    {
      id: "05",
      title: "Testing & Launch",
      desc: "বাগ চেক করা, পারফরম্যান্স অপ্টিমাইজ করা এবং সবশেষে ওয়েবসাইটটি সফলভাবে লাইভ করা।",
      icon: <FiSend />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
          >
            How I Work
          </motion.h4>
          <h2 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
            The <span className="text-gray-400 italic font-medium">Process.</span>
          </h2>
          <div className="w-16 h-1 bg-[#00F7FF] mx-auto mt-6 rounded-full" />
        </div>

        {/* প্রসেস কার্ডস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[40px] border border-gray-100 hover:border-[#00F7FF]/20 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ${
                index === 3 || index === 4 ? "lg:col-span-1" : ""
              }`}
            >
              {/* ব্যাকগ্রাউন্ডে বড় নাম্বার */}
              <span className="absolute -top-4 -right-4 text-9xl font-black text-gray-50 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                {step.id}
              </span>

              {/* আইকন */}
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl text-black group-hover:bg-[#00F7FF] group-hover:text-black transition-all duration-500 mb-8 shadow-inner relative z-10">
                {step.icon}
              </div>

              {/* টেক্সট কন্টেন্ট */}
              <div className="relative z-10">
                <span className="text-[#00F7FF] text-[10px] font-black uppercase tracking-widest mb-3 block">
                  Step {step.id}
                </span>
                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* বটম ডেকোরেশন */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#00F7FF] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}

          {/* শেষ একটি বিশেষ কার্ড (Let's Start) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-[40px] bg-black flex flex-col items-center justify-center text-center group cursor-pointer lg:col-span-1"
          >
            <h3 className="text-white font-black text-xl uppercase tracking-tighter mb-4">
              Ready to <br /> Start?
            </h3>
            <div className="w-12 h-12 bg-[#00F7FF] rounded-full flex items-center justify-center text-black font-black text-xl group-hover:scale-110 transition-transform">
              →
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Process;