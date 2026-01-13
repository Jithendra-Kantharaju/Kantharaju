import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResearchInterestsSection from "@/components/ResearchInterestsSection";
import SkillsSection from "@/components/SkillsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <ResearchInterestsSection />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};
