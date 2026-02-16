"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const Projects = () => {
  // ১. এখানে তুমি তোমার প্রজেক্টের লিংকগুলো বসাবে
  const projectList = [
    { 
      title: "E-Commerce App", 
      image: "/projects/ecommerce.jpg", 
      tags: ["Next.js", "Stripe"],
      github: "https://github.com/mdabdullahm/neoncode-e-commerce-website", // এখানে গিটহাব লিংক
      live: "https://neoncode-e-commerce-website.vercel.app/" // এখানে লাইভ সাইট লিংক
    },
    { 
      title: "ISP (Internet Service Provider)", 
      image: "/projects/isp.jpg", 
      tags: ["React", "Chart.js"],
      github: "https://dot-internet-bd.vercel.app/", 
      live: "#" 
    },
    { 
      title: "Portfolio", 
      image: "/projects/grafexportflio.jpg", 
      tags: ["Tailwind", "Framer"],
      github: "https://github.com/mdabdullahm/abdullah-sifat-portfolieo-website", 
      live: "https://abdullah-sifat-portfolieo-website.vercel.app/" 
    },
    { 
      title: "Cybersecurity Learning Platform", 
      image: "/projects/zerodaytest.jpg", 
      tags: ["MongoDB", "Node"],
      github: "https://github.com/mdabdullahm/ZeroDay-Test", 
      live: "https://zero-day-test.vercel.app/" 
    },
    { 
      title: "Creative Agency Website", 
      image: "/projects/agency.jpg", 
      tags: ["Firebase", "React"],
      github: "https://github.com/mdabdullahm/neonStudio-Agency", 
      live: "https://neoncode.co" 
    },
    { 
      title: "Control Panel", 
      image: "/projects/dashbord.jpg", 
      tags: ["OpenAI", "Next.js"],
      github: "#", 
      live: "#" 
    },
  ];

  // বিরতিহীন লুপের জন্য লিস্টটি ডাবল করা হয়েছে
  const duplicatedProjects = [...projectList, ...projectList];

  return (
    <section id="projects" className="py-15 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* হেডার পার্ট */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl text-left">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#00F7FF] font-bold tracking-[5px] uppercase text-[10px] mb-3"
            >
              Recent Works
            </motion.h4>
            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
              Featured <span className="text-gray-400 italic font-medium">Projects.</span>
            </h2>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all cursor-pointer whitespace-nowrap self-start md:self-end shadow-lg"
          >
            View Projects
            <FiArrowRight className="text-[#00F7FF] text-lg group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* স্লাইডার পার্ট */}
        <div className="relative">
          {/* গ্লাসি ফেড ইফেক্ট (দুই পাশে হালকা ঝাপসা করা হয়েছে যাতে শুরু/শেষ না বোঝা যায়) */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none"></div>

          <motion.div 
            className="flex gap-6 w-max" // w-max নিশ্চিত করে যে স্লাইডারটি এক লাইনে থাকবে
            animate={{ x: ["0%", "-50%"] }} // ০ থেকে ৫০% পর্যন্ত গিয়ে আবার লুপ হবে
            transition={{ 
              ease: "linear", // এটি স্লাইডকে একদম স্মুথ রাখবে, থামবে না
              duration: 80, // গতি ৫০ বা ৬০ করলে আরও স্লো এবং স্মুথ হবে
              repeat: Infinity 
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[350px] group relative h-[380px] md:h-[450px] rounded-[30px] overflow-hidden border border-gray-100 shadow-sm"
              >
                {/* ইমেজ */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />

                {/* ডার্ক গ্রেডিয়েন্ট ওভারলে */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                
                {/* কন্টেন্ট */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[8px] font-bold text-[#00F7FF] uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-5 uppercase tracking-tighter">{project.title}</h3>
                  
                  {/* হোভার লিংকস - এখন এগুলো কাজ করবে */}
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a 
                      href={project.github} 
                      target="_blank" // নতুন ট্যাবে খুলবে
                      className="p-2.5 bg-[#00F7FF] rounded-full text-black hover:scale-110 transition-all"
                    >
                      <FiGithub size={18}/>
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank"
                      className="p-2.5 bg-white rounded-full text-black hover:scale-110 transition-all"
                    >
                      <FiExternalLink size={18}/>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Projects;