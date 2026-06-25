import React from 'react'
import { Search, Heart, Activity } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      icon: <Search className="w-6 h-6 text-brand-charcoal" />,
      title: 'Find a Cause',
      desc: 'Browse verified local initiatives focusing on hunger relief, children education, medical aid, or emergency shelter.'
    },
    {
      num: '02',
      icon: <Heart className="w-6 h-6 text-brand-charcoal" />,
      title: 'Donate Safely',
      desc: 'Select your donation amount. We support secure transaction routing directly to the designated NGO campaign.'
    },
    {
      num: '03',
      icon: <Activity className="w-6 h-6 text-brand-charcoal" />,
      title: 'See the Impact',
      desc: 'Receive digital receipts and transparency reports showing exactly how and where your contribution was spent.'
    }
  ]

  return (
    <div className="bg-brand-bg py-24 border-b border-brand-sand/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16 md:mb-20">
          <span className="font-sans text-xs font-semibold tracking-wider text-brand-sand-dark uppercase">
            Simple 3 Steps
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal leading-tight">
            How Helping Hands works
          </h2>
          <p className="text-brand-brown text-sm sm:text-base leading-relaxed">
            We provide a transparent, friction-free pipeline from your generous heart to the hands on the ground.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center gap-6 group">
              {/* Step Badge & Icon */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-brand-sand-light border border-brand-sand/55 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-sand/50">
                  {step.icon}
                </div>
                <span className="absolute -top-3 -right-3 font-serif text-2xl font-light italic text-brand-sand-dark opacity-60">
                  {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl font-medium text-brand-charcoal">
                  {step.title}
                </h3>
                <p className="text-brand-brown text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>

              {/* Connector line for desktop (exclude last card) */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-8 left-[70%] w-[60%] h-[1px] bg-brand-sand/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
