import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import CTASection from "@/components/sections/CTASection";
import FeaturedGallery from "@/components/sections/FeaturedGallery";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground space-y-16 md:space-y-24 pb-24">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />

      {/* Education needs a wrapper to match the width of other container-based sections */}
      <div className="container max-w-4xl mx-auto px-4">
        <EducationSection />
      </div>

      <CTASection />
      <FeaturedGallery />
      <ContactForm />
    </main>
  );
}
