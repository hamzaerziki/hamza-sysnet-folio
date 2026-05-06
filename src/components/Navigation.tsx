import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

const NAV_LINKS = [
  { key: 'about', id: 'about' },
  { key: 'services', id: 'services' },
  { key: 'skills', id: 'skills' },
  { key: 'projects', id: 'projects' },
  { key: 'certificates', id: 'certificates' },
  { key: 'contact', id: 'contact' },
] as const;

export const Navigation = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const downloadCV = () => {
    const a = document.createElement('a');
    a.href = '/Hamza_Erziki_CV.pdf';
    a.download = 'Hamza_Erziki_CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? 'bg-background/75 backdrop-blur-xl border-b border-border-solid/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <button
          onClick={() => go('hero')}
          className="flex items-center gap-2 text-foreground"
          aria-label="Home"
        >
          <Logo size={28} animated />
          <span className="font-display text-base hidden sm:inline">Hamza Erziki</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ key, id }) => (
            <li key={key}>
              <button
                onClick={() => go(id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {t(`nav.${key}`)}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={downloadCV}
            className="group relative inline-flex items-center gap-2 h-9 px-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-[0_0_0_0_hsl(var(--primary)/0.45)] hover:shadow-[0_0_0_8px_hsl(var(--primary)/0)] hover:bg-primary-hover transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full ring-2 ring-primary/40 animate-cv-pulse pointer-events-none" />
            <Download className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            {t('cv.download')}
          </button>
          <div className="h-5 w-px bg-border-solid" />
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile: CV button + menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={downloadCV}
            aria-label={t('cv.download')}
            className="relative inline-flex items-center gap-1.5 h-9 px-3 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-sm"
          >
            <span className="absolute inset-0 rounded-full ring-2 ring-primary/40 animate-cv-pulse pointer-events-none" />
            <Download className="h-3.5 w-3.5" />
            CV
          </button>
          <button
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border-solid"
            onClick={() => setOpen(o => !o)}
            aria-label="Open menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer (slides from right with stagger) */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-surface border-l border-border-solid shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-border-solid">
            <div className="flex items-center gap-2">
              <Logo size={24} />
              <span className="font-display">Hamza Erziki</span>
            </div>
            <button onClick={() => setOpen(false)} className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border-solid">
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="p-6 flex flex-col gap-1">
            {NAV_LINKS.map(({ key, id }, i) => (
              <button
                key={key}
                onClick={() => go(id)}
                className="text-left py-3 px-3 rounded-md text-base text-foreground hover:bg-surface-offset transition-colors font-display"
                style={{
                  animation: open ? `fade-in 400ms cubic-bezier(0.16,1,0.3,1) ${i * 60}ms both` : undefined,
                }}
              >
                {t(`nav.${key}`)}
              </button>
            ))}
            <button
              onClick={() => { downloadCV(); setOpen(false); }}
              className="mt-4 inline-flex items-center justify-center gap-2 h-11 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              {t('cv.download')}
            </button>
            <div className="flex items-center justify-center gap-3 mt-6 pt-6 border-t border-border-solid">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
};
