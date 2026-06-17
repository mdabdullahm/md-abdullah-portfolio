"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/mdabdullahm" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourprofile" },
    { icon: <FaWhatsapp />, link: "https://wa.me/8801785993913" },
    { icon: <FaFacebook />, link: "https://facebook.com/yourprofile" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#00F7FF] pt-20 pb-10 overflow-hidden">
      <div className="max-w-full mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* ১. লোগো এবং বায়ো পার্ট */}
          <div className="lg:col-span-5 text-center md:text-left">
            {/* সাদা ব্যাকগ্রাউন্ড এবং বর্ডারওয়ালা লোগো কন্টেইনার */}
            <Link href="/" className="inline-flex items-center mb-8 bg-white px-6 py-3 rounded-full border-2 border-black/10 shadow-lg group">
              <Image 
                src="/navelogoo.png" 
                alt="Abdullah Logo" 
                width={50} 
                height={50} 
                className="object-contain"
              />
              <div className="text-2xl font-black tracking-tighter uppercase text-black">
                ABDULLAH
              </div>
            </Link>
            
            <p className="text-black/70 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-bold">
              I am a full-stack developer. I create scalable and user-friendly digital solutions for your business using modern web technologies.
            </p>
          </div>

          {/* ২. কুইক লিংকস */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start pt-4">
            <h4 className="text-black font-black text-xs uppercase tracking-[3px] mb-8">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {navLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  className="text-black/60 text-[11px] font-black uppercase tracking-widest hover:text-black transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* ৩. সোশ্যাল কানেক্ট */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-end pt-4">
            <h4 className="text-black font-black text-xs uppercase tracking-[3px] mb-8">Follow Me</h4>
            <div className="flex gap-4">
              {socials.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-xl text-[#00F7FF] transition-all"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* কপিরাইট এবং ব্যাক টু টপ */}
        <div className="pt-10 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-black/50 text-[10px] font-black uppercase tracking-[2px]">
            © {new Date().getFullYear()} Md Abdullah. Built with <span className="text-black">Next.js & Tailwind</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black cursor-pointer"
          >
            Back to top
            <div className="w-10 h-10 rounded-full border-2 border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-[#00F7FF] transition-all">
              <FaArrowUp />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;