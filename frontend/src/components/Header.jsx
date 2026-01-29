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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-premium border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="https://customer-assets.emergentagent.com/job_99647620-aa0d-48cd-947c-c21a78f050c5/artifacts/ekb3cgx0_a2324df2-849a-44a3-b779-1569a30de3ac.png"
              alt="SD Skåne"
              className="w-14 h-14 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#1a237e] tracking-tight">SD Skånebutiken</h1>
              <p className="text-xs text-gray-600 font-medium">För ett bättre Sverige</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-semibold transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-[#1a237e]'
                    : 'text-gray-600 hover:text-[#1a237e]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-[#1a237e] transition-all duration-300 ${
                  isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link to="/varukorg">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-blue-50 transition-all duration-300 w-12 h-12 rounded-xl"
              >
                <ShoppingCart className="w-6 h-6 text-[#1a237e]" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center p-0 bg-red-500 hover:bg-red-600 text-white text-xs font-bold border-2 border-white">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-blue-50 w-12 h-12 rounded-xl transition-all duration-300"
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
          <nav className="md:hidden py-6 border-t">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-[#1a237e] text-white shadow-lg'
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
