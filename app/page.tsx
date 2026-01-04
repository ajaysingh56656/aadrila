import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustriesSection from "@/components/IndustriesSection";

import OurProductsSection from "@/components/our-products/OurProductsSection";
import OurProducts from "@/components/our-products/OurProducts";
import BlogSection from "@/components/blogs/BlogSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <IndustriesSection />
      <OurProducts />
      <OurProductsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
