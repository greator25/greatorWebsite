import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/generated-image (3)_1762624533355.png';

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '#services', label: 'Services' },
    { path: '#portfolio', label: 'Portfolio' },
    { path: '/careers', label: 'Careers' },
    { path: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card border-b border-card-border z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md">
            <img src={logoImage} alt="Greator Software" className="h-8 w-8" data-testid="img-logo" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-none" data-testid="text-brand-name">Greator</span>
              <span className="text-sm font-semibold text-muted-foreground leading-none" data-testid="text-brand-subtitle">Software</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.path.startsWith('#') ? (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                  data-testid={`button-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover-elevate active-elevate-2 ${
                    location === link.path
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-card-border">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              link.path.startsWith('#') ? (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-md"
                  data-testid={`button-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium rounded-md hover-elevate active-elevate-2 ${
                    location === link.path
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
