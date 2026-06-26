import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { mockCauses } from '../data/mockCauses'
import { ShieldCheck, Calendar, Users, Heart, Award, ArrowLeft, ArrowUpRight } from 'lucide-react'

const CauseDetail = () => {
  const { id } = useParams()
  
  // Find specific campaign
  const causeId = id ? parseInt(id) : 1
  const cause = mockCauses.find(c => c.id === causeId) || mockCauses[0]

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="bg-white min-h-screen py-12 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <Link 
          to="/causes" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 font-semibold text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all fundraisers
        </Link>

        {/* Cause Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Campaign Media, Story & Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Condition Badge & Title */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-red-50 text-red-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  {cause.condition}
                </span>
                <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider flex items-center gap-1 select-none">
                  • <span>{cause.location}</span>
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A18] leading-[1.1]">
                {cause.title}
              </h1>
            </div>

            {/* Campaign Large Image */}
            <div className="aspect-[16/9] w-full rounded-[2rem] overflow-hidden shadow-sm border border-neutral-100 bg-neutral-100">
              <img 
                src={cause.image} 
                alt={cause.title} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* NGO Partner Info Box */}
            <div className="flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-full bg-[#EAE3D2] flex items-center justify-center text-[#7D725C] font-bold text-sm shrink-0 uppercase select-none">
                {cause.ngo.slice(0, 2)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Verified Organizer</span>
                <strong className="text-sm text-[#1A1A18] font-bold truncate">{cause.ngo}</strong>
                <span className="text-xs text-neutral-500 font-medium">Registered NGO • 100% Tax Exempt (80G)</span>
              </div>
              <div className="ml-auto bg-emerald-50 text-emerald-700 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shrink-0 flex items-center gap-1 select-none">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified</span>
              </div>
            </div>

            {/* Campaign Story */}
            <div className="flex flex-col gap-5 border-t border-neutral-150 pt-8">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A18]">
                The Story
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
                {cause.longDescription}
              </p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-2">
                Every single rupee contributed through Helping Hands goes directly to the hospital/NGO billing account. Real-time receipts, audit logs, and status updates will be published right here on the campaign page.
              </p>
            </div>

            {/* Safe Giving Info */}
            <div className="bg-[#EAE3D2]/30 border border-[#7D725C]/20 rounded-2xl p-6 text-sm text-[#7D725C] leading-relaxed flex gap-3.5 items-start mt-4">
              <Award className="w-6 h-6 shrink-0 text-[#BE5B39]" />
              <div className="flex flex-col gap-1">
                <strong className="font-bold text-neutral-800">Helping Hands Transparency Pipeline</strong>
                <span>We verify identity documents, hospital certifications, and utilize direct bank accounts to ensure zero funds go missing. Audit statements are uploaded quarterly.</span>
              </div>
            </div>

          </div>

          {/* Right Side: Donation Progress & Checkout Sticky Panel (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-6">
            
            {/* Progress Card */}
            <div className="bg-white border border-[#1A1A18] rounded-[2.5rem] p-8 shadow-lg flex flex-col gap-6">
              
              {/* Stats Grid */}
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#1A1A18]">
                    {formatCurrency(cause.raised)}
                  </span>
                  <span className="text-xs text-neutral-400 font-bold uppercase">
                    raised of {formatCurrency(cause.goal)}
                  </span>
                </div>
                
                {/* Horizontal Progress Bar */}
                <div className="w-full h-3.5 bg-neutral-100 rounded-full overflow-hidden mt-1 border border-neutral-200/50">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-700" 
                    style={{ width: `${Math.min(cause.percentage, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs mt-1 font-semibold text-neutral-500">
                  <span className="text-emerald-600 font-bold">{cause.percentage}% Funded</span>
                  <span>{cause.donorsCount} Supporters</span>
                </div>
              </div>

              {/* Campaign Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 border-y border-neutral-100 py-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-[#1A1A18] shrink-0">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">Donors</span>
                    <strong className="text-xs text-neutral-800 font-bold">{cause.donorsCount}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-[#1A1A18] shrink-0">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">Time Left</span>
                    <strong className="text-xs text-neutral-800 font-bold">{cause.daysLeft} Days</strong>
                  </div>
                </div>
              </div>

              {/* Support Details */}
              <div className="flex flex-col gap-3">
                <Link
                  to={`/donate/${cause.id}`}
                  className="w-full bg-[#1A1A18] text-white hover:bg-[#333330] py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <Heart className="w-4.5 h-4.5 fill-current text-red-500 animate-pulse" />
                  <span>Donate Now</span>
                </Link>
                
                <p className="text-[11px] text-neutral-400 text-center font-medium">
                  Payments are secure, 80G tax benefit applicable.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default CauseDetail
