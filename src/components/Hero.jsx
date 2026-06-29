import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-10 flex flex-col gap-4 sm:gap-6">
        
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 w-full">
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
            className="bg-[#1A1A18] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-neutral-800 transition-all select-none w-max shadow-sm hover:scale-[1.02] border border-neutral-800 self-start sm:self-auto sm:mb-2"
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
    </div>
  )
}

export default Hero
