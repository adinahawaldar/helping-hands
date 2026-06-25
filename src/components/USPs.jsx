import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Eye, Handshake, ShieldCheck, Cpu, BookOpen, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

const USPs = () => {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const usps = [
    {
      icon: <Heart className="w-12 h-12 text-[#1A1A18]" strokeWidth={1.2} />,
      title: 'Direct Impact, Zero Fees',
      desc: 'Every contribution reaches the people and causes that need it most. We remove unnecessary barriers so your support creates real change where it matters.'
    },
    {
      icon: <Eye className="w-12 h-12 text-[#1A1A18]" strokeWidth={1.2} />,
      title: 'Transparent Giving',
      desc: 'Know exactly where your support goes. We build trust through clear impact tracking, verified initiatives, and complete visibility into every contribution.'
    },
    {
      icon: <Handshake className="w-12 h-12 text-[#1A1A18]" strokeWidth={1.2} />,
      title: 'People First Approach',
      desc: 'We focus on real communities and real needs — connecting individuals, organizations, and supporters to create meaningful change together.'
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-[#1A1A18]" strokeWidth={1.2} />,
      title: 'Verified Causes',
      desc: 'We partner with trusted organizations and initiatives to ensure every effort is directed toward genuine social impact.'
    },
    {
      icon: <Cpu className="w-12 h-12 text-[#1A1A18]" strokeWidth={1.2} />,
      title: 'Technology For Good',
      desc: 'Using modern technology, we simplify the process of giving, connecting, and creating impact at scale.'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-[#1A1A18]" strokeWidth={1.2} />,
      title: 'Beyond Donations',
      desc: 'We believe change is more than financial support. We empower communities through education, resources, and sustainable opportunities.'
    },
    {
      icon: <Sparkles className="w-12 h-12 text-[#1A1A18]" strokeWidth={1.2} />,
      title: 'Every Action Matters',
      desc: 'Whether big or small, every contribution helps build a stronger future by supporting essential needs like clean water, education, and livelihoods.'
    }
  ]

  return (
    <div className="bg-white py-20 border-b border-neutral-100 overflow-hidden flex flex-col items-center">
      {/* Header & CTA container (restricted to page width) */}
      <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-6 flex flex-col items-center gap-3">
          <h2 className="font-serif text-[2.5rem] min-[380px]:text-[3rem] sm:text-[3.85rem] md:text-[4.5rem] font-bold tracking-tight text-[#1A1A18] leading-[1.1] mt-5 mb-4">
            Why choose Helping Hands?
          </h2>
          <p className="font-sans text-base sm:text-lg text-neutral-600 font-normal max-w-2xl">
            Discover how we make direct giving secure, transparent, and highly impactful for communities worldwide.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-14">
          <Link
            to="/causes"
            className="inline-flex items-center justify-center border border-neutral-300 bg-white hover:bg-neutral-50 px-6 py-2.5 rounded-full text-sm font-semibold text-[#1A1A18] transition-all hover:scale-[1.02] shadow-sm"
          >
            Start Helping Now
          </Link>
        </div>
      </div>

      {/* Carousel Track wrapper (uses full width of the screen) */}
      <div className="w-full relative">
        {/* Scrollable Track container */}
        <div
          ref={scrollContainerRef}
          className="w-full flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-none px-6 sm:px-8 lg:px-12 xl:px-[calc((100vw-1280px)/2+3rem)]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {usps.map((usp, idx) => (
            <div
              key={idx}
              className="w-[290px] sm:w-[330px] shrink-0 bg-white border border-[#1A1A18] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 flex flex-col items-center text-center justify-start min-h-[350px] snap-start hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Thin Vector Icon */}
              <div className="mb-8 flex items-center justify-center text-neutral-900">
                {usp.icon}
              </div>

              {/* Bold Heading */}
              <h3 className="font-sans text-lg sm:text-xl font-bold text-[#1A1A18] leading-snug mb-4">
                {usp.title}
              </h3>

              {/* Description Paragraph */}
              <p className="text-neutral-600 text-sm leading-relaxed font-sans font-normal">
                {usp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Navigation Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => scroll('left')}
          className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-600 transition-all active:scale-95 cursor-pointer shadow-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-neutral-800" strokeWidth={2} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-600 transition-all active:scale-95 cursor-pointer shadow-sm"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-neutral-800" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}

export default USPs
