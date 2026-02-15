"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Link ইমপোর্ট করা হয়েছে
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi"; // FiArrowRight যুক্ত করা হয়েছে

const FeaturedProjects = () => {
  const projectList = [
    { 
      id: "ecommerce-app", // আইডি যুক্ত করা হয়েছে
      title: "E-Commerce App", 
      image: "/projects/ecommerce.jpg", 
      tags: ["Next.js", "Stripe"],
      desc: "A premium online shopping platform that uses Stripe payment gateway and a modern user interface.",
      github: "https://github.com/mdabdullahm/neoncode-e-commerce-website", 
      live: "https://neoncode-e-commerce-website.vercel.app/" 
    },
    { 
      id: "investment-platform",
      title: "Investment Platform", 
      image: "/projects/income25bd.jpg", 
      tags: ["React", "Chart.js"],
      desc: "An investment management system with real-time data and chart analytics.",
      github: "https://github.com/mdabdullahm/income25bd", 
      live: "https://income25bd-vqg2.vercel.app/" 
    },
    { 
      id: "personal-portfolio",
      title: "Personal Portfolio", 
      image: "/projects/grafexportflio.jpg", 
      tags: ["Tailwind", "Framer"],
      desc: "A high-performance portfolio website built with Framer Motion and Tailwind CSS.",
      github: "https://github.com/mdabdullahm/abdullah-sifat-portfolieo-website", 
      live: "https://abdullah-sifat-portfolieo-website.vercel.app/" 
    },
    { 
      id: "cybersecurity-platform",
      title: "Cybersecurity Platform", 
      image: "/projects/zerodaytest.jpg", 
      tags: ["MongoDB", "Node"],
      desc: "Cybersecurity learning platform where users can participate in various security challenges.",
      github: "https://github.com/mdabdullahm/ZeroDay-Test", 
      live: "https://zero-day-test.vercel.app/" 
    },
    { 
      id: "creative-agency",
      title: "Creative Agency Website", 
      image: "/projects/agency.jpg", 
      tags: ["Firebase", "React"],
      desc: "A modern landing page built for a creative agency that showcases the company's services and portfolio.",
      github: "https://github.com/mdabdullahm/neonStudio-Agency", 
      live: "https://neoncode.co" 
    },
    { 
      id: "control-panel",
      title: "Control Panel Dashboard", 
      image: "/projects/dashbord.jpg", 
      tags: ["OpenAI", "Next.js"],
      desc: "An admin control panel and dashboard integrated with artificial intelligence.",
      github: "#", 
      live: "#" 
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ১. সেকশন হেডার (টাইটেল বামে, বাটন ডানে সোজাসুজি) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#00F7FF] font-black tracking-[5px] uppercase text-[10px] mb-4"
            >
              Proven Results
            </motion.h4>
            <h2 className="text-4xl md:text-7xl font-black text-black leading-none uppercase tracking-tighter">
              My Signature <span className="text-gray-400 italic font-medium">Projects.</span>
            </h2>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase transition-all cursor-pointer whitespace-nowrap shadow-xl hover:shadow-[#00F7FF]/20 self-start md:mb-2"
          >
            Explore All Work
            <FiArrowRight className="text-[#00F7FF] text-lg group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* প্রোজেক্ট গ্রিড */}
        <div className="space-y-32 md:space-y-48">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-24 items-center`}
            >
              {/* প্রোজেক্ট ইমেজ */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative h-[250px] md:h-[450px] rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl group-hover:shadow-[#00F7FF]/20 transition-all duration-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
              </div>

              {/* প্রোজেক্ট টেক্সট */}
              <div className="w-full lg:w-2/5">
                <div className="flex gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#00F7FF]/5 text-[#00F7FF] rounded-full text-[8px] font-black uppercase tracking-widest border border-[#00F7FF]/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight leading-none">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  {project.desc}
                </p>

                {/* লিংকস পার্ট */}
                <div className="flex flex-wrap items-center gap-6 md:gap-8">
                  {/* View Details Link */}
                  <Link 
                    href={`/projects/${project.id}`}
                    className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-black hover:text-[#00F7FF] transition-all"
                  >
                    View Details 
                    <FiArrowRight className="text-[#00F7FF] text-lg group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* View Live Link */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                  >
                    View Live <FiExternalLink className="text-[#00F7FF] text-lg" />
                  </motion.a>

                  {/* Source Code Link */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                  >
                    Source Code <FiGithub className="text-[#00F7FF] text-lg" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;