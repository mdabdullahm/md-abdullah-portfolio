import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProjectsHero from "@/components/projects/hero";
// import CTA from "@/components/home/CTA";
// import Projects from "@/components/home/Projects";

export const metadata = {
  title: "My Projects | Abdullah",
  description: "Browse through the high-performance web applications and digital solutions built by Abdullah.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* Projects Hero Section 1*/}
      <ProjectsHero />
      {/* Featured Projects Section  2 */}
      <FeaturedProjects/>

     
      <div className="py-20">
         {/* <Projects /> */}
      </div>

      {/* <CTA /> */}
    </main>
  );
}