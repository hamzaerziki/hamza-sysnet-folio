import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const CVDownload = () => {
  const { t } = useLanguage();

  const handleDownload = () => {
    // Create a functional PDF download link
    const link = document.createElement('a');
    link.href = '/Hamza_Erziki_CV.pdf';
    link.download = 'Hamza_Erziki_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t('cv.title')}
          </h2>
          
          <Card className="p-8 gradient-card shadow-card border-border/50">
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-purple">
                <span className="text-white text-xl font-bold">📄</span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">CV Professionnel</h3>
                <p className="text-muted-foreground">
                  {t('cv.description')}
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="gradient-primary text-white font-semibold shadow-purple w-full sm:w-auto"
                onClick={handleDownload}
              >
                {t('cv.download')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};