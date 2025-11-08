import { Card } from '@/components/ui/card';
import { Award, Users, Lightbulb, Zap } from 'lucide-react';
import teamCollaboration from '@assets/generated_images/Team_collaboration_photo_57e3072e.png';
import officeWorkspace from '@assets/generated_images/Office_workspace_culture_d0cd6f88.png';
import teamCelebration from '@assets/generated_images/Team_celebration_moment_bf66dcdc.png';

export default function Culture() {
  const coreValues = [
    { icon: Award, title: 'Excellence', description: 'Delivering the highest quality in everything we do' },
    { icon: Users, title: 'Collaboration', description: 'Working together to achieve amazing results' },
    { icon: Lightbulb, title: 'Innovation', description: 'Embracing new ideas and creative solutions' },
    { icon: Zap, title: 'Agility', description: 'Adapting quickly to meet evolving needs' }
  ];

  return (
    <section className="py-20 bg-card" id="culture">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4" data-testid="text-culture-title">
            Life at Greator Software
          </h2>
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-culture-subtitle">
            Join a vibrant culture where innovation meets collaboration
          </p>
          <p className="text-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-culture-intro">
            At Greator Software, we believe in creating an environment where talented individuals can thrive, 
            innovate, and grow together. Our culture is built on collaboration, continuous learning, and 
            celebrating success as a team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <img 
              src={teamCollaboration} 
              alt="Team Collaboration" 
              className="w-full h-64 object-cover rounded-md"
              data-testid="img-team-collaboration"
            />
            <div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid="text-highlights-title">
                Culture Highlights
              </h3>
              <ul className="space-y-2 text-foreground">
                <li data-testid="text-highlight-0">• Team Collaboration</li>
                <li data-testid="text-highlight-1">• Celebrations & Events</li>
                <li data-testid="text-highlight-2">• Learning & Development</li>
                <li data-testid="text-highlight-3">• Work-Life Balance</li>
                <li data-testid="text-highlight-4">• Career Growth</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img 
              src={officeWorkspace} 
              alt="Office Workspace" 
              className="w-full h-48 object-cover rounded-md"
              data-testid="img-office-workspace"
            />
            <img 
              src={teamCelebration} 
              alt="Team Celebration" 
              className="w-full h-48 object-cover rounded-md"
              data-testid="img-team-celebration"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-card-foreground mb-8 text-center" data-testid="text-core-values-title">
            Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-6 text-center hover-elevate active-elevate-2 transition-all" data-testid={`card-core-value-${index}`}>
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" data-testid={`icon-core-value-${index}`} />
                <h4 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`text-core-value-title-${index}`}>
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-core-value-description-${index}`}>
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
