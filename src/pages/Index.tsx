import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Positions } from '@/components/sections/Positions';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Certificates } from '@/components/sections/Certificates';
import { Footer } from '@/components/Footer';
import { CursorFollower } from '@/components/CursorFollower';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <CursorFollower />
        <Navigation />
        <main>
          <Hero />
          <About />
          
          <Projects />
          <Skills />
          <Certificates />
          
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
