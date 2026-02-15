import ContactHero from "@/components/contact/hero";
// import WhyWorkWithMe from "../components/about/WhyWorkWithMe"; // আগের বানানো সেকশনটি পুনরায় ব্যবহার করছি
// import CTA from "../components/CTA";

export const metadata = {
  title: "Contact Me | Abdullah",
  description: "Get in touch with Abdullah for web development services via WhatsApp or Email.",
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* Contact Page Hero with WhatsApp Card */}
      <ContactHero />

      {/* ক্লায়েন্টকে কেন তোমাকে হায়ার করবে তার কারণগুলো এখানেও রাখা ভালো */}
      <div className="pb-20">
        {/* <WhyWorkWithMe /> */}
      </div>

      {/* CTA Section */}
      {/* <CTA /> */}
    </main>
  );
}