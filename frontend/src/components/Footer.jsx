import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sd-navy via-sd-navy-300 to-sd-navy-400 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 lg:gap-4 mb-5 lg:mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_99647620-aa0d-48cd-947c-c21a78f050c5/artifacts/ekb3cgx0_a2324df2-849a-44a3-b779-1569a30de3ac.png"
                alt="SD Skåne"
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-lg"
              />
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">SD Skånebutiken</h2>
                <p className="text-sd-blue-light text-xs lg:text-sm font-medium">För ett bättre Sverige</p>
              </div>
            </div>
            <p className="text-white/60 mb-6 max-w-md leading-relaxed font-light text-sm lg:text-base">
              Välkommen till vår officiella webbutik för profilprodukter och kläder.
              Vi erbjuder högkvalitativa produkter för alla sverigedemokrater.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-5 lg:mb-6 text-white">Snabblänkar</h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-sd-blue transition-colors duration-300 font-medium text-sm lg:text-base">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/produkter" className="text-white/60 hover:text-sd-blue transition-colors duration-300 font-medium text-sm lg:text-base">
                  Produkter
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-white/60 hover:text-sd-blue transition-colors duration-300 font-medium text-sm lg:text-base">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/varukorg" className="text-white/60 hover:text-sd-blue transition-colors duration-300 font-medium text-sm lg:text-base">
                  Varukorg
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-5 lg:mb-6 text-white">Kontakta oss</h3>
            <ul className="space-y-3 lg:space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sd-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-sd-blue" />
                </div>
                <a href="tel:070-8146884" className="text-white/60 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base">
                  070-814 68 84
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sd-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-sd-blue" />
                </div>
                <a href="mailto:skane@sd.se" className="text-white/60 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base">
                  skane@sd.se
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sd-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-sd-blue" />
                </div>
                <span className="text-white/60 font-medium text-sm lg:text-base">
                  SD Skånes distriktskansli<br />Hässleholm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 lg:mt-12 pt-6 lg:pt-8 text-center">
          <p className="text-white/40 font-light text-sm lg:text-base">
            © {currentYear} SD Skånebutiken. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
