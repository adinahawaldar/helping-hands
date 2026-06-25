import React from 'react'
import { Link } from 'react-router-dom'
import { Smile, ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <div className="bg-brand-bg py-24 md:py-32 relative overflow-hidden">
      {/* Decorative light glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-sand/30 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6 md:gap-8">
        <div className="w-12 h-12 rounded-full bg-brand-sand/50 flex items-center justify-center text-brand-charcoal mb-2">
          <Smile className="w-6 h-6" />
        </div>
        
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-brand-charcoal leading-tight">
          Be someone's <br />
          <span className="italic font-normal">reason to smile</span>
        </h2>

        <p className="text-brand-brown text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Your support feeds a child, finances a medical cure, and rebuilds communities. Start contributing today and make an impact.
        </p>

        <Link
          to="/causes"
          className="bg-brand-charcoal text-brand-bg px-8 py-3.5 rounded-full font-medium text-sm hover:bg-brand-sand-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 group"
        >
          <span>Start Helping</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export default CTA
