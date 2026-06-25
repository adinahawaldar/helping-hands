import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Vision */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <span className="font-sans text-xl font-bold tracking-tight">
                <span className="text-[#BE5B39]">Helping</span>
                <span className="text-[#1A1A18]">Hands</span>
              </span>
            </Link>
            <p className="text-brand-brown text-sm leading-relaxed max-w-sm">
              We connect passionate donors with verified NGOs to build transparent, high-impact communities. Together, we provide clean water, quality education, medical aid, and emergency shelters.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-charcoal uppercase">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/about" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/causes" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150 inline-flex items-center gap-1">
                  Sponsor a Child <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="#" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-brown hover:text-brand-charcoal text-sm transition-colors duration-150">
                  Contact Us
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
                <Phone className="w-4 h-4 shrink-0 text-[#1A1A18] mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#1A1A18] mt-0.5" />
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
            <Link to="#" className="hover:text-brand-charcoal transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-charcoal transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

