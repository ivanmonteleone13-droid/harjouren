import Hero from "@/components/Hero";
import ColorFocus from "@/components/ColorFocus";
import ServicesSection from "@/components/ServicesSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ColorFocus />
      <ServicesSection />
      <ReviewsCarousel />
      <AboutSection />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
