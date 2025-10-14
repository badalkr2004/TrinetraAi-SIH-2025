import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { Solution } from "@/components/Solution";
import { Timeline } from "@/components/Timeline";
import { Impact } from "@/components/Impact";
import { Technology } from "@/components/Technology";
import { Viability } from "@/components/Viability";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <ProblemStatement />
      <div id="solution">
        <Solution />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="impact">
        <Impact />
      </div>
      <div id="technology">
        <Technology />
      </div>
      <Viability />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;