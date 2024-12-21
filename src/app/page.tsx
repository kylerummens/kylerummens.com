import { ProfilePhoto } from "./components/profile-photo";
import { HeaderSection } from "./components/header-section";
import { WorkSection } from "./components/work-section";
import { PortfolioSection } from "./components/portfolio-section";
import { SkillsSection } from "./components/skills-section";

export default function HomePage() {
  return (
    <div className="p-8 md:p-20 mx-auto max-w-4xl">
      <main className="space-y-12">
        <ProfilePhoto />
        <HeaderSection />
        <WorkSection />
        <PortfolioSection />
        <SkillsSection />
      </main>
    </div>
  );
}
