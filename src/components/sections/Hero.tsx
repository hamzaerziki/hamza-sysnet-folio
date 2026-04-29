import { useLanguage } from '@/contexts/LanguageContext';
import { Terminal } from '@/components/widgets/Terminal';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();
  const words = [
    t('hero.headline.1'),
    t('hero.headline.2'),
    t('hero.headline.3'),
    t('hero.headline.4'),
    t('hero.headline.5'),
  ].filter(Boolean);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const downloadCV = () => {
    const a = document.createElement('a');
    a.href = '/Hamza_Erziki_CV.pdf';
    a.download = 'Hamza_Erziki_CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Subtle dotted texture */}
      <div className="absolute inset-0 grid-dots opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Headline column */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="pill">{t('hero.pill')}</span>
            </div>
            <h1 className="font-display text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.05] tracking-tight text-foreground">
              {words.map((w, i) => (
                <span
                  key={i}
                  className="word-reveal mr-[0.25em]"
                  style={{ animationDelay: `${120 + i * 90}ms` }}
                >
                  {w}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
              {t('hero.sub')}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-sm font-medium"
              >
                {t('hero.cta.primary')}
              </button>
              <button
                onClick={downloadCV}
                className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-border-solid hover:bg-surface-offset text-foreground transition-colors text-sm font-medium"
              >
                {t('hero.cta.secondary')}
              </button>
            </div>
          </div>

          {/* Terminal column */}
          <div className="lg:col-span-5">
            <Terminal />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[11px] tracking-widest uppercase">{t('hero.scroll')}</span>
          <ArrowDown className="h-4 w-4 animate-soft-bounce" />
        </div>
      </div>
    </section>
  );
};
