import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Certificates } from '@/components/sections/Certificates';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { CursorFollower } from '@/components/CursorFollower';

const Index = () => (
  <ThemeProvider>
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-surface focus:px-3 focus:py-1.5 focus:rounded">
          Skip to content
        </a>
        <CursorFollower />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  </ThemeProvider>
);

export default Index;
