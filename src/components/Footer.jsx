import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Vision */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-brand-charcoal flex items-center justify-center text-brand-bg">
                <Heart className="w-4.5 h-4.5 fill-current" />
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight text-brand-charcoal">
                Helping Hands
              </span>
            </Link>
            <p className="text-brand-brown text-sm leading-relaxed max-w-sm">
              We connect passionate donors with verified NGOs to build transparent, high-impact communities. Together, we provide clean water, quality education, medical aid, and emergency shelters.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-brand-sand-dark/20 flex items-center justify-center text-brand-brown hover:text-brand-charcoal hover:border-brand-charcoal transition-all" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-brand-sand-dark/20 flex items-center justify-center text-brand-brown hover:text-brand-charcoal hover:border-brand-charcoal transition-all" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-brand-sand-dark/20 flex items-center justify-center text-brand-brown hover:text-brand-charcoal hover:border-brand-charcoal transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-charcoal uppercase">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/causes" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150 inline-flex items-center gap-1">
                  Browse Causes <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/ngos" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  Verified NGOs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Dashboard Portal links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-charcoal uppercase">
              Portals
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/login" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  Donor Login
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  NGO Portal
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-charcoal uppercase">
              Support
            </h4>
            <ul className="flex flex-col gap-3 text-brand-brown text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 shrink-0 text-brand-charcoal mt-0.5" />
                <span>support@helpinghands.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 shrink-0 text-brand-charcoal mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-brand-charcoal mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <hr className="border-neutral-200 my-12" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-brown">
          <p>© {currentYear} Helping Hands. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-charcoal transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-charcoal transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
