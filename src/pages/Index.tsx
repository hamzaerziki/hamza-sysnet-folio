import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Positions } from '@/components/sections/Positions';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Certificates } from '@/components/sections/Certificates';
import { CVDownload } from '@/components/sections/CVDownload';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Positions />
          <Projects />
          <Skills />
          <Certificates />
          <CVDownload />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
