import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const topImages = [
    {
      src: '/hero_mud_hands.png',
      alt: 'Child showing mud-covered hands'
    },
    {
      src: '/hero_food_received.png',
      alt: 'Child receiving food plate'
    },
    {
      src: '/hero_stacked_hands.png',
      alt: 'Hands joined in unity'
    },
    {
      src: '/hero_group_children.png',
      alt: 'Group of children sitting together'
    }
  ]

  return (
    <div className="w-full flex flex-col">
      {/* Top Section - Light Cream Gradient ending in Sand Color */}
      <div className="relative bg-gradient-to-b from-[#FCFAF7] via-[#FAF8F5] to-[#BCA675] pt-20 md:pt-28 pb-20 overflow-hidden">
        {/* Title & Description Container */}
        <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h1 className="font-serif text-[2.2rem] min-[380px]:text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] font-bold tracking-tight text-[#1A1A18] leading-[1.15] w-full flex flex-col items-center">
            <span className="whitespace-nowrap">Make an impact.</span>
            <span className="whitespace-nowrap">Help Where it matters.</span>
          </h1>



          {/* Call to Actions (Support Fieldwell & What We Believe) */}
          <div className="flex flex-row items-center justify-center gap-4 mt-4">
            <Link
              to="/causes"
              className="bg-[#1A1A18] text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-[#333330] transition-all shadow-sm"
            >
              Donate Now
            </Link>
            <Link
              to="/about"
              className="bg-white text-[#1A1A18] border border-black/10 px-6 py-3 rounded-full text-xs font-semibold hover:bg-neutral-50 transition-all shadow-sm"
            >
              Get Help
            </Link>
          </div>

          {/* Trust Line */}
          <p className="text-[#7D725C] text-[11px] sm:text-xs tracking-wider font-sans font-medium mt-4 flex items-center justify-center gap-2 select-none">
            <span>Verified causes</span>
            <span className="text-[#BE5B39]">•</span>
            <span>Secure payments</span>
            <span className="text-[#BE5B39]">•</span>
            <span>100% direct support</span>
          </p>
        </div>

        {/* 4-Image Flex Row - Proportional Widths & Single Row on Mobile */}
        <div className="w-full mt-16 px-2 sm:px-4 md:px-6 max-w-none">
          <div className="flex w-full gap-2 sm:gap-4 items-stretch h-[120px] min-[400px]:h-[150px] sm:h-[220px] md:h-[280px] lg:h-[340px]">
            {/* Image 1: flex-[2] */}
            <div className="flex-[2] rounded-[0.75rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                src={topImages[0].src}
                alt={topImages[0].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Image 2: flex-[3.2] */}
            <div className="flex-[3.2] rounded-[0.75rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                src={topImages[1].src}
                alt={topImages[1].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Image 3: flex-[3.2] */}
            <div className="flex-[3.2] rounded-[0.75rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                src={topImages[2].src}
                alt={topImages[2].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Image 4: flex-[2] */}
            <div className="flex-[2] rounded-[0.75rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <img
                src={topImages[3].src}
                alt={topImages[3].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background (About Us Section) */}
      <div id="about-us" className="w-full bg-white py-24 px-6 relative overflow-hidden flex flex-col items-center">
        {/* Narrative Text / About Us Header */}
        <div className="max-w-4xl mx-auto text-center relative z-10 mb-16 md:mb-20 flex flex-col items-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1 bg-[#D4F5D1] text-[#02592F] px-3.5 py-1 rounded-[6px] text-xs font-bold font-sans tracking-wide">
            <span>☆</span>
            <span>Simple. Transparent. Meaningful.</span>
          </div>
          {/* Main Title */}
          <h2 className="font-serif text-[2.2rem] min-[380px]:text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] font-bold tracking-tight text-[#1A1A18] leading-[1.15] mt-5 mb-4">
            How Helping Hands Works
          </h2>
          {/* Subtitle Tagline */}
          <p className="font-sans text-[0.95rem] sm:text-[1.05rem] text-neutral-500 font-normal max-w-2xl">
            Helping Hands makes it easier to support verified causes without searching, guessing, or worrying about where your contribution goes.
          </p>
        </div>

        {/* How It Works Steps (GoFundMe Style - Light Sand/Beige Cards on White BG) */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 mb-12">
          {/* Card 1 */}
          <div className="bg-[#FAF8F5] border border-neutral-100/90 rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] shadow-sm hover:scale-[1.02] hover:bg-[#F5F2EC] hover:shadow-md transition-all duration-300">
            {/* White Mockup Inside */}
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
            {/* Card Info */}
            <div className="mt-8 flex flex-col gap-2">
              <h3 className="font-serif text-lg font-semibold text-[#1A1A18]">
                1. Discover Verified Causes
              </h3>
              <p className="text-[#5C5446]/90 text-xs sm:text-[13px] leading-relaxed font-sans">
                Explore trusted NGOs and genuine emergency cases across education, food, healthcare, and more.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF8F5] border border-neutral-100/90 rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] shadow-sm hover:scale-[1.02] hover:bg-[#F5F2EC] hover:shadow-md transition-all duration-300">
            {/* White Mockup Inside */}
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
            {/* Card Info */}
            <div className="mt-8 flex flex-col gap-2">
              <h3 className="font-serif text-lg font-semibold text-[#1A1A18]">
                2. Support Directly
              </h3>
              <p className="text-[#5C5446]/90 text-xs sm:text-[13px] leading-relaxed font-sans">
                Choose a cause and contribute securely. Your support goes directly towards the selected need.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAF8F5] border border-neutral-100/90 rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] shadow-sm hover:scale-[1.02] hover:bg-[#F5F2EC] hover:shadow-md transition-all duration-300">
            {/* White Mockup Inside */}
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
            {/* Card Info */}
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

        {/* Small Trust Points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-4 text-neutral-600 font-sans text-xs sm:text-sm font-semibold tracking-wide relative z-20">
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

export default Hero
