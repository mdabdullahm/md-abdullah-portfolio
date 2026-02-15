"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FiLayers, FiUsers, FiAward, FiClock } from "react-icons/fi";

// কাউন্টার এনিমেশন কম্পোনেন্ট
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = 2000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const statsData = [
    {
      label: "Years of Experience",
      value: "02",
      suffix: "+",
      icon: <FiClock />,
    },
    {
      label: "Projects Completed",
      value: "50",
      suffix: "+",
      icon: <FiLayers />,
    },
    {
      label: "Happy Clients",
      value: "30",
      suffix: "+",
      icon: <FiUsers />,
    },
    {
      label: "Technologies Mastered",
      value: "15",
      suffix: "+",
      icon: <FiAward />,
    },
  ];

  return (
    <section className="py-15 bg-white">
      <div className="max-w-full mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 md:p-10 bg-white border border-gray-100 rounded-[40px] text-center hover:border-[#00F7FF]/30 hover:shadow-2xl hover:shadow-[#00F7FF]/5 transition-all duration-500"
            >
              {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00F7FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[40px]" />

              {/* আইকন */}
              <div className="text-3xl text-[#00F7FF] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>

              {/* সংখ্যা (Counter) */}
              <h2 className="text-4xl md:text-5xl font-black text-black mb-2 flex justify-center items-center">
                <Counter value={stat.value} />
                <span className="text-[#00F7FF] ml-1">{stat.suffix}</span>
              </h2>

              {/* লেবেল */}
              <p className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-[3px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;