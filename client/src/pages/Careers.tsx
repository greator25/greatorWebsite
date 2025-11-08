import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, IndianRupee, ChevronDown, ChevronUp } from 'lucide-react';

interface Job {
  title: string;
  location: string;
  salary: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  offer?: string[];
}

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobs: Job[] = [
    {
      title: 'Junior Software Engineer',
      location: 'Perambalur, TamilNadu',
      salary: '₹8,000 - ₹10,000/month (Freshers)',
      summary: 'Seeking a motivated and eager Junior Software Engineer to join our dynamic tech team in Perambalur. You will work on full-stack applications, learning and contributing in a supportive environment.',
      responsibilities: [
        'Write clean, testable, efficient code for front/back-end',
        'Assist in feature development and testing',
        'Debug and resolve software defects',
        'Participate in code reviews and team meetings',
        'Collaborate with cross-functional teams to define and ship new features',
        'Learn and apply new technologies and best practices'
      ],
      qualifications: [
        'Strong understanding of OOP principles',
        'Proficiency in front-end technologies (HTML, CSS, JavaScript)',
        'Proficiency in back-end languages (Node.js or Python)',
        'Knowledge of databases (MySQL or MongoDB)',
        'Excellent problem-solving and analytical skills',
        'Experience with React/Angular, Express.js, and Git is a plus',
        'Official language for office communication is English'
      ],
      offer: [
        'Starting salary of ₹8,000 - ₹10,000',
        'Significant growth potential up to ₹50,000 - ₹1,00,000/month within 6-12 months',
        'Mentorship program'
      ]
    },
    {
      title: 'Video Editor',
      location: 'Perambalur, TamilNadu',
      salary: '₹10,000 - ₹15,000/month (Freshers)',
      summary: 'Creative and skilled Video Editor needed for YouTube and Instagram vlogging projects.',
      responsibilities: [
        'Edit raw video footage into polished, high-quality videos',
        'Add graphics, sound effects, and music',
        'Manage and organize video files',
        'Collaborate with the content team'
      ],
      qualifications: [
        'Proven experience with a strong portfolio showcasing vlogging work (required)',
        'Proficiency in Adobe Premiere Pro and After Effects',
        'Familiarity with YouTube and Instagram',
        'Ability to work independently and meet deadlines'
      ]
    },
    {
      title: 'Content Creator',
      location: 'Perambalur, TamilNadu',
      salary: '₹10,000 - ₹15,000/month (Freshers)',
      summary: 'Creative Content Creator to develop engaging content for social media platforms.',
      responsibilities: [
        'Create engaging content for social media platforms',
        'Develop content strategies to increase audience engagement',
        'Stay up-to-date with social media trends',
        'Collaborate with the marketing team'
      ],
      qualifications: [
        'Proven experience with a strong portfolio of social media content',
        'Excellent writing and communication skills',
        'Proficiency in social media management tools',
        'Ability to work independently and meet deadlines'
      ]
    },
    {
      title: 'Office Assistant',
      location: 'Perambalur, TamilNadu',
      salary: '₹8,000 - ₹10,000/month (Freshers)',
      summary: 'Reliable and organized Office Assistant to support daily operations.',
      responsibilities: [
        'Manage phone calls and emails',
        'Greet and assist visitors',
        'Maintain office supplies and organization',
        'Assist with basic bookkeeping and data entry',
        'Run errands as needed (banking, deliveries, etc.)'
      ],
      qualifications: [
        'Valid driving license for 2 and 4-wheelers required',
        'High school diploma or equivalent',
        'Basic computer skills (MS Office)',
        'Excellent communication and organization skills',
        'A positive and professional attitude'
      ]
    }
  ];

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        <div className="bg-gradient-to-b from-foreground to-foreground/90 text-background py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-careers-title">
              Join Our Team
            </h1>
            <p className="text-xl text-background/90 mb-4" data-testid="text-careers-subtitle">
              Be part of something extraordinary
            </p>
            <p className="text-lg text-background/80 max-w-3xl mx-auto" data-testid="text-careers-intro">
              At Greator Software, we're always looking for talented individuals passionate about 
              technology and innovation. Join our team and help us build the future.
            </p>
          </div>
        </div>

        <div className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center" data-testid="text-openings-title">
              Current Openings
            </h2>

            <div className="space-y-6">
              {jobs.map((job, index) => (
                <Card key={index} className="overflow-hidden" data-testid={`card-job-${index}`}>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-card-foreground mb-2" data-testid={`text-job-title-${index}`}>
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <Badge variant="secondary" className="gap-1" data-testid={`badge-job-location-${index}`}>
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="secondary" className="gap-1" data-testid={`badge-job-salary-${index}`}>
                            <IndianRupee className="h-3 w-3" />
                            {job.salary}
                          </Badge>
                        </div>
                        <p className="text-foreground leading-relaxed" data-testid={`text-job-summary-${index}`}>
                          {job.summary}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        onClick={() => toggleJob(index)}
                        className="self-start"
                        data-testid={`button-toggle-job-${index}`}
                      >
                        {expandedJob === index ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </Button>
                    </div>

                    {expandedJob === index && (
                      <div className="mt-6 pt-6 border-t border-card-border space-y-6" data-testid={`div-job-details-${index}`}>
                        <div>
                          <h4 className="text-lg font-semibold text-card-foreground mb-3" data-testid={`text-job-responsibilities-title-${index}`}>
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="text-sm text-foreground flex items-start gap-2" data-testid={`text-job-responsibility-${index}-${respIndex}`}>
                                <span className="text-primary mt-1">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-card-foreground mb-3" data-testid={`text-job-qualifications-title-${index}`}>
                            Qualifications
                          </h4>
                          <ul className="space-y-2">
                            {job.qualifications.map((qual, qualIndex) => (
                              <li key={qualIndex} className="text-sm text-foreground flex items-start gap-2" data-testid={`text-job-qualification-${index}-${qualIndex}`}>
                                <span className="text-primary mt-1">•</span>
                                <span>{qual}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {job.offer && (
                          <div>
                            <h4 className="text-lg font-semibold text-card-foreground mb-3" data-testid={`text-job-offer-title-${index}`}>
                              What We Offer
                            </h4>
                            <ul className="space-y-2">
                              {job.offer.map((item, offerIndex) => (
                                <li key={offerIndex} className="text-sm text-foreground flex items-start gap-2" data-testid={`text-job-offer-${index}-${offerIndex}`}>
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <Button className="w-full md:w-auto" data-testid={`button-apply-${index}`}>
                          Apply Now
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
