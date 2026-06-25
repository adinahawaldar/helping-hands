import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, GraduationCap, HeartHandshake, Activity } from 'lucide-react'

const FeaturedNGOs = () => {
  const ngos = [
    {
      id: 1,
      name: 'ABC Foundation',
      verified: true,
      focus: 'Education Support',
      desc: 'ABC Foundation is a registered charity dedicated to reducing school dropout rates in low-income urban settlements.',
      projectsCount: 12,
      impactCount: '5,000+ Students',
      icon: <GraduationCap className="w-6 h-6 text-[#1A1A18]" strokeWidth={1.5} />
    },
    {
      id: 2,
      name: 'Feeding Hands NGO',
      verified: true,
      focus: 'Hunger Relief',
      desc: 'Feeding Hands operates community kitchens that provide cooked meals and dry ration packs to needy households.',
      projectsCount: 8,
      impactCount: '25,000+ Meals',
      icon: <HeartHandshake className="w-6 h-6 text-[#1A1A18]" strokeWidth={1.5} />
    },
    {
      id: 3,
      name: 'Care & Cure Trust',
      verified: true,
      focus: 'Healthcare Services',
      desc: 'Care & Cure organizes rural medical camps, subsidizes primary treatments, and sponsors emergency surgeries.',
      projectsCount: 15,
      impactCount: '1,200+ Surgeries',
      icon: <Activity className="w-6 h-6 text-[#1A1A18]" strokeWidth={1.5} />
    }
  ]

  return (
    <div className="bg-white py-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          {/* Subtle Accent Label */}
          <span className="text-[11px] font-extrabold tracking-widest text-[#BE5B39] uppercase">
            Verified Partnerships
          </span>
          {/* Main Title */}
          <h2 className="font-serif text-[2.5rem] min-[380px]:text-[3rem] sm:text-[3.85rem] md:text-[4.5rem] font-bold tracking-tight text-[#1A1A18] leading-[1.1] mt-5 mb-4">
            Meet our verified partners
          </h2>
          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-neutral-600 font-normal max-w-2xl mt-3">
            We partner with trusted, registered charities to ensure 100% direct accountability and transparent updates.
          </p>
        </div>

        {/* NGOs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ngos.map((ngo) => (
            <div
              key={ngo.id}
              className="bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[1.75rem] p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div>
                {/* Header: Logo container & verified badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-neutral-200/60 flex items-center justify-center">
                    {ngo.icon}
                  </div>
                  {ngo.verified && (
                    <div className="flex items-center gap-1.5 bg-emerald-50/50 border border-emerald-100/80 text-emerald-800 px-3 py-1 rounded-full text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Verified NGO</span>
                    </div>
                  )}
                </div>

                {/* Title & Info */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold text-[#BE5B39] tracking-wider uppercase">
                    {ngo.focus}
                  </span>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-[#1A1A18] mt-1">
                    {ngo.name}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mt-3 line-clamp-3">
                    {ngo.desc}
                  </p>
                </div>
              </div>

              <div>
                {/* Stats */}
                <div className="flex items-center gap-4 text-xs mt-6 pt-6 border-t border-neutral-200/60">
                  <div className="flex-1">
                    <span className="text-neutral-400 block font-normal uppercase tracking-wider text-[9px] mb-0.5">Active Campaigns</span>
                    <span className="font-bold text-neutral-800 text-sm">{ngo.projectsCount} Projects</span>
                  </div>
                  <div className="w-px h-8 bg-neutral-200 self-center" />
                  <div className="flex-1">
                    <span className="text-neutral-400 block font-normal uppercase tracking-wider text-[9px] mb-0.5">Reported Impact</span>
                    <span className="font-bold text-neutral-800 text-sm">{ngo.impactCount}</span>
                  </div>
                </div>

                {/* View Profile CTA */}
                <Link
                  to={`/ngo/${ngo.id}`}
                  className="mt-6 w-full inline-flex items-center justify-center border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-400 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#1A1A18] transition-all"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/ngos"
            className="inline-flex items-center justify-center border border-neutral-300 bg-white hover:bg-neutral-50 px-8 py-3 rounded-full text-sm font-bold text-[#1A1A18] transition-all hover:scale-[1.02] shadow-sm"
          >
            View all verified NGOs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedNGOs
