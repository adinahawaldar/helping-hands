import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { mockCauses } from '../data/mockCauses'
import { Heart, ShieldCheck, ArrowLeft, CheckCircle2, Loader2, CreditCard } from 'lucide-react'

const Donate = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  
  // Find cause based on ID, check if customCause is passed in state (e.g. from NGO direct catalog or community post)
  const causeId = id ? parseInt(id) : null
  const cause = location.state?.customCause || 
                (causeId ? mockCauses.find(c => c.id === causeId) : null) || 
                mockCauses[0]

  // State variables
  const [amount, setAmount] = useState(location.state?.amount || '5000')
  const [customAmount, setCustomAmount] = useState(location.state?.amount ? location.state.amount : '')
  const [isCustom, setIsCustom] = useState(location.state?.amount ? true : false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [supportMessage, setSupportMessage] = useState('')
  
  // Payment card states
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvc, setCardCvc] = useState('')
  const [cardName, setCardName] = useState('')
  
  // Submission & Flow states
  const [isProcessing, setIsProcessing] = useState(false)
  const [processStep, setProcessStep] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleAmountPreset = (val) => {
    setAmount(val)
    setIsCustom(false)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '')
    setCustomAmount(val)
    setAmount(val)
  }

  const formatCurrency = (val) => {
    if (!val) return '₹0'
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!amount || parseInt(amount) <= 0) {
      alert('Please enter a valid donation amount.')
      return
    }
    if (!fullName || !email) {
      alert('Please complete the donor information fields.')
      return
    }
    if (cardNumber.length < 16 || cardExpiry.length < 4 || cardCvc.length < 3) {
      alert('Please enter valid simulated card details.')
      return
    }

    // Start simulated payment processing
    setIsProcessing(true)
    setProcessStep(1) // Step 1: Securing transaction

    // POST donation to live custom backend database
    fetch('http://localhost:5000/api/donate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ causeId: cause.id, amount: amount })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Donation tracked successfully on custom backend:', data)
      })
      .catch(err => console.log('Backend server offline, performing local checkout simulation.', err))

    setTimeout(() => {
      setProcessStep(2) // Step 2: Routing to NGO pipeline
      
      setTimeout(() => {
        setProcessStep(3) // Step 3: Registering impact receipt
        
        setTimeout(() => {
          setIsProcessing(false)
          setIsSuccess(true)
          setTransactionId('HH-' + Math.floor(100000 + Math.random() * 900000))
        }, 1200)
      }, 1200)
    }, 1200)
  }

  // Pre-fill card details helper for easy testing
  const autoFillTestDetails = () => {
    setCardNumber('4111222233334444')
    setCardExpiry('12/28')
    setCardCvc('123')
    setCardName(fullName || 'Jane Doe')
  }

  // Format Card Number (adds spaces every 4 digits)
  const handleCardNumberChange = (e) => {
    const val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/g, '')
    const formatted = val.match(/.{1,4}/g)?.join(' ') || val
    setCardNumber(formatted.slice(0, 19))
  }

  // Format Expiry date (MM/YY)
  const handleExpiryChange = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, '')
    if (val.length >= 2) {
      val = val.slice(0, 2) + '/' + val.slice(2, 4)
    }
    setCardExpiry(val.slice(0, 5))
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-neutral-50 py-16 px-6 sm:px-8 lg:px-12 flex items-center justify-center font-sans">
        <div className="bg-white border border-[#1A1A18] rounded-[2.5rem] shadow-xl max-w-2xl w-full p-8 md:p-12 text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 animate-bounce">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A18] tracking-tight">
              Donation Successful!
            </h1>
            <p className="text-neutral-500 mt-2 text-sm sm:text-base">
              Thank you for your generous support. Your transaction has been completed securely.
            </p>
          </div>

          {/* Receipt Box */}
          <div className="w-full bg-neutral-50 rounded-2xl p-6 border border-neutral-200 text-left flex flex-col gap-4 font-sans text-sm">
            <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
              <span className="font-bold text-[#1A1A18] uppercase tracking-wider text-[11px]">Payment Receipt</span>
              <span className="text-[11px] bg-emerald-50 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">Completed</span>
            </div>
            
            <div className="grid grid-cols-2 gap-y-3 text-neutral-600">
              <span>Cause Supported:</span>
              <span className="text-[#1A1A18] font-semibold text-right truncate pl-4">{cause.title}</span>
              
              <span>NGO Partner:</span>
              <span className="text-[#1A1A18] font-semibold text-right">{cause.ngo}</span>
              
              <span>Transaction ID:</span>
              <span className="text-[#1A1A18] font-mono text-right">{transactionId}</span>
              
              <span>Donor Name:</span>
              <span className="text-[#1A1A18] font-semibold text-right">{isAnonymous ? 'Anonymous Donor' : fullName}</span>

              <span>Donation Amount:</span>
              <span className="text-emerald-700 font-extrabold text-right text-lg">{formatCurrency(amount)}</span>
            </div>
          </div>

          <div className="w-full bg-[#EAE3D2]/30 border border-[#7D725C]/20 rounded-xl p-4 text-xs sm:text-sm text-[#7D725C] text-left leading-relaxed flex gap-3">
            <ShieldCheck className="w-5 h-5 shrink-0 text-[#BE5B39]" />
            <span>A secure PDF receipt and 80G tax exemption certificate have been sent to your email (<strong>{email}</strong>). Real-time impact updates will be posted to this fundraiser.</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full mt-2">
            <Link
              to="/"
              className="flex-1 bg-[#1A1A18] text-white py-3.5 rounded-full font-bold text-sm text-center hover:bg-[#333330] transition-colors"
            >
              Back to Homepage
            </Link>
            <Link
              to="/causes"
              className="flex-1 border border-neutral-200 hover:bg-neutral-50 py-3.5 rounded-full font-bold text-sm text-center transition-colors"
            >
              Support Other Causes
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-6 sm:px-8 lg:px-12 font-sans relative">
      {/* Loading Processing Overlay */}
      {isProcessing && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xs z-50 flex flex-col items-center justify-center gap-6">
          <Loader2 className="w-12 h-12 text-[#BE5B39] animate-spin" />
          <div className="text-center flex flex-col gap-2">
            <h2 className="font-serif text-2xl font-bold text-[#1A1A18]">
              {processStep === 1 && 'Securing Connection...'}
              {processStep === 2 && 'Routing Donation to NGO...'}
              {processStep === 3 && 'Generating Receipt & Impact Certificate...'}
            </h2>
            <p className="text-neutral-500 text-sm max-w-xs mx-auto">
              Please do not refresh the page or click back. We are processing your contribution securely.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link 
          to={`/cause/${cause.id}`} 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 font-semibold text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to details page
        </Link>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Fundraiser Summary */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-white border border-neutral-200 rounded-[2rem] p-6 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-[#1A1A18] pb-4 border-b border-neutral-100">
              You are supporting
            </h2>

            {/* Cause Card layout */}
            <div className="flex gap-4 items-start">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-neutral-100">
                <img src={cause.image} alt={cause.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1.5 min-w-0">
                <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider self-start">
                  {cause.condition}
                </span>
                <h3 className="font-bold text-[#1A1A18] text-sm sm:text-base leading-snug line-clamp-2">
                  {cause.title}
                </h3>
                <span className="text-xs text-neutral-500 font-medium">
                  NGO Partner: <strong className="text-neutral-700">{cause.ngo}</strong>
                </span>
              </div>
            </div>

            {/* Direct Giving Guarantee Badge */}
            <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Helping Hands Safe Giving Guarantee</span>
              </div>
              <p className="text-neutral-600 text-xs leading-relaxed">
                We verify registration certificates, bank accounts, and field reports of all listed partners. 100% of your donation is routed directly, and verified audit certificates are generated for every transaction.
              </p>
            </div>
          </div>

          {/* Right Column: Checkout Form */}
          <div className="lg:col-span-7 bg-white border border-[#1A1A18] rounded-[2.5rem] p-6 sm:p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              {/* Step 1: Select Amount */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-lg font-bold text-[#1A1A18]">
                    1. Select Donation Amount
                  </h3>
                  {isCustom ? (
                    <button 
                      type="button" 
                      onClick={() => handleAmountPreset('5000')}
                      className="text-xs text-[#BE5B39] font-bold"
                    >
                      Use Presets
                    </button>
                  ) : (
                    <button 
                      type="button" 
                      onClick={() => { setIsCustom(true); setAmount(''); }}
                      className="text-xs text-[#BE5B39] font-bold"
                    >
                      Enter Custom
                    </button>
                  )}
                </div>

                {!isCustom ? (
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => handleAmountPreset('1000')}
                      className={`py-3.5 rounded-2xl font-bold text-sm border transition-all ${
                        amount === '1000'
                          ? 'border-[#1A1A18] bg-[#1A1A18] text-white shadow-sm'
                          : 'border-neutral-200 bg-white text-[#1A1A18] hover:bg-neutral-50'
                      }`}
                    >
                      ₹1,000
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAmountPreset('5000')}
                      className={`py-3.5 rounded-2xl font-bold text-sm border transition-all ${
                        amount === '5000'
                          ? 'border-[#1A1A18] bg-[#1A1A18] text-white shadow-sm'
                          : 'border-neutral-200 bg-white text-[#1A1A18] hover:bg-neutral-50'
                      }`}
                    >
                      ₹5,000
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAmountPreset('10000')}
                      className={`py-3.5 rounded-2xl font-bold text-sm border transition-all ${
                        amount === '10000'
                          ? 'border-[#1A1A18] bg-[#1A1A18] text-white shadow-sm'
                          : 'border-neutral-200 bg-white text-[#1A1A18] hover:bg-neutral-50'
                      }`}
                    >
                      ₹10,000
                    </button>
                  </div>
                ) : (
                  <div className="relative flex items-center">
                    <span className="absolute left-4 font-bold text-neutral-500 text-lg">₹</span>
                    <input
                      type="text"
                      placeholder="Enter amount (e.g. 2500)"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full pl-10 pr-4 py-3.5 border border-neutral-300 rounded-2xl focus:outline-none focus:border-[#1A1A18] focus:ring-1 focus:ring-[#1A1A18] font-bold text-[#1A1A18]"
                      required={isCustom}
                    />
                  </div>
                )}
              </div>

              {/* Step 2: Donor Info */}
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-lg font-bold text-[#1A1A18]">
                  2. Donor Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-neutral-450 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#1A1A18] text-sm text-[#1A1A18]"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-neutral-450 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane.doe@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#1A1A18] text-sm text-[#1A1A18]"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-neutral-450 uppercase tracking-wider">Words of Support (Optional)</label>
                  <textarea
                    placeholder="Write a message to encourage Anita, Ayan, Rahul and the team..."
                    value={supportMessage}
                    onChange={(e) => setSupportMessage(e.target.value)}
                    rows={2}
                    className="px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#1A1A18] text-sm text-[#1A1A18] resize-none"
                  />
                </div>

                <label className="flex items-center gap-2.5 mt-1 select-none cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 rounded border-neutral-350 text-[#1A1A18] focus:ring-[#1A1A18]"
                  />
                  <span className="text-xs text-neutral-600 font-medium">Make my donation anonymous to the public</span>
                </label>
              </div>

              {/* Step 3: Simulated Payment */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-lg font-bold text-[#1A1A18] flex items-center gap-2">
                    3. Card Details <span className="text-[10px] font-sans font-bold bg-[#EAE3D2] text-[#7D725C] px-2 py-0.5 rounded-md">Simulated</span>
                  </h3>
                  <button
                    type="button"
                    onClick={autoFillTestDetails}
                    className="text-xs text-[#BE5B39] font-bold"
                  >
                    Auto-Fill Test Info
                  </button>
                </div>

                <div className="border border-neutral-200 rounded-2xl p-5 bg-neutral-50 flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-[#1A1A18] text-sm text-[#1A1A18]"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Card Number</label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="4111 2222 3333 4444"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="w-full pl-3.5 pr-10 py-2.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-[#1A1A18] text-sm text-[#1A1A18] font-mono"
                        required
                      />
                      <CreditCard className="absolute right-3 w-4 h-4 text-neutral-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardExpiry}
                        onChange={handleExpiryChange}
                        className="px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-[#1A1A18] text-sm text-[#1A1A18] font-mono"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">CVC</label>
                      <input
                        type="password"
                        placeholder="•••"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))}
                        className="px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-[#1A1A18] text-sm text-[#1A1A18] font-mono"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#1A1A18] text-white hover:bg-[#333330] py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <Heart className="w-4.5 h-4.5 fill-current" />
                <span>Complete Donation of {formatCurrency(amount)}</span>
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
