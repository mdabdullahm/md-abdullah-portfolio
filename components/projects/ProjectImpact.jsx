"use client";
import { motion } from "framer-motion";
import { FiZap, FiTrendingUp, FiUsers, FiCpu } from "react-icons/fi";

const ProjectImpact = () => {
  const impacts = [
    {
      title: "Performance Boost",
      metric: "95%",
      desc: "The average loading speed has been increased, which has helped increase user retention.",
      icon: <FiZap />,
      color: "text-yellow-400"
    },
    {
      title: "User Engagement",
      metric: "2.5x",
      desc: "User engagement has increased several times over through interactive UI design.",
      icon: <FiTrendingUp />,
      color: "text-green-400"
    },
    {
      title: "Scalability Achieved",
      metric: "100k+",
      desc: "The architecture has been designed in such a way that it can easily handle more than 100,000 visitors per month.",
      icon: <FiCpu />,
      color: "text-[#00F7FF]"
    },
    {
      title: "Client Retention",
      metric: "98%",
      desc: "Client satisfaction is ensured through impeccable service and after-sales support.",
      icon: <FiUsers />,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-15 bg-black rounded-[50px] mx-6 mb-24 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F7FF]/10 blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
          >
            The Outcome
          </motion.h4>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
            Real Impact. <br /> 
            <span className="text-gray-500 italic">Proven Results.</span>
          </h2>
        </div>

        {/* ইমপ্যাক্ট কার্ডস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all duration-500 group"
            >
              <div className={`text-4xl mb-6 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                {item.metric}
              </h3>
              <p className="text-[#00F7FF] text-[10px] font-black uppercase tracking-widest mb-6">
                {item.title}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* বটম টেক্সট */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto italic">
            "My goal is not just to deliver code, but to create a digital product that ensures real improvement in your business."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectImpact;