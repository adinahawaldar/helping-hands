import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { mockCauses } from '../data/mockCauses'
import { ShieldCheck, Calendar, Users, Heart, Award, ArrowLeft, ArrowUpRight } from 'lucide-react'

const CauseDetail = () => {
  const { id } = useParams()
  const [cause, setCause] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch campaign details and scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    
    const causeId = id ? parseInt(id) : 1
    
    fetch(`http://localhost:5000/api/causes/${causeId}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found in backend')
        return res.json()
      })
      .then(data => {
        setCause(data)
        setLoading(false)
      })
      .catch(err => {
        console.log('Using local mockCauses fallback', err)
        const fallbackCause = mockCauses.find(c => c.id === causeId) || mockCauses[0]
        setCause(fallbackCause)
        setLoading(false)
      })
  }, [id])

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value)
  }

  if (loading) {
    return (
      <div className="bg-white min-h-screen py-24 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-brand-charcoal border-t-transparent rounded-full animate-spin" />
          <p className="text-neutral-500 font-serif italic text-sm">Fetching campaign details...</p>
        </div>
      </div>
    )
  }

  if (!cause) {
    return (
      <div className="bg-white min-h-screen py-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6 flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-bold text-brand-charcoal">Campaign Not Found</h2>
          <p className="text-neutral-500 text-sm">The campaign you are looking for does not exist or has not been verified yet.</p>
          <Link to="/causes" className="bg-[#1A1A18] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#BE5B39] transition-all">
            Back to Fundraisers
          </Link>
        </div>
      </div>
    )
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
                <span className="text-[10px] bg-red-50 text-red-650 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  {cause.condition || cause.category}
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
                <span>{cause.isVerified ? 'Verified' : 'Pending Check'}</span>
              </div>
            </div>

            {/* Campaign Story */}
            <div className="flex flex-col gap-5 border-t border-neutral-150 pt-8">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A18]">
                The Story
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
                {cause.longDescription || cause.detail}
              </p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-2">
                Every single rupee contributed through Helping Hands goes directly to the hospital/NGO billing account. Real-time receipts, audit logs, and status updates will be published right here on the campaign page.
              </p>
            </div>

            {/* Supporting Images Gallery */}
            {cause.supportingImages && cause.supportingImages.length > 0 && (
              <div className="flex flex-col gap-4 border-t border-neutral-150 pt-8">
                <h3 className="font-serif text-xl font-bold text-[#1A1A18]">
                  Supporting Media & Evidence
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {cause.supportingImages.map((img, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-xs">
                      <img 
                        src={img} 
                        alt={`Supporting document ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                        onClick={() => window.open(img, '_blank')}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verification Documents & Badges */}
            {((cause.verificationDocs && cause.verificationDocs.length > 0) || !cause.ngo.includes("Independent")) && (
              <div className="flex flex-col gap-4 border-t border-neutral-150 pt-8">
                <h3 className="font-serif text-xl font-bold text-[#1A1A18]">
                  Verification Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
                    <ShieldCheck className="w-4.5 h-4.5 shrink-0 text-emerald-600" />
                    <span>Identity Verification: {cause.isVerified ? 'Passed' : 'In Progress'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
                    <ShieldCheck className="w-4.5 h-4.5 shrink-0 text-emerald-600" />
                    <span>Documentation Check: {cause.isVerified ? 'Passed' : 'In Progress'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
                    <ShieldCheck className="w-4.5 h-4.5 shrink-0 text-emerald-600" />
                    <span>Beneficiary Audit: {cause.isVerified ? 'Completed' : 'In Progress'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
                    <ShieldCheck className="w-4.5 h-4.5 shrink-0 text-emerald-600" />
                    <span>Direct Hospital Transfer: Confirmed</span>
                  </div>
                </div>
                {cause.verificationDocs && cause.verificationDocs.length > 0 && (
                  <div className="mt-2 flex flex-col gap-2">
                    <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Uploaded Audit Evidence:</span>
                    <div className="flex flex-wrap gap-2">
                      {cause.verificationDocs.map((doc, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            const newTab = window.open();
                            newTab.document.write(`<iframe src="${doc}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
                          }}
                          className="px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded-lg text-xs font-medium text-brand-charcoal transition-colors cursor-pointer"
                        >
                          Verification_Document_{idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

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
                  <span>{cause.donorsCount || 0} Supporters</span>
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
                    <strong className="text-xs text-neutral-800 font-bold">{cause.donorsCount || 0}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-[#1A1A18] shrink-0">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">Time Left</span>
                    <strong className="text-xs text-neutral-800 font-bold">{cause.daysLeft || 30} Days</strong>
                  </div>
                </div>
              </div>

              {/* Support Details */}
              <div className="flex flex-col gap-3">
                <Link
                  to={cause.isVerified ? `/donate/${cause.id}` : '#'}
                  className={`w-full text-white py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 ${
                    cause.isVerified 
                      ? 'bg-[#1A1A18] hover:bg-[#333330] hover:scale-[1.01]' 
                      : 'bg-neutral-350 cursor-not-allowed opacity-50'
                  }`}
                  onClick={(e) => {
                    if (!cause.isVerified) {
                      e.preventDefault();
                      alert("This campaign is pending verification and cannot accept donations yet.");
                    }
                  }}
                >
                  <Heart className={`w-4.5 h-4.5 fill-current ${cause.isVerified ? 'text-red-500 animate-pulse' : 'text-neutral-400'}`} />
                  <span>{cause.isVerified ? 'Donate Now' : 'Pending Verification'}</span>
                </Link>
                
                <p className="text-[11px] text-neutral-400 text-center font-medium">
                  {cause.isVerified ? 'Payments are secure, 80G tax benefit applicable.' : 'Fundraiser is being audited. Donations will open once verified.'}
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
