"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FiGithub, FiExternalLink, FiArrowLeft, FiCheckCircle, FiCpu } from "react-icons/fi";
import Navbar from "@/components/Navbar";

// ৬টি প্রোজেক্টের বিস্তারিত ডাটা
const projectData = {
  "ecommerce-app": {
    title: "E-Commerce App",
    category: "Full Stack Development",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "MongoDB", "Node.js"],
    desc: "এটি একটি হাই-পারফরম্যান্স ই-commerce প্ল্যাটফর্ম। ইউজাররা এখানে প্রোডাক্ট ব্রাউজ করা থেকে শুরু করে সিকিউর পেমেন্ট পর্যন্ত সব করতে পারে। এটি সম্পূর্ণ রেসপনসিভ এবং দ্রুত লোড হয়।",
    features: ["Stripe Payment Integration", "Dynamic Product Search", "User Dashboard", "Inventory Management"],
    challenge: "সবচাইতে বড় চ্যালেঞ্জ ছিল পেমেন্ট গেটওয়ে ইন্টিগ্রেশন এবং ডাটাবেস অপ্টিমাইজেশন যাতে বড় ডাটা সেট দ্রুত হ্যান্ডেল করা যায়।",
    live: "https://neoncode-e-commerce-website.vercel.app/",
    github: "https://github.com/mdabdullahm/neoncode-e-commerce-website"
  },
  "investment-platform": {
    title: "Investment Platform",
    category: "FinTech Solution",
    image: "/projects/income25bd.jpg",
    tags: ["React", "Chart.js", "Firebase", "Tailwind"],
    desc: "একটি আধুনিক ইনভেস্টমেন্ট ম্যানেজমেন্ট সিস্টেম। ইউজাররা এখানে তাদের ইনকাম এবং চার্ট অ্যানালিটিক্স দেখতে পারে। রিয়েল-টাইম ডাটা ট্র্যাকিং এর জন্য এটি সেরা।",
    features: ["Interactive Analytics Charts", "Real-time Income Tracking", "Secure Wallet System", "Multi-level Referrals"],
    challenge: "রিয়েল-টাইম চার্ট ডাটা এবং ক্যালকুলেশন গুলোকে নির্ভুলভাবে উপস্থাপন করা ছিল এই প্রোজেক্টের প্রধান কারিগরি চ্যালেঞ্জ।",
    live: "https://income25bd-vqg2.vercel.app/",
    github: "https://github.com/mdabdullahm/income25bd"
  },
  "personal-portfolio": {
    title: "Personal Portfolio",
    category: "Personal Branding",
    image: "/projects/grafexportflio.jpg",
    tags: ["Tailwind", "Framer Motion", "Next.js"],
    desc: "এটি আমার নিজস্ব প্রফেশনাল পোর্টফোলিও। ফ্রেমার মোশন ব্যবহার করে এখানে চমৎকার এনিমেশন এবং মডার্ন ইউজার এক্সপেরিয়েন্স নিশ্চিত করা হয়েছে।",
    features: ["Smooth Scroll Animations", "Dynamic Project Routing", "Contact Form Integration", "Mobile First Design"],
    challenge: "প্রতিটি সেকশনকে পিক্সেল-পারফেক্ট রাখা এবং হাই-এন্ড এনিমেশন গুলোকে অপ্টিমাইজ করা ছিল মূল চ্যালেঞ্জ।",
    live: "https://abdullah-sifat-portfolieo-website.vercel.app/",
    github: "https://github.com/mdabdullahm/abdullah-sifat-portfolieo-website"
  },
  "cybersecurity-platform": {
    title: "Cybersecurity Platform",
    category: "Education Tech",
    image: "/projects/zerodaytest.jpg",
    tags: ["MongoDB", "Node.js", "Express", "JWT"],
    desc: "একটি সাইবার সিকিউরিটি লার্নিং প্ল্যাটফর্ম। এখানে ইউজাররা বিভিন্ন সিকিউরিটি টাস্ক এবং চ্যালেঞ্জের মাধ্যমে হ্যাকিং ও সিকিউরিটি শিখতে পারে।",
    features: ["CTF Challenge System", "Leaderboard Integration", "Secure User Auth", "Interactive Tutorials"],
    challenge: "ইউজারদের সাবমিট করা কোড বা ডাটা সিকিউরলি ভেরিফাই করা এবং লিডারবোর্ড লজিক তৈরি করা ছিল একটি বড় চ্যালেঞ্জ।",
    live: "https://zero-day-test.vercel.app/",
    github: "https://github.com/mdabdullahm/ZeroDay-Test"
  },
  "creative-agency": {
    title: "Creative Agency",
    category: "Corporate Website",
    image: "/projects/agency.jpg",
    tags: ["Firebase", "React", "Styled Components"],
    desc: "একটি ক্রিয়েটিভ এজেন্সির জন্য তৈরি মডার্ন ল্যান্ডিং পেজ। এটি এজেন্সির সার্ভিস এবং কাজের গুণমান ক্লায়েন্টদের কাছে প্রফেশনালভাবে তুলে ধরে।",
    features: ["Custom UI Design", "Portfolio Showcase", "Service Highlights", "Firebase Integration"],
    challenge: "ক্লায়েন্টের ব্র্যান্ড ভ্যালুর সাথে মিল রেখে একটি ইউনিক ডিজাইন ল্যাঙ্গুয়েজ এবং কালার প্যালেট তৈরি করা ছিল প্রধান চ্যালেঞ্জ।",
    live: "https://neoncode.co",
    github: "https://github.com/mdabdullahm/neonStudio-Agency"
  },
  "control-panel": {
    title: "Control Panel",
    category: "SaaS Dashboard",
    image: "/projects/dashbord.jpg",
    tags: ["OpenAI", "Next.js", "Clerk", "PostgreSQL"],
    desc: "আর্টিফিশিয়াল ইন্টেলিজেন্স ইন্টিগ্রেটেড একটি অ্যাডমিন কন্ট্রোল প্যানেল। এটি ব্যবহার করে ইউজাররা তাদের ডাটা এআই এর মাধ্যমে প্রসেস করতে পারে।",
    features: ["AI Powered Analytics", "Modular Dashboard UI", "Role Based Access", "Dark Mode Support"],
    challenge: "ওপেন-এআই এপিআই এবং ড্যাশবোর্ড লজিকের মধ্যে একটি স্মুথ কানেকশন তৈরি করা এবং ডাটা সিকিউরিটি নিশ্চিত করা।",
    live: "#",
    github: "#"
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const project = projectData[id];

  // যদি আইডি ভুল হয় বা ডাটা না থাকে
  if (!project) return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-10">
      <h2 className="text-2xl font-black mb-4 uppercase">Project Not Found!</h2>
      <Link href="/projects" className="text-[#00F7FF] font-bold">Back to all projects</Link>
    </div>
  );

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Button */}
          <motion.button 
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#00F7FF] mb-12 transition-colors cursor-pointer group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to projects
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* বাম পাশ: ইমেজ এবং স্ট্যাক */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative h-[300px] md:h-[500px] rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl mb-10"
              >
                <Image src={project.image} alt={project.title} fill className="object-cover" priority />
              </motion.div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-5 py-2 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ডান পাশ: ইনফরমেশন */}
            <div className="lg:col-span-5">
              <motion.h4 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
              >
                {project.category}
              </motion.h4>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black text-black leading-none uppercase tracking-tighter mb-8"
              >
                {project.title}
              </motion.h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                {project.desc}
              </p>

              {/* Features List */}
              <div className="mb-10">
                <h3 className="text-black font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2 underline decoration-[#00F7FF] underline-offset-8">
                  <FiCheckCircle className="text-[#00F7FF]" /> Key Features
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                      <span className="w-1.5 h-1.5 bg-[#00F7FF] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenge Box */}
              <div className="p-8 bg-gray-50 rounded-[30px] border border-gray-100 mb-10">
                <h3 className="text-black font-black text-[10px] uppercase tracking-widest mb-3 flex items-center gap-2">
                   <FiCpu className="text-[#00F7FF]" /> The Challenge
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed italic">
                  "{project.challenge}"
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-6">
                <Link 
                  href={project.live} 
                  target="_blank"
                  className="bg-[#00F7FF] text-black px-8 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase flex items-center gap-3 shadow-[0_10px_30px_rgba(0,247,255,0.3)] hover:scale-105 transition-all"
                >
                  Live Demo <FiExternalLink />
                </Link>
                <Link 
                  href={project.github} 
                  target="_blank"
                  className="bg-black text-white px-8 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase flex items-center gap-3 hover:bg-gray-800 transition-all"
                >
                  Source Code <FiGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Copy */}
      <footer className="py-10 text-center text-gray-400 text-[10px] uppercase tracking-widest border-t border-gray-50">
        © {new Date().getFullYear()} Md Abdullah. All rights reserved.
      </footer>
    </main>
  );
};

export default ProjectDetails;