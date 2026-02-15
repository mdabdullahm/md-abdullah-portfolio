import DetailedSkills from "@/components/about/DetailedSkills";
import AboutHero from "@/components/about/hero";
import Introduction from "@/components/about/Introduction";
import PersonalTouch from "@/components/about/PersonalTouch";
import Stats from "@/components/about/Stats";
import Timeline from "@/components/about/Timeline";
import WhyChooseMe from "@/components/home/WhyChooseMe";

export const metadata = {
  title: "About Me | Abdullah",
  description: "Learn more about Abdullah's journey as a web developer.",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* About Page Hero Section */}
      <AboutHero />
      {/* Professional Introduction (Detailed Bio) section 2 */}
      <Introduction/>
      {/*  Skills & Technologies (Detailed Version) section 3 */}
      <DetailedSkills/>
      {/* My Journey / Timeline section 4 */}
      <Timeline/>
      {/* Experience & Projects Count (Stats)  section 5 */}
      <Stats/>
      {/* Why Work With Me section 6 */}
      <WhyChooseMe/>
      {/* Personal Touch (Beyond the Screen) section 7 */}
      <PersonalTouch/>
      
      {/* <footer className="py-10 text-center text-gray-400 text-xs uppercase tracking-widest border-t border-gray-50">
        © {new Date().getFullYear()} Md Abdullah. All rights reserved.
      </footer> */}
    </main>
  );
}