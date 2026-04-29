import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from './Logo';

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border-solid py-10 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-foreground">
          <Logo size={20} />
          <span className="font-display text-sm">Hamza Erziki</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026–2027 · {t('footer.rights')}
        </p>
        <p className="text-xs text-muted-foreground">{t('footer.built')}</p>
      </div>
    </footer>
  );
};
