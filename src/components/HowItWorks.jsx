import React from 'react'

const HowItWorks = () => {
  return (
    <div id="about-us" className="bg-white py-20 border-t border-neutral-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <h2 className="font-serif text-[2.25rem] min-[380px]:text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] font-bold tracking-tight text-[#1A1A18] leading-[1.15] mt-5 mb-4">
            How Helping Hands Works
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#7D725C] font-normal max-w-xl">
            Helping Hands makes it easier to support verified causes without searching, guessing, or worrying about where your contribution goes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="bg-white rounded-2xl p-4 shadow-sm w-full flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Categories</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">Active</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 p-2 bg-neutral-50 rounded-xl">
                  <span className="text-sm">🍲</span>
                  <span className="text-xs font-semibold text-neutral-700">Food & Hunger Relief</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-neutral-50 rounded-xl">
                  <span className="text-sm">🎓</span>
                  <span className="text-xs font-semibold text-neutral-700">Education Support</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-neutral-50 rounded-xl">
                  <span className="text-sm">🏥</span>
                  <span className="text-xs font-semibold text-neutral-700">Medical Emergency</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <h3 className="font-serif text-lg font-semibold text-[#1A1A18]">
                1. Discover Verified Causes
              </h3>
              <p className="text-[#5C5446]/90 text-xs sm:text-[13px] leading-relaxed font-sans">
                Explore trusted NGOs and genuine emergency cases across education, food, healthcare, and more.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="bg-white rounded-2xl p-4 shadow-sm w-full flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Direct Giving</span>
                <span className="text-[10px] text-emerald-600 font-bold">100% Secure</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="border border-neutral-200 text-center py-1.5 rounded-lg text-[10px] font-bold text-neutral-700 bg-neutral-50">₹1,000</span>
                <span className="border-2 border-emerald-600 text-center py-1.5 rounded-lg text-[10px] font-bold text-emerald-700 bg-emerald-50/30">₹5,000</span>
                <span className="border border-neutral-200 text-center py-1.5 rounded-lg text-[10px] font-bold text-neutral-700 bg-neutral-50">₹10,000</span>
              </div>
              <div className="w-full bg-[#1A1A18] text-white text-center py-2 rounded-xl text-[11px] font-bold shadow-sm">
                Contribute Now
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <h3 className="font-serif text-lg font-semibold text-[#1A1A18]">
                2. Support Directly
              </h3>
              <p className="text-[#5C5446]/90 text-xs sm:text-[13px] leading-relaxed font-sans">
                Choose a cause and contribute securely. Your support goes directly towards the selected need.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="bg-white rounded-2xl p-4 shadow-sm w-full flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Transparency</span>
                <span className="text-[10px] text-neutral-500 font-semibold">Real-time</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold shrink-0">✓</div>
                  <span className="text-[11px] font-semibold text-neutral-700">Donation Routed Directly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold shrink-0">✓</div>
                  <span className="text-[11px] font-semibold text-neutral-700">Receipt & Impact Report Sent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold shrink-0">✓</div>
                  <span className="text-[11px] font-semibold text-neutral-700">NGO Utilization Audited</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <h3 className="font-serif text-lg font-semibold text-[#1A1A18]">
                3. Track The Impact
              </h3>
              <p className="text-[#5C5446]/90 text-xs sm:text-[13px] leading-relaxed font-sans">
                Receive updates and see how your contribution helps create real change.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-12 text-neutral-600 font-sans text-xs sm:text-sm font-semibold tracking-wide relative z-20">
          <div className="flex items-center gap-2 select-none">
            <span className="text-[#BE5B39] font-bold">✓</span>
            <span>Verified NGOs & Cases</span>
          </div>
          <div className="flex items-center gap-2 select-none">
            <span className="text-[#BE5B39] font-bold">✓</span>
            <span>Secure Donations</span>
          </div>
          <div className="flex items-center gap-2 select-none">
            <span className="text-[#BE5B39] font-bold">✓</span>
            <span>Transparent Updates</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
