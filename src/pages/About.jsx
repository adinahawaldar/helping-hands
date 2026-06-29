import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Activity, TrendingUp, Users, Target } from 'lucide-react'

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "The Opportunity",
      metric: "₹50,000 Cr+",
      label: "Annual Philanthropy Market",
      desc: "Millions of everyday donors want to support genuine relief efforts but lack trusted networks. Helping Hands bridges this gap by connecting micro-donors directly with pre-vetted local initiatives."
    },
    {
      title: "Sustainable Business Model",
      metric: "0% Fees",
      label: "Direct-to-Cause Routing",
      desc: "We charge no administrative cuts to NGOs. Operation costs are covered via optional donor micro-tips at checkout, corporate CSR sponsorships, and enterprise data-audit tools."
    },
    {
      title: "Vetting & Scalability",
      metric: "48 Hours",
      label: "NGO Onboarding & Audit",
      desc: "Our automated verification pipeline validates legal registrations, tax exemption status, and ground-level credibility, enabling rapid campaign deployment during crisis situations."
    },
    {
      title: "The Ask & Goals",
      metric: "₹1.5 Crore",
      label: "Seed Round Target",
      desc: "We are raising capital to automate real-time ledger audits, integrate localized GPS tracking for food/resource distribution, and scale operations to cover 15 additional states."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12 flex flex-col gap-8">
        
        <div className="max-w-4xl">
          <span className="text-[10px] sm:text-xs font-bold text-[#BE5B39] uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="font-sans font-extrabold uppercase tracking-tight text-[2.5rem] sm:text-[4.5rem] md:text-[5.5rem] text-[#1A1A18] leading-[0.95] mt-2 mb-4">
            Democratizing <br />
            Grassroots Giving
          </h1>
          <p className="font-sans text-xs sm:text-base text-[#7D725C] max-w-2xl leading-relaxed">
            Helping Hands is a transparency-first digital gateway connecting individual donors directly with verified local initiatives. We ensure your resources bypass intermediaries and create direct, trackable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-100 pt-12">
          
          <div className="bg-[#FAF8F5] border border-[#EAE3D2]/40 rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A18] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BE5B39]"></span>
              The Problem
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  <strong>High Intermediary Fees:</strong> Traditional crowdfunding and legacy charities deduct up to 15-30% in administrative fees and overheads.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  <strong>Lack of Transparency:</strong> Donors rarely receive itemized proof or timeline verification showing exactly how their funds were used.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  <strong>Validation Hurdles:</strong> Grassroots relief groups lack the resources and marketing reach to verify themselves on standard global platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A18] border border-transparent rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 text-white shadow-lg">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Our Solution
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  <strong>0% Platform Cuts:</strong> 100% of cause contributions go directly to the verified cause, supported through voluntary micro-tips.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  <strong>Audited Timeline Tracking:</strong> Real-time transparent receipts, expense uploads, and ledger tracking sent directly to donors.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  <strong>Automated Vetting:</strong> Dynamic verification engines enabling swift legal audits and quick onboarding for grassroots workers.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          
          <div className="border border-neutral-100 rounded-2xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-[#BE5B39]/10 flex items-center justify-center text-[#BE5B39]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-[#1A1A18]">
              Radical Verification
            </h4>
            <p className="text-neutral-500 text-xs leading-relaxed">
              We perform automated KYC, legal tax filings audits, and local reference checks before hosting any NGO partner or campaign.
            </p>
          </div>

          <div className="border border-neutral-100 rounded-2xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-[#BE5B39]/10 flex items-center justify-center text-[#BE5B39]">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-[#1A1A18]">
              Direct Routing
            </h4>
            <p className="text-neutral-500 text-xs leading-relaxed">
              Contributions are directly processed and routed securely to NGO bank accounts, eliminating multi-layered custody.
            </p>
          </div>

          <div className="border border-neutral-100 rounded-2xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-[#BE5B39]/10 flex items-center justify-center text-[#BE5B39]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-[#1A1A18]">
              Real-time Impact Reports
            </h4>
            <p className="text-neutral-500 text-xs leading-relaxed">
              Every NGO partner is required to upload invoices, utility logs, or photo receipts to update their transparency timeline.
            </p>
          </div>

        </div>

        <div className="bg-[#FAF8F5] border border-[#EAE3D2]/50 rounded-[2.5rem] p-6 sm:p-10 md:p-12 flex flex-col gap-8 mt-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE3D2]/50 pb-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A18] mt-1">
                The Helping Hands Pitch
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-[#EAE3D2] flex items-center justify-center hover:bg-white transition-all text-[#1A1A18]"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-[#EAE3D2] flex items-center justify-center hover:bg-white transition-all text-[#1A1A18]"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[180px]">
            <div className="md:col-span-4 flex flex-col justify-center">
              <span className="font-sans font-extrabold text-[2.5rem] sm:text-[4rem] text-[#BE5B39] tracking-tight leading-none">
                {slides[activeSlide].metric}
              </span>
              <span className="font-sans text-[10px] font-bold text-[#7D725C] uppercase tracking-widest mt-1">
                {slides[activeSlide].label}
              </span>
            </div>
            <div className="md:col-span-8 flex flex-col gap-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A18]">
                {slides[activeSlide].title}
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                {slides[activeSlide].desc}
              </p>
            </div>
          </div>

          <div className="flex gap-2.5 justify-center border-t border-[#EAE3D2]/50 pt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-8 bg-[#1A1A18]' : 'w-2 bg-[#EAE3D2]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        <div className="bg-[#1A1A18] rounded-[2.5rem] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 mt-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-[10px] font-bold text-[#BE5B39] uppercase tracking-widest">
              Back Our Growth
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
              Invest in Transparent Social Infrastructure
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              We are seeking strategic funding partners and institutional backers to scale our validation technology. Join us in redesigning direct aid.
            </p>
          </div>
          <a
            href="mailto:partner@helpinghands.org"
            className="bg-[#BE5B39] text-white px-8 py-3 rounded-full text-xs font-semibold hover:bg-[#a64e2f] transition-all select-none w-max flex items-center gap-2 group shrink-0"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default About
