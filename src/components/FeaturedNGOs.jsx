import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

const FeaturedNGOs = () => {
  const ngos = [
    {
      id: 1,
      name: 'ABC Foundation',
      verified: true,
      focus: 'Education Support',
      desc: 'ABC Foundation is a registered charity dedicated to reducing school dropout rates in low-income urban settlements.',
      projectsCount: 12,
      impactCount: '5,000+ Students Helped',
      logoLetter: 'A'
    },
    {
      id: 2,
      name: 'Feeding Hands NGO',
      verified: true,
      focus: 'Hunger Relief',
      desc: 'Feeding Hands operates community kitchens that provide cooked meals and dry ration packs to needy households.',
      projectsCount: 8,
      impactCount: '25,000+ Meals Served',
      logoLetter: 'F'
    },
    {
      id: 3,
      name: 'Care & Cure Trust',
      verified: true,
      focus: 'Healthcare Services',
      desc: 'Care & Cure organizes rural medical camps, subsidizes primary treatments, and sponsors emergency surgeries.',
      projectsCount: 15,
      impactCount: '1,200+ Surgeries Funded',
      logoLetter: 'C'
    }
  ]

  return (
    <div className="bg-white py-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1 bg-[#D4F5D1] text-[#02592F] px-3.5 py-1 rounded-[6px] text-xs font-bold font-sans tracking-wide">
            <span>☆</span>
            <span>Partnership & Verification</span>
          </div>
          {/* Main Title */}
          <h2 className="font-serif text-[2.2rem] min-[380px]:text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] font-bold tracking-tight text-[#1A1A18] leading-[1.15] mt-3">
            Meet our verified NGOs
          </h2>
          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-neutral-500 font-normal max-w-2xl mt-1">
            We partner with trusted, registered charities to ensure 100% direct accountability and transparent updates.
          </p>
        </div>

        {/* NGOs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ngos.map((ngo) => (
            <div
              key={ngo.id}
              className="bg-[#FAF8F5] border border-neutral-100/90 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Header: Logo avatar & verified badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A18] text-white flex items-center justify-center font-serif text-xl font-bold">
                    {ngo.logoLetter}
                  </div>
                  {ngo.verified && (
                    <span className="bg-white border border-neutral-100 text-neutral-500 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-50 shrink-0" />
                      <span>Verified NGO</span>
                    </span>
                  )}
                </div>

                {/* Title & Info */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A18]">
                    {ngo.name}
                  </h3>
                  <span className="text-xs font-bold text-[#BE5B39] tracking-wider uppercase">
                    {ngo.focus}
                  </span>
                  <p className="text-neutral-500 text-sm leading-relaxed mt-2 line-clamp-3">
                    {ngo.desc}
                  </p>
                </div>
              </div>

              <div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 border-t border-neutral-200/60 pt-6 mt-6 text-xs">
                  <div>
                    <span className="text-neutral-400 block font-sans">Active Campaigns</span>
                    <span className="font-bold text-neutral-800 text-sm">{ngo.projectsCount} Projects</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block font-sans">Reported Impact</span>
                    <span className="font-bold text-neutral-800 text-sm">{ngo.impactCount}</span>
                  </div>
                </div>

                {/* Action Row */}
                <div className="mt-6 pt-5 border-t border-neutral-200/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-400">PARTNER NGO</span>
                  <Link
                    to={`/ngo/${ngo.id}`}
                    className="bg-[#1A1A18] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#BE5B39] transition-all"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All (More) Button */}
        <div className="mt-12 text-center">
          <Link
            to="/ngos"
            className="inline-flex items-center justify-center border border-neutral-200 bg-white hover:bg-neutral-50 px-8 py-3 rounded-full text-sm font-bold text-[#1A1A18] transition-all hover:scale-[1.02]"
          >
            View all verified NGOs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedNGOs
