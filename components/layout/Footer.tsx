import Link from 'next/link';
import { Briefcase, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/image.png"
                alt="The Wave"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Connecting talented professionals from UAE with career opportunities in Bulgaria and Serbia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-purple transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-purple transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-purple transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-purple transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-brand-purple-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-brand-purple-light transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-brand-purple-light transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-purple-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-purple-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/eligibility" className="hover:text-brand-purple-light transition-colors">
                  Eligibility Check
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-brand-purple-light transition-colors">
                  Job Placement
                </Link>
              </li>
              <li>
                <span className="hover:text-brand-purple-light transition-colors cursor-pointer">
                  Visa Assistance
                </span>
              </li>
              <li>
                <span className="hover:text-brand-purple-light transition-colors cursor-pointer">
                  Relocation Support
                </span>
              </li>
              <li>
                <span className="hover:text-brand-purple-light transition-colors cursor-pointer">
                  Career Counseling
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-brand-purple-light flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Office 58, Port Saeed, Deira, Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-brand-purple-light flex-shrink-0 mt-0.5" />
                <span className="text-sm">+971 54 3692815</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-brand-purple-light flex-shrink-0 mt-0.5" />
                <span className="text-sm">info@hypewavehr.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Hype Wave HR Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-brand-purple-light transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-purple-light transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
