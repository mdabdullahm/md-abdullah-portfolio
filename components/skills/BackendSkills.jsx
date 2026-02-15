"use client";
import { motion } from "framer-motion";
import { 
  SiNodedotjs, SiExpress, SiMongodb, 
  SiFirebase, SiPostgresql, SiPrisma, SiAuth0 
} from "react-icons/si";

const BackendSkills = () => {
  const backendSkills = [
    {
      name: "Node.js",
      level: 85,
      icon: <SiNodedotjs className="text-[#339933]" />,
      desc: "Event-driven architecture and asynchronous programming.",
    },
    {
      name: "MongoDB",
      level: 80,
      icon: <SiMongodb className="text-[#47A248]" />,
      desc: "NoSQL Database design, aggregation, and scalability.",
    },
    {
      name: "Firebase",
      level: 90,
      icon: <SiFirebase className="text-[#FFCA28]" />,
      desc: "Real-time DB, Authentication, and Cloud Functions.",
    },
    {
      name: "Express.js",
      level: 85,
      icon: <SiExpress className="text-black" />,
      desc: "RESTful API development and Middleware integration.",
    },
    {
      name: "Prisma / SQL",
      level: 75,
      icon: <SiPrisma className="text-[#2D3748]" />,
      desc: "Relational data modeling and Type-safe queries.",
    },
    {
      name: "Auth & Security",
      level: 88,
      icon: <SiAuth0 className="text-[#EB5424]" />,
      desc: "JWT, OAuth, and Secure Data Encryption.",
    },
  ];

  return (
    <section className="py-15 bg-gray-50/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
            >
              The Architecture
            </motion.h4>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
              Backend <span className="text-gray-400 italic font-medium">Power.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed">
            I build scalable and secure backend architectures that keep your data safe and processing fast.
          </p>
        </div>

        {/* ব্যাকএন্ড স্কিল গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {backendSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-white border border-gray-100 rounded-[40px] hover:border-[#00F7FF]/20 hover:shadow-2xl transition-all duration-500"
            >
              {/* আইকন এবং পার্সেন্টেজ */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-[#00F7FF] group-hover:text-black transition-all duration-500">
                  {skill.icon}
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-black">{skill.level}%</span>
                  <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Efficiency</div>
                </div>
              </div>

              {/* টেক্সট কন্টেন্ট */}
              <h3 className="text-xl font-black text-black mb-3 uppercase tracking-tight">
                {skill.name}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-8">
                {skill.desc}
              </p>

              {/* প্রগ্রেস বার */}
              <div className="h-[3px] w-full bg-gray-50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-full bg-[#00F7FF] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BackendSkills;