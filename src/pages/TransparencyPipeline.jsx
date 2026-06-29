import React, { useState } from 'react'
import { Shield, Cpu, Database, Eye, Terminal, CheckCircle2, ChevronRight, Play } from 'lucide-react'

const TransparencyPipeline = () => {
  const [selectedNode, setSelectedNode] = useState('gateway')
  const [activeStep, setActiveStep] = useState(0)

  const nodes = {
    client: {
      title: "Donor & NGO Client Applications",
      tech: "React, Tailwind CSS, Vite",
      security: "HTTPS, Strict CSP headers, JWT Session Storage",
      desc: "Responsive web client where donors browse vetted projects and NGOs upload milestone reports. Built on a modular component system to render live transaction status feeds directly to users."
    },
    gateway: {
      title: "Audited API Gateway",
      tech: "Node.js, Express.js REST API",
      security: "Rate Limiting, Cors, JWT Validation, Sanitization middleware",
      desc: "Central security gateway that intercepts all network requests. Handles request signature parsing, authentication validation, and acts as the secure entry point for donation transactions and NGO file uploads."
    },
    ledger: {
      title: "Direct Allocation Ledger",
      tech: "db.json Local Persistence Model",
      security: "Server-side write constraints, read-only public endpoints",
      desc: "Stores campaign targets, donor profiles, and NGO milestones. Implements a double-entry accounting simulation where donation credits directly match campaign balances, preventing leakage."
    },
    engine: {
      title: "Verification & Audit Engine",
      tech: "Metadata Scanning, OCR Extraction APIs",
      security: "Filename hashing, strict image mime validation",
      desc: "Processes uploaded ground receipts. Performs automatic GPS coordinates scanning to cross-reference location data, checks image timestamps to prevent receipt re-use, and runs OCR to verify totals."
    }
  }

  const steps = [
    {
      title: "Allocation & Tip Split",
      summary: "Donation separation",
      desc: "Donor initiates a ₹5,000 transaction. The system separates the base donation from any voluntary platform tips. 100% of the base allocation is flagged for transfer directly to the cause's designated balance."
    },
    {
      title: "Ledger Recordation",
      summary: "Immutable transaction entry",
      desc: "The API Gateway registers the payment and writes a transaction log. A unique hash maps the donation directly to the Cause ID in the database, locking the funds for the designated campaign."
    },
    {
      title: "Execution & Proof Upload",
      summary: "NGO purchases and uploads receipts",
      desc: "The NGO purchases supplies (e.g. food packages, medical units) and uploads the physical paper invoice and delivery photos with geolocation metadata via their secure dashboard."
    },
    {
      title: "Automated Metadata Scan",
      summary: "OCR & GPS Verification",
      desc: "The system runs invoice OCR to extract prices, matching them against target campaign limits. GPS tags from ground photos are scanned to ensure physical delivery occurred at the designated relief zone."
    },
    {
      title: "Impact Unlocked",
      summary: "Donor notification & timeline update",
      desc: "Once verified, the transaction status updates to approved. The public campaign timeline instantly unlocks the proof, sending an itemized invoice statement and receipt directly to the donor."
    }
  ]

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12 flex flex-col gap-10">
        
        <div className="max-w-4xl">
          <span className="text-[10px] sm:text-xs font-bold text-[#BE5B39] uppercase tracking-widest">
            Core Technology
          </span>
          <h1 className="font-sans font-extrabold uppercase tracking-tight text-[2.5rem] sm:text-[4.5rem] md:text-[5.5rem] text-[#1A1A18] leading-[0.95] mt-2 mb-4">
            The Audit Trail. <br />
            No Black Boxes.
          </h1>
          <p className="font-sans text-xs sm:text-base text-[#7D725C] max-w-2xl leading-relaxed">
            Helping Hands operates an open verification pipeline. We trace every transaction from donor checkout to invoice approval, validating field proof to ensure absolute capital transparency.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#EAE3D2]/50 rounded-[2.5rem] p-6 sm:p-10 flex flex-col gap-8">
          <div>
            <span className="text-[10px] font-bold text-[#BE5B39] uppercase tracking-widest">
              System Architecture
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A18] mt-1">
              Interactive System Flow
            </h2>
            <p className="text-neutral-500 text-xs mt-1">
              Click on any system node to inspect its tech stack, security parameters, and data responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-6 flex flex-col gap-3">
              <button
                onClick={() => setSelectedNode('client')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  selectedNode === 'client'
                    ? 'bg-white border-[#1A1A18] shadow-sm'
                    : 'bg-transparent border-[#EAE3D2]/60 hover:border-[#1A1A18]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedNode === 'client' ? 'bg-[#1A1A18] text-white' : 'bg-neutral-200/50 text-[#1A1A18]'}`}>
                      <Eye className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#1A1A18]">Client Applications</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedNode === 'client' ? 'rotate-90 text-[#BE5B39]' : 'text-neutral-400'}`} />
                </div>
              </button>

              <button
                onClick={() => setSelectedNode('gateway')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  selectedNode === 'gateway'
                    ? 'bg-white border-[#1A1A18] shadow-sm'
                    : 'bg-transparent border-[#EAE3D2]/60 hover:border-[#1A1A18]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedNode === 'gateway' ? 'bg-[#1A1A18] text-white' : 'bg-neutral-200/50 text-[#1A1A18]'}`}>
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#1A1A18]">API Gateway</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedNode === 'gateway' ? 'rotate-90 text-[#BE5B39]' : 'text-neutral-400'}`} />
                </div>
              </button>

              <button
                onClick={() => setSelectedNode('ledger')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  selectedNode === 'ledger'
                    ? 'bg-white border-[#1A1A18] shadow-sm'
                    : 'bg-transparent border-[#EAE3D2]/60 hover:border-[#1A1A18]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedNode === 'ledger' ? 'bg-[#1A1A18] text-white' : 'bg-neutral-200/50 text-[#1A1A18]'}`}>
                      <Database className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#1A1A18]">Direct Ledger Storage</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedNode === 'ledger' ? 'rotate-90 text-[#BE5B39]' : 'text-neutral-400'}`} />
                </div>
              </button>

              <button
                onClick={() => setSelectedNode('engine')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  selectedNode === 'engine'
                    ? 'bg-white border-[#1A1A18] shadow-sm'
                    : 'bg-transparent border-[#EAE3D2]/60 hover:border-[#1A1A18]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedNode === 'engine' ? 'bg-[#1A1A18] text-white' : 'bg-neutral-200/50 text-[#1A1A18]'}`}>
                      <Terminal className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#1A1A18]">Verification Engine</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedNode === 'engine' ? 'rotate-90 text-[#BE5B39]' : 'text-neutral-400'}`} />
                </div>
              </button>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#EAE3D2]/50 rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 shadow-sm min-h-[300px]">
              <div>
                <span className="text-[9px] bg-[#BE5B39]/10 text-[#BE5B39] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Active Node Specs
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1A1A18] mt-2">
                  {nodes[selectedNode].title}
                </h3>
              </div>
              <div className="flex flex-col gap-4 border-t border-neutral-100 pt-4">
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block tracking-wider">Tech Infrastructure</span>
                  <span className="text-xs font-semibold text-neutral-700">{nodes[selectedNode].tech}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block tracking-wider">Security Layer</span>
                  <span className="text-xs font-semibold text-[#BE5B39]">{nodes[selectedNode].security}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block tracking-wider">Responsibility</span>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">{nodes[selectedNode].desc}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-neutral-100 pt-12 items-start">
          
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[#BE5B39] uppercase tracking-widest">
              Traceability Loop
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A18] leading-tight">
              Donation Lifecycle Simulator
            </h2>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-sm">
              Follow a single ₹5,000 donation step-by-step through our direct validation process.
            </p>
            <div className="flex flex-row flex-wrap gap-2 mt-4 lg:flex-col lg:gap-2">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold text-left border transition-all ${
                    activeStep === idx
                      ? 'bg-[#1A1A18] text-white border-transparent'
                      : 'bg-neutral-50 text-neutral-600 border-neutral-200/60 hover:border-neutral-400'
                  }`}
                >
                  {idx + 1}. {step.summary}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#FAF8F5] border border-[#EAE3D2]/50 rounded-[2rem] p-6 sm:p-10 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-2 border-b border-[#EAE3D2]/60 pb-3">
                <span className="text-[10px] font-extrabold text-[#BE5B39] uppercase tracking-wider">
                  Step {activeStep + 1} of 5
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A18] mt-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mt-2.5">
                {steps[activeStep].desc}
              </p>
            </div>
            <div className="flex items-center justify-between mt-8 border-t border-[#EAE3D2]/40 pt-4">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => prev - 1)}
                className="text-xs font-bold text-neutral-500 disabled:opacity-40 hover:text-[#1A1A18] transition-colors"
              >
                Previous Step
              </button>
              <button
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => prev + 1)}
                className="bg-[#1A1A18] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-neutral-800 disabled:opacity-40 transition-all flex items-center gap-1.5"
              >
                Next Step
                <Play className="w-2.5 h-2.5 fill-white" />
              </button>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-100 pt-12">
          
          <div className="bg-white border border-neutral-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1A1A18]">
              Automated Fraud Prevention
            </h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              We intercept double uploads by running file hash matching. Outdated uploads are rejected if invoice dates or GPS location metadata fail to match the timing and location requirements of the active campaign.
            </p>
          </div>

          <div className="bg-white border border-neutral-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1A1A18]">
              Real-time Ledger Balancing
            </h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              Donation records are matched against project expenditure logs. Our database simulates a double-entry ledger, ensuring that total funds received exactly match resources allocated and verified expenses.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default TransparencyPipeline
