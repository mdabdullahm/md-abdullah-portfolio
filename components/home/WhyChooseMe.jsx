"use client";
import { motion } from "framer-motion";
import { FiTarget, FiZap, FiShield, FiSmile, FiLayout, FiActivity } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; 

const WhyChooseMe = () => {
    const reasons = [
        {
            title: "Fast Delivery",
            desc: "I understand the value of time. I ensure project delivery in the fastest time while maintaining quality.",
            icon: <FiZap />,
            color: "text-yellow-400"
        },
        {
            title: "Clean & Modern Code",
            desc: "I write very clean and standard code, so that anyone can easily maintain it in the future.",
            icon: <FiShield />,
            color: "text-green-400"
        },
        {
            title: "SEO Optimized",
            desc: "I follow an SEO-friendly structure to ensure your website stays ahead in Google rankings.",
            icon: <FiTarget />,
            color: "text-[#00F7FF]"
        },
        {
            title: "User-Centric Design",
            desc: "Focusing on user experience, I create interfaces that are easy for visitors to understand.",
            icon: <FiLayout />,
            color: "text-purple-400"
        },
        {
            title: "24/7 Support",
            desc: "I am ready to provide you with technical support for any needs even after the project is completed.",
            icon: <FiSmile />,
            color: "text-pink-400"
        },
        {
            title: "High Performance",
            desc: "I ensure performance optimization so that your site loads at lightning speed.",
            icon: <FiActivity />,
            color: "text-orange-400"
        }
    ];

    return (
        <section id="why-choose-me" className="py-24 bg-white relative overflow-hidden">
            {/* ডেকোরেশন */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#00F7FF]/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">

                {/* হেডার পার্ট */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
                    <div className="max-w-2xl">
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[#00F7FF] font-bold tracking-[5px] uppercase text-[10px] mb-4"
                        >
                            My Value
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-black leading-tight"
                        >
                            Why Choose <span className="text-gray-400 italic font-medium">Me?</span>
                        </motion.h2>
                    </div>
                    <div className="w-24 h-1 bg-[#00F7FF] rounded-full hidden md:block" />
                </div>

                {/* কার্ড গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group p-10 bg-white border border-gray-50 rounded-[40px] shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-[#00F7FF]/20 transition-all duration-500"
                        >
                            <div className={`text-4xl mb-6 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* নিচে একটি বড় CTA টেক্সট */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-12 bg-black rounded-[40px] text-center relative overflow-hidden"
                >
                    {/* গ্লো ইফেক্ট */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F7FF]/20 blur-[60px]" />

                    <h3 className="text-white text-2xl md:text-4xl font-black mb-6 uppercase tracking-tighter">
                        Ready to start your <span className="text-[#00F7FF]">Dream Project?</span>
                    </h3>
                    <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm md:text-base">
                        I am ready to turn your ideas into reality. Contact me today and ensure the best digital solutions for your business.
                    </p>
                    {/* WhatsApp Link Button */}
                    <motion.a
                        // এখানে তোমার WhatsApp নাম্বার বসাও (যেমন: 88017XXXXXXXX)
                        href="https://wa.me/8801XXXXXXXXX?text=Hello Abdullah, I am interested in your services."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-green-500 text-black px-12 py-4 rounded-2xl font-black text-[11px] tracking-widest uppercase hover:shadow-[0_10px_40px_rgba(0,247,255,0.4)] transition-all cursor-pointer"
                    >
                        <FaWhatsapp className="text-xl" />
                        Let's Talk
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseMe;