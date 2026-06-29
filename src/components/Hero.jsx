import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-10 flex flex-col gap-4 sm:gap-6">
        
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1.5">
            <h1 className="font-sans font-extrabold uppercase tracking-tight text-[2.25rem] min-[360px]:text-[2.75rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] text-[#1A1A18] leading-[0.9]">
              Your <span className="text-[#BE5B39]">Impact</span>, <br />
              Our Mission
            </h1>
            <p className="font-sans text-[10px] sm:text-xs font-bold tracking-wider text-[#7D725C] uppercase">
              Connecting Verified Local Initiatives Directly With Donors
            </p>
          </div>
          <Link
            to="/about"
            className="bg-[#1A1A18] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-neutral-800 transition-all select-none w-max shadow-sm hover:scale-[1.02] border border-neutral-800"
          >
            Learn More
          </Link>
        </div>

        <div className="relative w-full h-[200px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-[2rem] overflow-hidden group shadow-md border border-neutral-100">
          <img
            src="/hero_unity.png"
            alt="Communities joined in unity"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-[#BE5B39]/10 mix-blend-color"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18]/90 via-[#1A1A18]/30 to-[#1A1A18]/10"></div>

          <div className="absolute inset-0 p-3 sm:p-6 md:p-8 flex flex-col justify-end">
            <div className="flex items-end justify-between gap-2 sm:gap-4 w-full">
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-5 max-w-[75%] sm:max-w-lg shadow-lg">
                <span className="inline-flex items-center justify-center bg-[#BE5B39] text-white text-[7px] sm:text-[8px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full mb-1.5 sm:mb-2 select-none">
                  Urgent Need
                </span>
                <h3 className="text-white text-[10px] min-[360px]:text-[11px] sm:text-base md:text-lg font-bold tracking-tight mb-0.5 sm:mb-1 leading-snug">
                  Direct relief where it matters most
                </h3>
                <p className="text-white/90 text-[8px] min-[360px]:text-[9px] sm:text-xs font-normal leading-relaxed">
                  Explore active emergency relief campaigns, verified medical causes, and educational support projects vetted on the ground.
                </p>
              </div>

              <Link
                to="/causes"
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-[#1A1A18] flex items-center justify-center shadow-lg hover:scale-105 hover:bg-[#FAF8F5] transition-all duration-300 shrink-0 select-none cursor-pointer"
                aria-label="View causes"
              >
                <ArrowUpRight className="w-5 h-5 sm:w-6.5 sm:h-6.5 text-[#BE5B39]" strokeWidth={2.5} />
              </Link>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 w-full">
          
          <div className="bg-[#FAF8F5] border border-[#EAE3D2]/50 rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-6 flex flex-col justify-between min-h-[90px] sm:min-h-[120px] relative group hover:bg-[#FAF6F0] hover:border-[#EAE3D2] transition-all duration-300">
            <span className="font-sans font-extrabold text-lg min-[360px]:text-xl sm:text-4xl lg:text-[2.75rem] text-[#1A1A18] tracking-tight leading-none">
              10K+
            </span>
            <div className="flex items-end justify-between w-full mt-2">
              <span className="font-sans text-[7px] sm:text-[10px] font-bold text-[#7D725C] uppercase tracking-widest leading-none">
                Meals Provided
              </span>
              <Link
                to="/causes"
                className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#1A1A18] hover:bg-[#BE5B39] text-white flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="Meals causes"
              >
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" strokeWidth={2.2} />
              </Link>
            </div>
          </div>

          <div className="bg-[#FAF8F5] border border-[#EAE3D2]/50 rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-6 flex flex-col justify-between min-h-[90px] sm:min-h-[120px] relative group hover:bg-[#FAF6F0] hover:border-[#EAE3D2] transition-all duration-300">
            <div className="flex justify-between items-start w-full">
              <span className="font-sans font-extrabold text-lg min-[360px]:text-xl sm:text-4xl lg:text-[2.75rem] text-[#1A1A18] tracking-tight leading-none">
                200+
              </span>
              <span className="inline-flex items-center justify-center bg-[#BE5B39]/10 border border-[#BE5B39]/20 text-[#BE5B39] text-[6px] sm:text-[8px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded select-none">
                Vetted
              </span>
            </div>
            <div className="w-full mt-2">
              <span className="font-sans text-[7px] sm:text-[10px] font-bold text-[#7D725C] uppercase tracking-widest leading-none">
                NGOs Connected
              </span>
            </div>
          </div>

          <div className="bg-[#1A1A18] border border-transparent rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-6 flex flex-col justify-between min-h-[90px] sm:min-h-[120px] relative group hover:bg-neutral-800 transition-all duration-300 shadow-md">
            <span className="font-sans font-extrabold text-lg min-[360px]:text-xl sm:text-4xl lg:text-[2.75rem] text-white tracking-tight leading-none">
              ₹50L+
            </span>
            <div className="w-full mt-2 flex items-center justify-between">
              <span className="font-sans text-[7px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
                Donations Raised
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#BE5B39] animate-pulse"></span>
            </div>
          </div>

        </div>

      </div>

      <div id="about-us" className="bg-white py-20 border-t border-neutral-100 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
            <h2 className="font-serif text-[2.25rem] min-[380px]:text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] font-bold tracking-tight text-[#1A1A18] leading-[1.15] mt-5 mb-4">
              How Helping Hands Works
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 font-normal max-w-xl">
              Helping Hands makes it easier to support verified causes without searching, guessing, or worrying about where your contribution goes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="bg-white rounded-2xl p-4 shadow-sm w-full flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Categories</span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">Active</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 p-2 bg-neutral-50 rounded-xl">
                    <span className="text-sm">🍲</span>
                    <span className="text-xs font-semibold text-neutral-700">Food & Hunger Relief</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-neutral-50 rounded-xl">
                    <span className="text-sm">🎓</span>
                    <span className="text-xs font-semibold text-neutral-700">Education Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-neutral-50 rounded-xl">
                    <span className="text-sm">🏥</span>
                    <span className="text-xs font-semibold text-neutral-700">Medical Emergency</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                <h3 className="font-serif text-lg font-semibold text-[#1A1A18]">
                  1. Discover Verified Causes
                </h3>
                <p className="text-[#5C5446]/90 text-xs sm:text-[13px] leading-relaxed font-sans">
                  Explore trusted NGOs and genuine emergency cases across education, food, healthcare, and more.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="bg-white rounded-2xl p-4 shadow-sm w-full flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Direct Giving</span>
                  <span className="text-[10px] text-emerald-600 font-bold">100% Secure</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="border border-neutral-200 text-center py-1.5 rounded-lg text-[10px] font-bold text-neutral-700 bg-neutral-50">₹1,000</span>
                  <span className="border-2 border-emerald-600 text-center py-1.5 rounded-lg text-[10px] font-bold text-emerald-700 bg-emerald-50/30">₹5,000</span>
                  <span className="border border-neutral-200 text-center py-1.5 rounded-lg text-[10px] font-bold text-neutral-700 bg-neutral-50">₹10,000</span>
                </div>
                <div className="w-full bg-[#1A1A18] text-white text-center py-2 rounded-xl text-[11px] font-bold shadow-sm">
                  Contribute Now
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                <h3 className="font-serif text-lg font-semibold text-[#1A1A18]">
                  2. Support Directly
                </h3>
                <p className="text-[#5C5446]/90 text-xs sm:text-[13px] leading-relaxed font-sans">
                  Choose a cause and contribute securely. Your support goes directly towards the selected need.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="bg-white rounded-2xl p-4 shadow-sm w-full flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Transparency</span>
                  <span className="text-[10px] text-neutral-500 font-semibold">Real-time</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold shrink-0">✓</div>
                    <span className="text-[11px] font-semibold text-neutral-700">Donation Routed Directly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold shrink-0">✓</div>
                    <span className="text-[11px] font-semibold text-neutral-700">Receipt & Impact Report Sent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold shrink-0">✓</div>
                    <span className="text-[11px] font-semibold text-neutral-700">NGO Utilization Audited</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                <h3 className="font-serif text-lg font-semibold text-[#1A1A18]">
                  3. Track The Impact
                </h3>
                <p className="text-[#5C5446]/90 text-xs sm:text-[13px] leading-relaxed font-sans">
                  Receive updates and see how your contribution helps create real change.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-12 text-neutral-600 font-sans text-xs sm:text-sm font-semibold tracking-wide relative z-20">
            <div className="flex items-center gap-2 select-none">
              <span className="text-[#BE5B39] font-bold">✓</span>
              <span>Verified NGOs & Cases</span>
            </div>
            <div className="flex items-center gap-2 select-none">
              <span className="text-[#BE5B39] font-bold">✓</span>
              <span>Secure Donations</span>
            </div>
            <div className="flex items-center gap-2 select-none">
              <span className="text-[#BE5B39] font-bold">✓</span>
              <span>Transparent Updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
