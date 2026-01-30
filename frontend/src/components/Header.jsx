import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Header = ({ cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hem', path: '/' },
    { name: 'Produkter', path: '/produkter' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass-header shadow-lg shadow-black/20'
        : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://customer-assets.emergentagent.com/job_99647620-aa0d-48cd-947c-c21a78f050c5/artifacts/ekb3cgx0_a2324df2-849a-44a3-b779-1569a30de3ac.png"
              alt="SD Skåne"
              className="w-12 h-12 lg:w-14 lg:h-14 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg"
            />
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight">SD Skånebutiken</h1>
              <p className="text-xs text-sd-blue-light font-medium hidden sm:block">För ett bättre Sverige</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base lg:text-lg font-semibold transition-all duration-300 relative group ${isActive(link.path)
                    ? 'text-sd-blue'
                    : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-sd-blue to-sd-blue-light transition-all duration-300 ${isActive(link.path) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}></span>
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Link to="/varukorg">
              <Button
                variant="ghost"
                size="icon"
                className="relative glass-button hover:shadow-glow transition-all duration-300 w-11 h-11 lg:w-12 lg:h-12 rounded-xl"
              >
                <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center p-0 bg-sd-yellow hover:bg-sd-yellow-light text-sd-navy text-xs font-bold border-2 border-sd-navy animate-scale-in">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass-button hover:shadow-glow w-11 h-11 rounded-xl transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${isActive(link.path)
                      ? 'bg-sd-blue text-white shadow-glow'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
