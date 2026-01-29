import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a237e] to-[#283593] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_99647620-aa0d-48cd-947c-c21a78f050c5/artifacts/ekb3cgx0_a2324df2-849a-44a3-b779-1569a30de3ac.png"
                alt="SD Skåne"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold">SD Skånebutiken</h2>
                <p className="text-blue-200 text-sm">För ett bättre Sverige</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Välkommen till vår officiella webbutik för profilprodukter och kläder. 
              Vi erbjuder högkvalitativa produkter för alla sverigedemokrater.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/produkter" className="text-blue-100 hover:text-white transition-colors">
                  Produkter
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-blue-100 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/varukorg" className="text-blue-100 hover:text-white transition-colors">
                  Varukorg
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakta oss</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:070-8146884" className="text-blue-100 hover:text-white transition-colors">
                  070-814 68 84
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:skane@sd.se" className="text-blue-100 hover:text-white transition-colors">
                  skane@sd.se
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  SD Skånes distriktskansli<br />
                  Hässleholm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © {currentYear} SD Skånebutiken. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
