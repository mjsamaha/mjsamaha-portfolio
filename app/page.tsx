import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import CTASection from "@/components/sections/CTASection";
import FeaturedGallery from "@/components/sections/FeaturedGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AboutSection />
      
      <div className="container mx-auto px-4 space-y-24 pb-24">
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </div>

      <CTASection />
      <FeaturedGallery />
    </main>
  );
}
