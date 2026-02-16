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
    desc: "It is a high-performance e-commerce platform. Users can do everything from browsing products to making secure payments. It is fully responsive and loads quickly.",
    features: ["Stripe Payment Integration", "Dynamic Product Search", "User Dashboard", "Inventory Management"],
    challenge: "The biggest challenges were payment gateway integration and database optimization to handle large data sets quickly.",
    live: "https://neoncode-e-commerce-website.vercel.app/",
    github: "https://github.com/mdabdullahm/neoncode-e-commerce-website"
  },
  "isp-service": {
  title: "ISP (Internet Service Provider)",
  category: "Network Management",
  image: "/projects/isp.jpg",
  tags: ["React", "Chart.js", "Tailwind", "Firebase"],
  desc: "It is a powerful ISP management dashboard that allows service providers to monitor their customers' bandwidth usage, billing status, and network health through real-time charts.",
  features: ["Bandwidth Monitoring Charts", "User Billing Management", "Network Health Status", "Automated Invoice Generation"],
  challenge: "The main technical challenge of this project was to render real-time data and chart analytics from many users in the browser without any lag.",
  live: "https://dot-internet-bd.vercel.app/",
  github: "#"
},
  "personal-portfolio": {
    title: "Personal Portfolio",
    category: "Personal Branding",
    image: "/projects/grafexportflio.jpg",
    tags: ["Tailwind", "Framer Motion", "Next.js"],
    desc: "This is my own professional portfolio. It uses Framer Motion to ensure excellent animation and a modern user experience.",
    features: ["Smooth Scroll Animations", "Dynamic Project Routing", "Contact Form Integration", "Mobile First Design"],
    challenge: "The main challenge was keeping each section pixel-perfect and optimizing the high-end animations.",
    live: "https://abdullah-sifat-portfolieo-website.vercel.app/",
    github: "https://github.com/mdabdullahm/abdullah-sifat-portfolieo-website"
  },
  "cybersecurity-platform": {
    title: "Cybersecurity Platform",
    category: "Education Tech",
    image: "/projects/zerodaytest.jpg",
    tags: ["MongoDB", "Node.js", "Express", "JWT"],
    desc: "A cybersecurity learning platform where users can learn hacking and security through various security tasks and challenges.",
    features: ["CTF Challenge System", "Leaderboard Integration", "Secure User Auth", "Interactive Tutorials"],
    challenge: "Securely verifying the code or data submitted by users and creating the leaderboard logic was a major challenge.",
    live: "https://zero-day-test.vercel.app/",
    github: "https://github.com/mdabdullahm/ZeroDay-Test"
  },
  "creative-agency": {
    title: "Creative Agency",
    category: "Corporate Website",
    image: "/projects/agency.jpg",
    tags: ["Firebase", "React", "Styled Components"],
    desc: "A modern landing page for a creative agency. It professionally showcases the agency's services and quality of work to clients.",
    features: ["Custom UI Design", "Portfolio Showcase", "Service Highlights", "Firebase Integration"],
    challenge: "The main challenge was to create a unique design language and color palette in line with the client's brand values.",
    live: "https://neoncode.co",
    github: "https://github.com/mdabdullahm/neonStudio-Agency"
  },
  "control-panel": {
    title: "Control Panel",
    category: "SaaS Dashboard",
    image: "/projects/dashbord.jpg",
    tags: ["OpenAI", "Next.js", "Clerk", "PostgreSQL"],
    desc: "An admin control panel integrated with artificial intelligence. Using it, users can process their data through AI.",
    features: ["AI Powered Analytics", "Modular Dashboard UI", "Role Based Access", "Dark Mode Support"],
    challenge: "Creating a smooth connection between the Open-AI API and dashboard logic and ensuring data security.",
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
    </main>
  );
};

export default ProjectDetails;