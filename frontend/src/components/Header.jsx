import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Header = ({ cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Hem', path: '/' },
    { name: 'Produkter', path: '/produkter' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://customer-assets.emergentagent.com/job_99647620-aa0d-48cd-947c-c21a78f050c5/artifacts/ekb3cgx0_a2324df2-849a-44a3-b779-1569a30de3ac.png"
              alt="SD Skåne"
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <h1 className="text-xl font-bold text-[#1a237e]">SD Skånebutiken</h1>
              <p className="text-xs text-gray-600">För ett bättre Sverige</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-300 relative ${
                  isActive(link.path)
                    ? 'text-[#1a237e]'
                    : 'text-gray-600 hover:text-[#1a237e]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#1a237e]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link to="/varukorg">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-blue-50 transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-[#1a237e]" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500 hover:bg-red-600 text-white text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-blue-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1a237e]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1a237e]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-[#1a237e] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
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
