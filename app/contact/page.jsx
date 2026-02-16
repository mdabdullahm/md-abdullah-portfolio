import FAQ from "@/components/contact/FAQ";
import ContactHero from "@/components/contact/hero";

export const metadata = {
  title: "Contact Me | Abdullah",
  description: "Get in touch with Abdullah for web development services via WhatsApp or Email.",
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* Contact Page Hero with WhatsApp Card */}
      <ContactHero />
      {/* faq section 2 */}
      <FAQ/>
    </main>
  );
}