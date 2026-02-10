import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";
import HeroSection from "@/components/home/HeroSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import StatsSection from "@/components/home/StatsSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ValuesSection from "@/components/home/ValuesSection";
import ContactBanner from "@/components/home/ContactBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />

        <ScrollReveal>
          <StatsSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SolutionsSection />
        </ScrollReveal>

        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>

        <ScrollReveal>
          <CapabilitiesSection />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>

        <ScrollReveal>
          <ValuesSection />
        </ScrollReveal>

        <ScrollReveal>
          <ContactBanner />
        </ScrollReveal>
      </main>
      <Footer />
      <FloatingPhoneCTA />
    </>
  );
}
