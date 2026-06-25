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
      title: 'Support Education for 100 Underprivileged Children',
      location: 'MUMBAI, INDIA',
      raised: 35000,
      goal: 50000,
      percentage: 70,
      image: '/hero_education.png',
      ngo: 'ABC Foundation'
    },
    {
      id: 2,
      title: 'Provide 500 Healthy Meals to Homeless Families',
      location: 'DELHI, INDIA',
      raised: 18000,
      goal: 30000,
      percentage: 60,
      image: '/hero_food.png',
      ngo: 'Feeding Hands NGO'
    },
    {
      id: 3,
      title: 'Fund Life-Saving Heart Surgery for Baby Rohan',
      location: 'BANGALORE, INDIA',
      raised: 120000,
      goal: 150000,
      percentage: 80,
      image: '/hero_unity.png',
      ngo: 'Care & Cure Trust'
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center gap-3">
          <span className="font-sans text-xs sm:text-sm font-bold tracking-wider text-neutral-500 uppercase">
            Make donations with confidence
          </span>
          <h2 className="font-serif text-[2.5rem] min-[380px]:text-[3rem] sm:text-[3.85rem] md:text-[4.5rem] font-bold tracking-tight text-[#1A1A18] leading-[1.1] mt-3">
            Donate to verified medical & emergency fundraisers
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-500 font-normal max-w-xl">
            Safely support fundraisers for people seeking help with medical care and emergencies.
          </p>
        </div>

        {/* Results Info */}
        <div className="w-full text-left mb-6">
          <span className="text-xs text-neutral-400 font-medium font-sans">
            Showing 3 of 12 verified causes
          </span>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <div 
              key={cause.id} 
              className="bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-4 flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
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

              {/* Cause Details */}
              <div className="pt-4 pb-2 px-1 flex items-center justify-between gap-4">
                {/* Left side text details */}
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="font-sans text-sm sm:text-base font-bold text-neutral-800 leading-snug truncate hover:text-[#BE5B39] transition-colors">
                    <Link to={`/cause/${cause.id}`}>{cause.title}</Link>
                  </h3>
                  <span className="text-xs text-neutral-500 font-normal">
                    {formatCurrency(cause.raised)} raised
                  </span>
                </div>

                {/* Right side circular progress */}
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
          ))}
        </div>

        {/* Browse All (More) Button */}
        <div className="mt-12 text-center">
          <Link
            to="/causes"
            className="inline-flex items-center justify-center border border-neutral-200 bg-white hover:bg-neutral-50 px-8 py-3 rounded-full text-sm font-bold text-[#1A1A18] transition-all hover:scale-[1.02]"
          >
            Browse all fundraisers
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCauses
