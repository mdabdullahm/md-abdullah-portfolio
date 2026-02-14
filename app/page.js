import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <main className="pt-25">
      <Hero/>
      {/* tech stact section 2 */}
      <TechStack/>
      {/* featured projects section 3 */}
      <Projects/>
    </main>
  );
}
