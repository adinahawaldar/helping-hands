import React from 'react'
import { CreditCard, ShieldCheck, ClipboardCheck, FileSpreadsheet } from 'lucide-react'

const Transparency = () => {
  const steps = [
    {
      number: '01',
      icon: <CreditCard className="w-5 h-5 text-[#BE5B39]" />,
      title: 'Secure Donation',
      desc: 'Your contribution is securely routed to the specific NGO campaign.'
    },
    {
      number: '02',
      icon: <ShieldCheck className="w-5 h-5 text-[#BE5B39]" />,
      title: 'NGO Partner',
      desc: 'Funds are directly received by the verified, audited local NGO.'
    },
    {
      number: '03',
      icon: <ClipboardCheck className="w-5 h-5 text-[#BE5B39]" />,
      title: 'Work Executed',
      desc: 'The NGO executes the project (e.g. food delivery, school supplies).'
    },
    {
      number: '04',
      icon: <FileSpreadsheet className="w-5 h-5 text-[#BE5B39]" />,
      title: 'Impact Audited',
      desc: 'Get photos, bills, and impact metrics delivered directly to your profile.'
    }
  ]

  return (
    <div className="bg-white py-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-3">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1 bg-[#D4F5D1] text-[#02592F] px-3.5 py-1 rounded-[6px] text-xs font-bold font-sans tracking-wide">
            <span>☆</span>
            <span>100% Transparent Pipeline</span>
          </div>
          {/* Main Title */}
          <h2 className="font-serif text-[2.2rem] min-[380px]:text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] font-bold tracking-tight text-[#1A1A18] leading-[1.15] mt-3">
            Know where your donation goes
          </h2>
          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-neutral-500 font-normal max-w-2xl mt-1">
            Every single rupee contributed is fully trackable. We audit all projects to ensure your kindness creates actual on-ground results.
          </p>
        </div>

        {/* Timeline Pipeline */}
        <div className="relative w-full">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-neutral-100 via-[#BE5B39]/20 to-neutral-100 z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF8F5] border border-neutral-100/90 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xs hover:scale-[1.02] hover:bg-[#F5F2EC] hover:shadow-md transition-all duration-300 min-h-[260px] group"
              >
                {/* Step Circle with Icon */}
                <div className="w-12 h-12 rounded-full bg-white border border-neutral-100/80 flex items-center justify-center shadow-xs mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>

                {/* Elegant Step Number Badge */}
                <span className="text-[10px] font-bold text-[#BE5B39] tracking-widest uppercase">
                  STEP {step.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-[#1A1A18] mt-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed font-sans mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Audit Certification Box */}
        <div className="mt-16 text-center">
          <span className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-neutral-100 px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-600 shadow-xs select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Real-time audit certificates & transaction logs are published under each NGO profile.</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Transparency
