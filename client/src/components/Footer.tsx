import { Link } from 'wouter';
import logoImage from '@assets/generated-image (3)_1762624533355.png';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Greator Software" className="h-10 w-10" data-testid="img-footer-logo" />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none" data-testid="text-footer-brand">Greator</span>
                <span className="text-sm font-semibold text-background/80 leading-none" data-testid="text-footer-subtitle">Software</span>
              </div>
            </div>
            <p className="text-background/90 text-sm" data-testid="text-footer-tagline">
              Transforming ideas into intelligent solutions
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-quicklinks-title">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-background text-sm" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="text-background/80 hover:text-background text-sm" data-testid="button-footer-services">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="text-background/80 hover:text-background text-sm" data-testid="button-footer-portfolio">
                  Portfolio
                </button>
              </li>
              <li>
                <Link href="/careers" className="text-background/80 hover:text-background text-sm" data-testid="link-footer-careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-contact-title">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/90" data-testid="text-footer-email">
                gunasekaran@greatorsoftware.com
              </li>
              <li className="text-background/90" data-testid="text-footer-chennai-phone">
                Chennai: +91 91501 83874
              </li>
              <li className="text-background/90" data-testid="text-footer-perambalur-phone">
                Perambalur: +91 63856 29914
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 text-sm" data-testid="text-footer-copyright">
            © 2025 Greator Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
