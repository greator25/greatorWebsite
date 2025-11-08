import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Package } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Evolve Sports Event Management',
      type: 'Web Application',
      description: 'A comprehensive event management platform featuring advanced check-in/check-out systems, real-time attendance tracking, and participant management for sports events.',
      tags: ['Event Management', 'Real-time Tracking', 'Sports'],
      icon: Calendar
    },
    {
      title: 'KKP Transports',
      type: 'Logistics Management Application',
      description: 'Development of a mobile and web application to fully digitize their logistics process, handling customer booking, load assignments for lorry owners, and real-time delivery tracking by drivers.',
      tags: ['Logistics', 'Mobile & Web', 'Real-time'],
      icon: Package
    },
    {
      title: 'Skywave Power Solutions',
      type: 'Complete Digital Transformation',
      description: 'Full branding solution alongside comprehensive full stack software development aimed at digitalizing their entire operations.',
      tags: ['Digital Transformation', 'Full Stack', 'Branding'],
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 bg-background" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-portfolio-title">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-portfolio-subtitle">
            Showcasing excellence in every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover-elevate active-elevate-2 transition-all flex flex-col" data-testid={`card-project-${index}`}>
              <div className="mb-4">
                <project.icon className="h-12 w-12 text-primary mb-4" data-testid={`icon-project-${index}`} />
                <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3" data-testid={`text-project-type-${index}`}>
                  {project.type}
                </p>
              </div>
              
              <p className="text-sm text-foreground leading-relaxed mb-4 flex-grow" data-testid={`text-project-description-${index}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs" data-testid={`badge-tag-${index}-${tagIndex}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
