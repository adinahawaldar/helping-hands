import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <div className="relative w-full py-20 md:py-24 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_stacked_hands.png"
          alt="Hands stacked in unity"
          className="w-full h-full object-cover object-center"
        />
        {/* Sleek Dark Multiplied Overlay & Gradient */}
        <div className="absolute inset-0 bg-[#1A1A18]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A18]/70 via-[#1A1A18]/40 to-[#1A1A18]/90" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6 md:gap-8">
        {/* Small Tagline */}
        <span className="text-[11px] font-extrabold tracking-widest text-[#BE5B39] uppercase">
          Make a difference today
        </span>
        
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Be someone's <br />
          <span className="italic font-light text-neutral-200">reason to smile</span>
        </h2>

        <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Your support feeds a child, finances a medical cure, and rebuilds communities. Start contributing today and make an immediate, life-saving impact.
        </p>

        <div className="mt-4">
          <Link
            to="/causes"
            className="bg-white hover:bg-neutral-100 text-[#1A1A18] px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group hover:scale-[1.02]"
          >
            <span>Start Helping Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CTA
