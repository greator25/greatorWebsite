import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
            Get in touch with our team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-contact-email">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid="text-email-title">Email</h3>
            <a 
              href="mailto:gunasekaran@greatorsoftware.com" 
              className="text-primary hover:underline"
              data-testid="link-email"
            >
              gunasekaran@greatorsoftware.com
            </a>
          </Card>

          <Card className="p-8 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-contact-chennai">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid="text-chennai-title">Head Office - Chennai</h3>
            <p className="text-foreground mb-2" data-testid="text-chennai-location">Chennai, Tamil Nadu</p>
            <a 
              href="tel:+919150183874" 
              className="text-primary hover:underline"
              data-testid="link-chennai-phone"
            >
              +91 91501 83874
            </a>
          </Card>

          <Card className="p-8 text-center hover-elevate active-elevate-2 transition-all" data-testid="card-contact-perambalur">
            <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid="text-perambalur-title">Branch Office - Perambalur</h3>
            <p className="text-sm text-foreground mb-2" data-testid="text-perambalur-address">
              First Floor, No.1, Qasim Complex, Abiramipuram<br />
              Collector office bypass road, Perambalur-621211
            </p>
            <a 
              href="tel:+916385629914" 
              className="text-primary hover:underline"
              data-testid="link-perambalur-phone"
            >
              +91 63856 29914
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
