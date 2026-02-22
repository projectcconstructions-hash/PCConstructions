import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
