import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import TeamSection from "@/components/about/TeamSection";
import ContactSection from "@/components/contact/ContactSection"; // Reusing your Footer logic

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <TeamSection />
      <ContactSection /> {/* Form overlapping Blue bar correctly */}
    </main>
  );
}
