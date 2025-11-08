import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Clock, Sparkles } from 'lucide-react';
import heroBackground from '@assets/generated_images/Hero_section_tech_background_0fc798ac.png';
import logoImage from '@assets/generated-image (3)_1762624533355.png';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/70 to-foreground/90" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <h1 className="font-bold text-background mb-2">
            <span className="block text-5xl md:text-7xl" data-testid="text-brand-greator">Greator</span>
            <span className="block text-4xl md:text-5xl mt-2" data-testid="text-brand-software">Software</span>
          </h1>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-background mb-6" data-testid="text-hero-title">
          Transforming Ideas into Intelligent Solutions
        </h2>
        
        <p className="text-lg md:text-xl text-background/90 mb-12 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          World-class AI software development and IT consulting services delivered beyond expectations, every time.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90" data-testid="badge-timeline">
            <Clock className="h-4 w-4 mr-2" />
            Delivered Before Timeline
          </Badge>
          <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90" data-testid="badge-expectations">
            <Sparkles className="h-4 w-4 mr-2" />
            Beyond Expectations
          </Badge>
          <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90" data-testid="badge-worldclass">
            <Award className="h-4 w-4 mr-2" />
            World-Class Solutions
          </Badge>
        </div>

        <Button 
          size="lg" 
          className="bg-background/20 backdrop-blur-md text-background border-2 border-background/40 hover:bg-background/30 px-8 py-6 text-lg"
          onClick={scrollToContact}
          data-testid="button-get-started"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
