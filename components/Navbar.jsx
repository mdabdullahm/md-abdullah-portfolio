"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Link ইমপোর্ট করা হয়েছে
import { usePathname } from "next/navigation"; // pathname পাওয়ার জন্য

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // বর্তমান পেজের পাথ (যেমন: /about)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // const nameText = "ABDULLAH";

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
    <nav className="fixed top-4 left-6 right-6 md:top-5 md:left-10 md:right-10 z-50 bg-black/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl">
      <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between relative">

        {/* ১. লোগো এবং নাম (বামে) */}
        <Link
          href="/"
          className="flex items-center shrink-0 cursor-pointer bg-white h-full pl-6 pr-12 -ml-6 rounded-l-2xl [clip-path:polygon(0_0,_100%_0,_75%_100%,_0_100%)]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/navelogooo.png"
              alt="Logo"
              width={150}
              height={35}
              className="object-contain"
            />
          </motion.div>
        </Link>

        {/* ২. মেনু আইটেমস (ডেস্কটপ) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((link) => {
            // চেক করা হচ্ছে এই লিংকটি একটিভ কি না
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12px] font-bold uppercase tracking-[2px] transition-all duration-300 relative group ${isActive ? "text-[#00F7FF]" : "text-gray-300 hover:text-[#00F7FF]"
                  }`}
              >
                {link.name}
                {/* Active Underline (Optional but looks Pro) */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00F7FF]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ৩. CTA বাটন (ডানে) */}
        <div className="hidden md:block shrink-0">
          <Link href="/contact">
            <button className="bg-[#00F7FF] text-black px-6 py-2.5 rounded-xl font-black text-[11px] tracking-widest hover:shadow-[0_0_20px_rgba(0,247,255,0.4)] transition-all active:scale-95 uppercase cursor-pointer">
              Hire Me
            </button>
          </Link>
        </div>

        {/* মোবাইল মেনু বাটন */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ৪. মোবাইল রেসপনসিভ মেনু */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl absolute top-full left-0 w-full mt-2 rounded-2xl flex flex-col items-center py-10 space-y-6 border border-white/10 shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold uppercase tracking-widest transition-all ${isActive ? "text-[#00F7FF]" : "text-gray-300 hover:text-[#00F7FF]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="bg-[#00F7FF] text-black px-12 py-3 rounded-xl font-black tracking-widest uppercase">
                Hire Me
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;