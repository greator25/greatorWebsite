import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Clock, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Badge variant="outline" className="mb-8 px-4 py-2 text-sm font-bold tracking-wide uppercase border-primary text-primary" data-testid="badge-hero-label">
            AI Software Development
          </Badge>
          <h1 className="font-black text-foreground mb-8 leading-tight">
            <span className="block text-5xl md:text-7xl lg:text-8xl" data-testid="text-brand-greator">Greator</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2" data-testid="text-brand-software">Software</span>
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight max-w-5xl" data-testid="text-hero-title">
          Practising AI Democracy. Scaling Solutions for Every Business.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl leading-relaxed" data-testid="text-hero-subtitle">
          World-class AI software development and IT consulting services delivered beyond expectations, every time.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground" data-testid="badge-timeline">
            <Clock className="h-4 w-4 mr-2" />
            Delivered Before Timeline
          </Badge>
          <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground" data-testid="badge-expectations">
            <Sparkles className="h-4 w-4 mr-2" />
            Beyond Expectations
          </Badge>
          <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground" data-testid="badge-worldclass">
            <Award className="h-4 w-4 mr-2" />
            World-Class Solutions
          </Badge>
        </div>

        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
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
