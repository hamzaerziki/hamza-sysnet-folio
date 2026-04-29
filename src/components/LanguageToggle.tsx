import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const btn = (active: boolean) =>
    `h-8 px-2.5 text-[11px] font-semibold tracking-wider rounded-md transition-colors ${
      active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
    }`;
  return (
    <div className="flex items-center gap-1 rounded-md border border-border-solid bg-surface p-0.5">
      <button onClick={() => setLanguage('fr')} className={btn(language === 'fr')}>FR</button>
      <button onClick={() => setLanguage('en')} className={btn(language === 'en')}>EN</button>
    </div>
  );
};
