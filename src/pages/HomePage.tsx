import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogsSection from "../components/BlogsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
