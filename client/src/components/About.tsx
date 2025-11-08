import { Card } from '@/components/ui/card';
import { Target, Heart, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: TrendingUp,
      title: 'Innovation-driven excellence',
      description: 'Pushing boundaries with cutting-edge technology'
    },
    {
      icon: Target,
      title: 'Client success above all',
      description: 'Your goals are our mission'
    },
    {
      icon: Shield,
      title: 'Integrity and transparency',
      description: 'Honest communication at every step'
    },
    {
      icon: Heart,
      title: 'Continuous improvement',
      description: 'Always learning, always growing'
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            About Greator Software
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-about-subtitle">
            Pioneering the future of intelligent software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4" data-testid="text-mission-title">Our Mission</h3>
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-mission-description">
              To empower businesses worldwide with cutting-edge AI-driven software solutions that transform 
              challenges into opportunities and ideas into reality.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4" data-testid="text-unique-title">What Makes Us Unique</h3>
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-unique-description">
              We consistently deliver projects before the timeline while exceeding client expectations. 
              Our world-class team combines technical expertise with business acumen to create solutions 
              that drive real results.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center" data-testid="text-values-title">Our Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-value-${index}`}>
                <value.icon className="h-12 w-12 text-primary mb-4" data-testid={`icon-value-${index}`} />
                <h4 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-value-description-${index}`}>
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
