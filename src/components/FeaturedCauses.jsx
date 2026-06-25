import React from 'react'
import { Link } from 'react-router-dom'

const CircularProgress = ({ percentage }) => {
  const radius = 16;
  const stroke = 3;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (Math.min(percentage, 100) / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-12 h-12 shrink-0 select-none">
      <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
        {/* Track */}
        <circle
          className="text-neutral-100"
          strokeWidth={stroke}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
        />
        {/* Progress */}
        <circle
          className="text-emerald-500 transition-all duration-500"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="18"
          cy="18"
        />
      </svg>
      <span className="absolute text-[9px] font-bold text-neutral-800">{percentage}%</span>
    </div>
  )
}

const FeaturedCauses = () => {
  const causes = [
    {
      id: 1,
      title: "Urgent Funds Needed for Anita's Stage 3 Leukemia Treatment",
      location: 'MUMBAI, INDIA',
      raised: 320000,
      goal: 800000,
      percentage: 40,
      image: '/hero_unity.png',
      ngo: 'Care & Cure Trust',
      condition: 'Leukemia (Cancer)',
      urgency: 'Critical • 4 Days Left',
      detail: 'Requires 6 cycles of intensive chemotherapy and an immediate bone marrow transplant to survive.'
    },
    {
      id: 2,
      title: 'Emergency Kidney Transplant for 8-Year-Old Ayan',
      location: 'DELHI, INDIA',
      raised: 540000,
      goal: 600000,
      percentage: 90,
      image: '/hero_children.png',
      ngo: 'Feeding Hands NGO',
      condition: 'Kidney Failure',
      urgency: 'Immediate • 24h Left',
      detail: 'Matching donor found. Requires immediate surgery at AIIMS to avoid critical complications.'
    },
    {
      id: 3,
      title: "Support Rahul's Recovery from Severe Traumatic Brain Injury",
      location: 'BANGALORE, INDIA',
      raised: 450000,
      goal: 1000000,
      percentage: 45,
      image: '/hero_mud_hands.png',
      ngo: 'ABC Foundation',
      condition: 'Brain Trauma',
      urgency: 'Urgent • 6 Days Left',
      detail: 'Currently on ventilator support in the ICU. Funds are needed for daily hospital bills and surgery.'
    }
  ]

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="bg-white py-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header (2 lines heading, no subheading) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] font-bold tracking-tight text-[#1A1A18] leading-[1.15] max-w-2xl mx-auto">
            Donate to verified medical <br className="hidden sm:inline" /> & emergency fundraisers
          </h2>
        </div>

        {/* Results Info */}
        <div className="w-full text-left mb-6">
          <span className="text-xs text-neutral-400 font-medium font-sans">
            Showing 3 of 12 verified urgent medical cases
          </span>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <div 
              key={cause.id} 
              className="bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-4 flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 justify-between"
            >
              <div>
                {/* Cause Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Location overlay */}
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-[4px] select-none">
                    {cause.location}
                  </span>
                </div>

                {/* Urgency Badge & Condition */}
                <div className="flex items-center justify-between gap-2 mt-4 px-1">
                  <span className="text-[9px] bg-red-50 text-red-600 px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider">
                    {cause.urgency}
                  </span>
                  <span className="text-[11px] font-bold text-neutral-500">
                    {cause.condition}
                  </span>
                </div>

                {/* Cause Details */}
                <div className="pt-3 px-1 flex flex-col gap-1">
                  <h3 className="font-sans text-sm sm:text-base font-bold text-neutral-800 leading-snug line-clamp-2 hover:text-[#BE5B39] transition-colors">
                    <Link to={`/cause/${cause.id}`}>{cause.title}</Link>
                  </h3>
                  <p className="text-neutral-555 text-[12px] leading-relaxed font-sans mt-2 line-clamp-2">
                    {cause.detail}
                  </p>
                </div>
              </div>

              <div>
                {/* Progress Stats & Circular Progress */}
                <div className="mt-4 px-1 flex items-center justify-between gap-4 border-t border-neutral-100 pt-3">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Progress</span>
                    <span className="text-sm font-extrabold text-neutral-850 mt-0.5">
                      {formatCurrency(cause.raised)} <span className="text-neutral-400 font-normal">raised of</span> {formatCurrency(cause.goal)}
                    </span>
                  </div>
                  <CircularProgress percentage={cause.percentage} />
                </div>

                {/* Action buttons inside card */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    to={`/cause/${cause.id}`}
                    className="text-xs font-bold text-neutral-500 hover:text-[#BE5B39] transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/cause/${cause.id}`}
                    className="bg-[#1A1A18] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#BE5B39] transition-all flex items-center gap-1 shadow-sm"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All (More) Button */}
        <div className="mt-12 text-center">
          <Link
            to="/causes"
            className="inline-flex items-center justify-center border border-[#1A1A18] bg-white hover:bg-neutral-50 px-8 py-3 rounded-full text-sm font-bold text-[#1A1A18] transition-all hover:scale-[1.02] shadow-sm"
          >
            Browse all fundraisers
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCauses
