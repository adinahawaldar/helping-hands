import React from 'react'

const Stats = () => {
  const stats = [
    {
      value: '10,000+',
      label: 'Meals Provided',
      desc: 'Nourishing families in underserved communities'
    },
    {
      value: '500+',
      label: 'Children Educated',
      desc: 'Funding school supplies, tuition, and basic tuition'
    },
    {
      value: '200+',
      label: 'NGOs Connected',
      desc: 'Vetted grassroots organizations executing projects'
    },
    {
      value: '₹50L+',
      label: 'Donations Raised',
      desc: 'Direct, transparent funding with complete reports'
    }
  ]

  return (
    <div className="bg-brand-sand-light border-y border-brand-sand/50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2 md:gap-3 text-center sm:text-left">
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-brand-charcoal">
                {stat.value}
              </span>
              <h3 className="font-sans text-sm font-semibold tracking-wider text-brand-charcoal uppercase">
                {stat.label}
              </h3>
              <p className="text-xs text-brand-brown leading-relaxed max-w-[240px] mx-auto sm:mx-0">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
