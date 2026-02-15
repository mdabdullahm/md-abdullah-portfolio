"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const nameText = "ABDULLAH";
  
  // নাম অ্যানিমেশন সেটিংস
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    // Floating Navbar with black opacity
    <nav className="fixed top-4 left-6 right-6 md:top-5 md:left-10 md:right-10 z-50 bg-black/70 backdrop-blur-lg border border-white/50 rounded-2xl shadow-2xl">
      <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between relative">
        
        {/* ১. লোগো এবং নাম (বামে) */}
        <div className="flex items-center shrink-0 cursor-pointer">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="/navelogo.png" 
              alt="Logo" 
              width={60} 
              height={35} 
              className="object-contain" 
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-xl font-black tracking-tighter flex items-center text-white"
          >
            {nameText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ২. মেনু আইটেমস (মাঝখানে) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-bold text-gray-300 hover:text-[#00F7FF] transition-all uppercase tracking-[2px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ৩. CTA বাটন (ডানে) */}
        <div className="hidden md:block shrink-0">
          <button className="bg-[#00F7FF] text-black px-6 py-2.5 rounded-xl font-black text-[11px] tracking-widest hover:shadow-[0_0_20px_rgba(0,247,255,0.4)] transition-all active:scale-95 uppercase cursor-pointer">
            Hire Me
          </button>
        </div>

        {/* মোবাইল মেনু বাটন */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* মোবাইল রেসপনসিভ মেনু */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl absolute top-full left-0 w-full mt-2 rounded-2xl flex flex-col items-center py-10 space-y-6 border border-white/10 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 text-lg font-bold uppercase tracking-widest hover:text-[#00F7FF]"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#00F7FF] text-black px-12 py-3 rounded-xl font-black tracking-widest uppercase">
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;