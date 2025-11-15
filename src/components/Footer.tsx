import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/hamza-erziki/',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]',
    },
    {
      icon: Github,
      href: 'https://github.com/hamza-erziki',
      label: 'GitHub',
      color: 'hover:text-primary',
    },
    {
      icon: Mail,
      href: 'mailto:hamza.erziki@example.com',
      label: 'Email',
      color: 'hover:text-primary',
    },
  ];

  return (
    <footer className="relative border-t border-border/20 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Hamza Erziki
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ingénieur Systèmes & Réseaux spécialisé en cybersécurité, infrastructure et DevOps
              </p>
              <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground mb-4">Contact</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:hamza.erziki@example.com" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>hamza.erziki@example.com</span>
                </a>
                <a 
                  href="tel:+212600000000" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+212 6 00 00 00 00</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Casablanca, Maroc</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground mb-4">Réseaux</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-12 h-12 rounded-xl glass-card border border-border/20 hover:border-primary/40 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Disponible pour des opportunités professionnelles
              </p>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} Hamza Erziki. {t('footer.rights')}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Built with Lovable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};