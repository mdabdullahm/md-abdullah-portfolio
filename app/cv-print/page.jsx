"use client";
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiGithub, FiLinkedin } from "react-icons/fi";

const CVPrint = () => {
  return (
    <div className="bg-white min-h-screen p-5 sm:p-10 text-black max-w-[800px] mx-auto border shadow-sm print:shadow-none print:border-none print:p-0 my-10 md:my-20 lg:my-36">
      
      {/* Header */}
      <header className="border-b-4 border-[#00F7FF] pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Md Abdullah</h1>
          <p className="text-[#00F7FF] font-bold uppercase tracking-widest text-sm mt-1">Full Stack Web Developer</p>
          <p className="text-gray-500 text-xs font-bold mt-1 italic">Honours 3rd Year (Islamic Studies)</p>
        </div>
        <div className="text-left md:text-right text-[11px] font-bold text-gray-600 space-y-1 uppercase tracking-wider w-full md:w-auto">
          <p className="flex items-center md:justify-end gap-2 text-[10px] sm:text-[11px]">contact@abdullah.dev <FiMail className="text-[#00F7FF]"/></p>
          <p className="flex items-center md:justify-end gap-2 text-[10px] sm:text-[11px]">+8801785993913 <FiPhone className="text-[#00F7FF]"/></p>
          <p className="flex items-center md:justify-end gap-2 text-[10px] sm:text-[11px]">Dhaka, Bangladesh <FiMapPin className="text-[#00F7FF]"/></p>
          <p className="flex items-center md:justify-end gap-2 text-[10px] sm:text-[11px]">github.com/mdabdullahm <FiGithub className="text-[#00F7FF]"/></p>
        </div>
      </header>

      {/* Main Grid: Mobile 1 column, Desktop 12 columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Column (Main Info) */}
        <div className="order-2 md:order-1 md:col-span-8 space-y-8">
          
          {/* Summary */}
          <section>
            <h2 className="text-lg font-black uppercase border-b border-gray-100 pb-2 mb-3 tracking-widest">Professional Summary</h2>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              পড়াশোনার পাশাপাশি গত ২ বছর ধরে একজন দক্ষ Full Stack Web Developer হিসেবে নিজেকে গড়ে তুলেছি। আমি আধুনিক ওয়েব টেকনোলজি যেমন Next.js এবং React ব্যবহার করে ক্লিন ও স্কেলেবল কোড লিখতে ভালোবাসি। 
            </p>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-lg font-black uppercase border-b border-gray-100 pb-2 mb-3 tracking-widest">Featured Projects</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-black text-sm uppercase">E-Commerce Platform (Next.js & Stripe)</h3>
                <p className="text-xs text-gray-500 mb-1">প্রোডাক্ট ম্যানেজমেন্ট এবং সিকিউর পেমেন্ট সিস্টেমের একটি পূর্ণাঙ্গ সমাধান।</p>
                <p className="text-[10px] text-[#00F7FF] font-bold uppercase tracking-widest">Live: neoncode-e-commerce-website.vercel.app</p>
              </div>
              <div>
                <h3 className="font-black text-sm uppercase">ISP Management System (React & Firebase)</h3>
                <p className="text-xs text-gray-500 mb-1">ইন্টারনেট সার্ভিস প্রোভাইডারদের জন্য রিয়েল-টাইম ডাটা ও বিলিং ড্যাশবোর্ড।</p>
                <p className="text-[10px] text-[#00F7FF] font-bold uppercase tracking-widest">Live: income25bd-vqg2.vercel.app</p>
              </div>
              <div>
                <h3 className="font-black text-sm uppercase">Cybersecurity Platform (MERN Stack)</h3>
                <p className="text-xs text-gray-500 mb-1">ইউজার চ্যালেঞ্জ এবং লার্নিং সিস্টেম ভিত্তিক একটি সিকিউরিটি পোর্টাল।</p>
                <p className="text-[10px] text-[#00F7FF] font-bold uppercase tracking-widest">Live: zero-day-test.vercel.app</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-black uppercase border-b border-gray-100 pb-2 mb-3 tracking-widest">Education</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-[#00F7FF] pl-4">
                <p className="text-[10px] font-black text-[#00F7FF]">2022 - PRESENT</p>
                <h3 className="font-black text-sm uppercase">BA (Honours) in Islamic Studies</h3>
                <p className="text-xs text-gray-500">National University, Bangladesh (3rd Year)</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="text-[10px] font-black text-gray-400">2018 - 2020</p>
                <h3 className="font-black text-sm uppercase">Higher Secondary Certificate (HSC)</h3>
                <p className="text-xs text-gray-500">Humanities Group</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Skills & Sidebar) */}
        <div className="order-1 md:order-2 md:col-span-4 space-y-8">
          <section>
            <h2 className="text-lg font-black uppercase border-b border-gray-100 pb-2 mb-3 tracking-widest text-[#00F7FF]">Skills</h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Next.js", "Tailwind", "JavaScript", "Framer"].map(s => (
                    <span key={s} className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[9px] font-bold uppercase">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Backend</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "MongoDB", "Express", "Firebase", "JWT"].map(s => (
                    <span key={s} className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[9px] font-bold uppercase">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Tools</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["VS Code", "Figma", "Git", "GitHub", "Vercel"].map(s => (
                    <span key={s} className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[9px] font-bold uppercase">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase border-b border-gray-100 pb-2 mb-3 tracking-widest">Languages</h2>
            <div className="space-y-2 text-xs font-bold text-gray-600 uppercase tracking-widest">
              <p>Bengali <span className="text-gray-300 font-normal ml-2">Native</span></p>
              <p>English <span className="text-gray-300 font-normal ml-2">Fluent</span></p>
              <p>Arabic <span className="text-gray-300 font-normal ml-2">Reading</span></p>
            </div>
          </section>

          <section className="bg-black p-6 rounded-[30px] text-white">
            <h2 className="text-xs font-black uppercase tracking-widest mb-2 text-[#00F7FF]">Hire Me</h2>
            <p className="text-[10px] leading-relaxed opacity-70">আইডিয়াকে বাস্তবে রূপ দিতে আমি প্রস্তুত।</p>
          </section>
        </div>

      </div>

      <footer className="mt-12 pt-6 border-t border-gray-100 text-center">
        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic">Generated from MD ABDULLAH Portfolio</p>
      </footer>
    </div>
  );
};

export default CVPrint;