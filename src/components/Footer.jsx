import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Savvy Spectra Solutions</h3>
            <p className="text-sm leading-relaxed">
              Empowering businesses with smart, scalable, and secure IT solutions. Your trusted IT partner for digital transformation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-blue-400 transition-colors">Industries</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>FO-02, 4th Floor, 28/A, Smart Avenue, 80Feet Rd, Indiranagar, Bangalore - 560038</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+919739532183" className="hover:text-blue-400 transition-colors">
                  +91 97395 32183
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:sivakumar@savvyspectra.com" className="hover:text-blue-400 transition-colors">
                  sivakumar@savvyspectra.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Savvy Spectra Solutions Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
