import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";
import WhyChooseMe from "@/components/home/WhyChooseMe";

export default function Home() {
  return (
    <main className="pt-25">
      <Hero/>
      {/* tech stact section 2 */}
      <TechStack/>
      {/* featured projects section 3 */}
      <Projects/>
      {/* Services Overview section 4 */}
      <Services/>
      {/*  About Preview section 5 */}
      <About/>
      {/* Why Choose Me (Client Target) section6 */}
      <WhyChooseMe/>
      {/* Call to Action (CTA) */}
      <CTA/>
    </main>
  );
}
