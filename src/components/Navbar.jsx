import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Heart, Sparkles, Building2 } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-neutral-100 py-4 z-50">
      <div className="px-6 sm:px-10 lg:px-16 w-full">
        {/* Desktop Navbar (MD and larger) */}
        <div className="hidden md:grid md:grid-cols-3 items-center h-12">
          
          {/* Left Side: Dropdown links (Donate, Fundraise) */}
          <div className="flex items-center gap-8 justify-start">
            {/* Donate Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('donate')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[14.5px] font-semibold text-brand-charcoal hover:text-brand-brown py-2 transition-colors cursor-pointer">
                <span>Donate</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'donate' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'donate' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-none shadow-xl border border-neutral-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link to="/ngos" className="flex items-start gap-4 p-2 hover:bg-neutral-50 rounded-none transition-colors">
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-brand-charcoal shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-brand-charcoal">Verified NGO Partners</span>
                      <span className="block text-xs text-neutral-500 mt-0.5">Support vetted operations & programs</span>
                    </div>
                  </Link>
                  
                  <Link to="/causes" className="flex items-start gap-4 p-2 hover:bg-neutral-50 rounded-none transition-colors mt-3">
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-brand-charcoal shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-brand-charcoal">Discover Fundraisers</span>
                      <span className="block text-xs text-neutral-500 mt-0.5">Explore active community campaigns</span>
                    </div>
                  </Link>
                  
                  <div className="mt-4 border-t border-neutral-100 pt-4">
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider px-2 mb-2">Emergency Types</span>
                    <Link to="/causes" className="block px-2 py-1 text-sm text-brand-brown hover:text-brand-charcoal font-medium">Education Support</Link>
                    <Link to="/causes" className="block px-2 py-1 text-sm text-brand-brown hover:text-brand-charcoal font-medium">Food & Hunger Relief</Link>
                    <Link to="/causes" className="block px-2 py-1 text-sm text-brand-brown hover:text-brand-charcoal font-medium">Medical Emergency</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Fundraise Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('fundraise')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[14.5px] font-semibold text-brand-charcoal hover:text-brand-brown py-2 transition-colors cursor-pointer">
                <span>Fundraise</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'fundraise' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'fundraise' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-none shadow-xl border border-neutral-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link to="/contact" className="flex items-start gap-4 p-2 hover:bg-neutral-50 rounded-none transition-colors">
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-brand-charcoal shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-brand-charcoal">Start a Fundraiser</span>
                      <span className="block text-xs text-neutral-500 mt-0.5">Create a campaign for your cause</span>
                    </div>
                  </Link>
                  <div className="mt-4 border-t border-neutral-100 pt-4">
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider px-2 mb-2">Resources</span>
                    <a href="#about-us" className="block px-2 py-1 text-sm text-brand-brown hover:text-brand-charcoal font-medium">How it works</a>
                    <Link to="/impact" className="block px-2 py-1 text-sm text-brand-brown hover:text-brand-charcoal font-medium">Success stories</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center">
              <span className="font-sans text-2xl font-bold tracking-tight">
                <span className="text-[#BE5B39]">Helping</span>
                <span className="text-[#1A1A18]">Hands</span>
              </span>
            </Link>
          </div>

          {/* Right Side: About, Sign in, Pill Button */}
          <div className="flex items-center gap-6 justify-end">
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[14.5px] font-semibold text-brand-charcoal hover:text-brand-brown py-2 transition-colors cursor-pointer">
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'about' && (
                <div className="absolute top-full right-0 w-72 bg-white rounded-none shadow-xl border border-neutral-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link to="/about" className="block p-2 hover:bg-neutral-50 rounded-none transition-colors">
                    <span className="block text-sm font-semibold text-brand-charcoal">Our Mission</span>
                    <span className="block text-xs text-neutral-500 mt-0.5">Grassroots transparency and audit reports</span>
                  </Link>
                  <Link to="/transparency" className="block p-2 hover:bg-neutral-50 rounded-none transition-colors mt-2">
                    <span className="block text-sm font-semibold text-brand-charcoal">Transparency Pipeline</span>
                    <span className="block text-xs text-neutral-500 mt-0.5">Track every donation to the field</span>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/signin" className="text-[14.5px] font-semibold text-brand-charcoal hover:text-brand-brown transition-colors">
              Sign in
            </Link>

            <Link
              to="/causes"
              className="bg-transparent border border-brand-charcoal/20 hover:border-brand-charcoal text-brand-charcoal px-6 py-2 rounded-full text-[14.5px] font-semibold transition-all duration-350 shadow-sm"
            >
              Start Helping
            </Link>
          </div>

        </div>

        {/* Mobile Navbar (Hidden on desktop) */}
        <div className="flex md:hidden justify-between items-center h-12">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1A1A18] hover:text-brand-brown focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/">
            <span className="font-sans text-lg font-bold tracking-tight">
              <span className="text-[#BE5B39]">Helping</span>
              <span className="text-[#1A1A18]">Hands</span>
            </span>
          </Link>

          <Link
            to="/causes"
            className="bg-[#1A1A18] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#333330]"
          >
            Help
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md px-6 py-6 shadow-lg border-b border-neutral-200 animate-in fade-in slide-in-from-top-5 z-50">
          <div className="flex flex-col gap-6">
            
            {/* Donate Section */}
            <div>
              <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Donate</span>
              <div className="flex flex-col gap-3 pl-2">
                <Link to="/causes" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-brand-charcoal">Discover Fundraisers</Link>
                <Link to="/ngos" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-brand-charcoal">Verified NGOs</Link>
              </div>
            </div>

            {/* Fundraise Section */}
            <div>
              <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Fundraise</span>
              <div className="flex flex-col gap-3 pl-2">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-brand-charcoal">Start a Fundraiser</Link>
                <a href="#about-us" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-brand-charcoal">How it works</a>
              </div>
            </div>

            {/* About Section */}
            <div>
              <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">About</span>
              <div className="flex flex-col gap-3 pl-2">
                <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-brand-charcoal">Our Mission</Link>
                <Link to="/transparency" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-brand-charcoal">Transparency Pipeline</Link>
              </div>
            </div>

            <div className="border-t border-brand-sand/35 pt-4 flex flex-col gap-4">
              <Link to="/signin" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-brand-charcoal">Sign in</Link>
              <Link
                to="/causes"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#1A1A18] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#333330]"
              >
                Start Helping
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
