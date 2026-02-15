// import DetailedSkills from "@/components/about/DetailedSkills"; // আগের বানানো কম্পোনেন্টটি এখানেও ব্যবহার করছি
// import CTA from "@/components/CTA";

import BackendSkills from "@/components/skills/BackendSkills";
import FrontendSkills from "@/components/skills/FrontendSkills";
import SkillsHero from "@/components/skills/hero";
import SkillCategories from "@/components/skills/SkillCategories";
import TechnicalStrengths from "@/components/skills/TechnicalStrengths";
import ToolsWorkflow from "@/components/skills/ToolsWorkflow";

export const metadata = {
  title: "My Skills | Abdullah",
  description: "Explore the technical expertise and tools Abdullah uses to build modern web applications.",
};

export default function SkillsPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* Skills Hero Section */}
      <SkillsHero />
      {/* Frontend Skills (Main Section) section 2 */}
      <FrontendSkills/>
      {/* Backend Skills section 3 */}
      <BackendSkills/>
      {/* Tools & Workflow section 4 */}
      <ToolsWorkflow/>
      {/*  Technical Strength (Pro Level section 5 */}
      <TechnicalStrengths/>
      {/* Skill Categories section 6 */}
      <SkillCategories/>



      {/* <CTA /> */}
      
      {/* <footer className="py-10 text-center text-gray-400 text-[10px] uppercase tracking-widest border-t border-gray-50">
        © {new Date().getFullYear()} Md Abdullah. All rights reserved.
      </footer> */}
    </main>
  );
}