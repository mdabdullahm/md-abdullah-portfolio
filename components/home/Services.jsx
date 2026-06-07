"use client";
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiSmartphone, FiGlobe, FiZap, FiCpu } from "react-icons/fi";
import dynamic from "next/dynamic";
// JSON ফাইলটি ইমপোর্ট করো
import animationData from "@/public/services.json";

// Lottie কে dynamic import করা হচ্ছে যাতে Next.js এ কোনো সমস্যা না হয়
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Services = () => {
  const serviceList = [
    {
      title: "Web Development",
      desc: "We build high-performance and SEO-friendly websites using Next.js and React.",
      icon: <FiCode />,
    },
    {
      title: "UI/UX Design",
      desc: "We design modern and user-friendly interfaces that will showcase your brand.",
      icon: <FiLayers />,
    },
    {
      title: "App Development",
      desc: "We create responsive and progressive web applications that work on any device.",
      icon: <FiSmartphone />,
    },
    {
      title: "Backend & API",
      desc: "We provide secure and scalable backend solutions using Node.js and MongoDB.",
      icon: <FiCpu />,
    },
    {
      title: "Optimization",
      desc: "We ensure lightning-fast website loading speeds and performance optimization.",
      icon: <FiZap />,
    },
    {
      title: "E-Commerce Site",
      desc: "We develop complete online shops or e-commerce websites, including payment gateways.",
      icon: <FiGlobe />,
    },
  ];

  return (
    <section id="services" className="py-15 bg-white relative overflow-hidden">
      
      {/* ১. ব্যাকগ্রাউন্ড লটি অ্যানিমেশন (JSON) - একদম পেছনে */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="w-full max-w-full">
          <Lottie 
            animationData={animationData} 
            loop={true} 
            className="w-full h-full"
          />
        </div>
      </div>

      {/* ব্যাকগ্রাউন্ডে হালকা গ্লো */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00F7FF]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-full mx-auto px-6 relative z-10">
        {/* হেডার পার্ট */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#00F7FF] font-bold tracking-[5px] uppercase text-[10px] mb-3"
          >
            What I Offer
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-black"
          >
            My <span className="text-gray-400 italic">Services.</span>
          </motion.h2>
          <div className="w-16 h-1 bg-[#00F7FF] mx-auto mt-6 rounded-full" />
        </div>

        {/* সার্ভিস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }} // হোভার করলে হালকা উপরে উঠবে
              className="group p-10 bg-white border border-gray-100 rounded-[35px] hover:border-[#00F7FF]/40 hover:shadow-[0_20px_50px_rgba(0,247,255,0.08)] transition-all duration-500 relative overflow-hidden"
            >
              {/* আইকন কন্টেইনার */}
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl text-black group-hover:bg-[#00F7FF] group-hover:text-black transition-all duration-500 mb-8">
                {service.icon}
              </div>

              {/* টেক্সট */}
              <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* নিচের ছোট ডেকোরেশন লাইন */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#00F7FF] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;