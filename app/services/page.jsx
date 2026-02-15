import ServicesHero from "@/components/services/hero";
import CTA from "@/components/home/CTA";
import Services from "@/components/home/Services";
import Process from "@/components/services/Process";
import Pricing from "@/components/services/Pricing";

export const metadata = {
    title: "Services | Abdullah",
    description: "Explore the wide range of professional digital services offered by Abdullah.",
};

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Services Hero Section 1 */}
            <ServicesHero />
            {/* Main Services Grid 2 */}
            <Services />
            {/* Work Process section 3 */}
            <Process />
            {/* Pricing Section 4 */}
            <Pricing />
            {/* CTA Section */}
            <CTA />
        </main>
    );
}