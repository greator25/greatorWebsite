import { Card } from '@/components/ui/card';
import { Brain, Code, Settings, Palette, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Software Development',
      description: 'Leverage the power of artificial intelligence with custom machine learning models, intelligent automation, and data-driven solutions designed to optimize your business processes.',
      features: [
        'Machine Learning Solutions',
        'Natural Language Processing',
        'Computer Vision Applications',
        'Predictive Analytics'
      ]
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'From web applications to mobile apps, we build scalable, robust software solutions that align perfectly with your business objectives and user needs.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'Enterprise Software Solutions',
        'API Development & Integration'
      ]
    },
    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions, optimize your IT infrastructure, and stay ahead in the digital transformation journey.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'System Architecture Design',
        'Performance Optimization'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create engaging user experiences with our professional design services, ensuring your digital products are both beautiful and highly functional.',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Brand Identity Design',
        'Responsive Design'
      ]
    }
  ];

  return (
    <section className="py-20 bg-card" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-services-subtitle">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover-elevate active-elevate-2 transition-all" data-testid={`card-service-${index}`}>
              <div className="mb-6">
                <service.icon className="h-16 w-16 text-primary mb-4" data-testid={`icon-service-${index}`} />
                <h3 className="text-2xl font-semibold text-card-foreground mb-3" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3" data-testid={`feature-${index}-${featureIndex}`}>
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
