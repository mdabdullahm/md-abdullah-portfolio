import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";

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
    </main>
  );
}
