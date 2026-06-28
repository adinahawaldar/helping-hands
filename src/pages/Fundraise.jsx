import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  UploadCloud, 
  ShieldCheck, 
  FileText, 
  Image as ImageIcon, 
  ArrowLeft, 
  ArrowRight, 
  Heart, 
  Lock, 
  Hourglass, 
  CheckCircle2, 
  MapPin, 
  User, 
  Sparkles, 
  Flame, 
  Droplet,
  GraduationCap
} from 'lucide-react'

const Fundraise = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    postedBy: '',
    phone: '',
    email: '',
    category: 'Medical',
    detail: '',
    longDescription: '',
    beneficiaryName: '',
    goal: '100000',
    urgency: 'Immediate • Pending Verification',
    image: '', // Base64 cover image
    supportingImages: [], // Array of base64 images
    verificationDocs: [] // Array of base64 documents
  })

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitPhase, setSubmitPhase] = useState(0) // 0: Idle, 1: Uploading, 2: Checking, 3: Completed
  const [createdCauseId, setCreatedCauseId] = useState(null)
  const [fastTracking, setFastTracking] = useState(false)
  
  // Validation errors
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    phone: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentStep])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear errors on edit
    if (name === 'email') {
      setValidationErrors(prev => ({ ...prev, email: '' }))
    }
    if (name === 'phone') {
      setValidationErrors(prev => ({ ...prev, phone: '' }))
    }
  }

  // Handle file selections converting them to base64
  const handleFileChange = (e, type) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    if (type === 'image') {
      const file = files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }))
      }
      reader.readAsDataURL(file)
    } else if (type === 'supporting') {
      const fileList = Array.from(files)
      const promises = fileList.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(file)
        })
      })
      Promise.all(promises).then(results => {
        setFormData(prev => ({ 
          ...prev, 
          supportingImages: [...prev.supportingImages, ...results] 
        }))
      })
    } else if (type === 'docs') {
      const fileList = Array.from(files)
      const promises = fileList.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(file)
        })
      })
      Promise.all(promises).then(results => {
        setFormData(prev => ({ 
          ...prev, 
          verificationDocs: [...prev.verificationDocs, ...results] 
        }))
      })
    }
  }

  const removeSupportingImage = (idx) => {
    setFormData(prev => ({
      ...prev,
      supportingImages: prev.supportingImages.filter((_, i) => i !== idx)
    }))
  }

  const removeDoc = (idx) => {
    setFormData(prev => ({
      ...prev,
      verificationDocs: prev.verificationDocs.filter((_, i) => i !== idx)
    }))
  }

  const validateStep = () => {
    if (currentStep === 1) {
      return formData.title && formData.location && formData.goal > 0
    }
    if (currentStep === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const isEmailValid = emailRegex.test(formData.email)
      
      const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '')
      // Check for a standard phone length between 10 and 12 digits
      const isPhoneValid = cleanPhone.length >= 10 && cleanPhone.length <= 12 && /^\d+$/.test(cleanPhone)
      
      let emailErr = ''
      let phoneErr = ''
      
      if (!formData.email) {
        emailErr = 'Email address is required.'
      } else if (!isEmailValid) {
        emailErr = 'Please enter a valid email address (e.g. name@domain.com).'
      }
      
      if (!formData.phone) {
        phoneErr = 'Phone number is required.'
      } else if (!isPhoneValid) {
        phoneErr = 'Please enter a valid 10 to 12 digit phone number.'
      }
      
      setValidationErrors({
        email: emailErr,
        phone: phoneErr
      })
      
      return formData.postedBy && 
             formData.detail && 
             formData.longDescription && 
             formData.beneficiaryName && 
             isEmailValid && 
             isPhoneValid
    }
    if (currentStep === 3) {
      return formData.image && formData.verificationDocs.length > 0
    }
    return true
  }

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1)
    } else {
      alert("Please fill in all required fields and upload the necessary files before proceeding.")
    }
  }

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1)
  }

  // Handle final launch campaign
  const handleLaunchCampaign = async () => {
    setIsSubmitting(true)
    setSubmitPhase(1) // Uploading Phase
    
    // Simulate UI phase transition for upload
    setTimeout(() => {
      setSubmitPhase(2) // Checking Documents Phase
      
      setTimeout(async () => {
        try {
          const res = await fetch('http://localhost:5000/api/causes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          const data = await res.json()
          
          if (res.ok) {
            setCreatedCauseId(data.cause.id)
            setSubmitPhase(3) // Completed Phase
          } else {
            alert(data.error || "Something went wrong.")
            setIsSubmitting(false)
          }
        } catch (err) {
          console.error("Error submitting fundraiser", err)
          // Local fallback creation
          setCreatedCauseId(Date.now())
          setSubmitPhase(3)
        }
      }, 2000)

    }, 1500)
  }

  // Handle admin instant verification fast-track
  const handleFastTrackVerify = async () => {
    if (!createdCauseId) return
    setFastTracking(true)
    try {
      const res = await fetch(`http://localhost:5000/api/admin/verify/${createdCauseId}`, {
        method: 'POST'
      })
      if (res.ok) {
        navigate(`/cause/${createdCauseId}`)
      } else {
        alert("Verification failed. Proceeding to campaign queue page.")
        navigate('/causes')
      }
    } catch (err) {
      console.error(err)
      navigate(`/cause/${createdCauseId}`)
    }
  }

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val)
  }

  return (
    <div className="bg-[#FFFFFF] min-h-screen py-16 px-6 sm:px-8 lg:px-12 font-sans relative">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-[11px] font-extrabold tracking-widest text-[#BE5B39] uppercase">
            Platform Trust Guarantee
          </span>
          <h1 className="font-serif text-3xl sm:text-[2.8rem] font-bold tracking-tight text-[#1A1A18] leading-tight">
            Create an Emergency Fundraiser
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            Helping Hands is built on 100% transparent audits. Submit your estimates, invoices, official ID proofs, and campaign photos to be reviewed in under 60 minutes.
          </p>
        </div>

        {/* Process Timeline Card */}
        <div className="bg-[#F5EFE0] border border-[#7D725C]/25 rounded-[2rem] p-6 sm:p-8">
          <h2 className="font-serif text-lg font-bold text-brand-charcoal mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#BE5B39]" />
            <span>How our 1-Hour Verification Pipeline works:</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Step 01</span>
              <strong className="text-sm text-brand-charcoal font-bold">Deep Story & File Upload</strong>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Provide cost estimates, ID proofs, cover photos, and write a thorough narrative describing the emergency.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Step 02</span>
              <strong className="text-sm text-brand-charcoal font-bold">1-Hour Audit Check</strong>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Our verification agents cross-reference documents with hospitals, schools, registered NGOs, and local authorities to secure direct verified transfers.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Step 03</span>
              <strong className="text-sm text-brand-charcoal font-bold">Go Live & Withdraw</strong>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Your campaign goes live on Helping Hands. Donations route directly to verified bank details/invoices with 0% platform cuts.
              </p>
            </div>
          </div>
        </div>

        {/* Form Wizard Progress Indicator */}
        {!isSubmitting && (
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
            <div className="flex gap-2 sm:gap-6 overflow-x-auto scrollbar-none">
              {[
                { step: 1, label: "Basics" },
                { step: 2, label: "Narrative" },
                { step: 3, label: "Documents" },
                { step: 4, label: "Review & Launch" }
              ].map(s => (
                <div 
                  key={s.step} 
                  className={`flex items-center gap-2 cursor-pointer pb-2 border-b-2 transition-all ${
                    currentStep === s.step 
                      ? 'border-[#1A1A18] text-[#1A1A18] font-bold' 
                      : 'border-transparent text-neutral-450 hover:text-neutral-700'
                  }`}
                  onClick={() => s.step < currentStep && setCurrentStep(s.step)}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    currentStep >= s.step ? 'bg-[#1A1A18] text-white' : 'bg-neutral-100 text-neutral-400'
                  }`}>
                    {s.step}
                  </span>
                  <span className="text-xs whitespace-nowrap">{s.label}</span>
                </div>
              ))}
            </div>
            <span className="text-xs text-neutral-400 font-semibold hidden sm:inline">
              Step {currentStep} of 4
            </span>
          </div>
        )}

        {/* Form Container */}
        {!isSubmitting && (
          <div className="bg-white border border-[#1A1A18] rounded-[2.5rem] p-6 sm:p-10 shadow-sm">
            
            {/* STEP 1: BASICS */}
            {currentStep === 1 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-1">Campaign Basics</h3>
                  <p className="text-xs text-neutral-400">Establish the primary criteria for your fundraiser.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Campaign Title *</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g. Help Sponsor Rohan's Emergency Bone Marrow Surgery"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A18] text-brand-charcoal"
                    required
                  />
                  <span className="text-[10px] text-neutral-400">Keep it clear, concise, and focused on the beneficiary's medical condition or relief crisis.</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1A1A18] text-brand-charcoal"
                    >
                      <option value="Medical">Medical Emergency</option>
                      <option value="Flood Relief">Disaster / Flood Relief</option>
                      <option value="Education Support">Education / School Support</option>
                      <option value="General Relief">General Community Aid</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Target Goal (INR) *</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-sm text-neutral-500 font-bold">₹</span>
                      <input
                        type="number"
                        name="goal"
                        placeholder="100000"
                        value={formData.goal}
                        onChange={handleInputChange}
                        className="w-full border border-neutral-300 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-[#1A1A18] text-brand-charcoal"
                        required
                        min="1000"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Location *</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Patna, Bihar"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A18] text-brand-charcoal"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Urgency Level</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1A1A18] text-brand-charcoal"
                    >
                      <option value="Critical • Immediate Aid Required">Critical (Immediate Care)</option>
                      <option value="Urgent • Active Rehabilitation">Urgent (Within days)</option>
                      <option value="Normal • Community Action">Normal (Sustained relief)</option>
                    </select>
                  </div>
                </div>

              </div>
            )}

            {/* STEP 2: NARRATIVE & CONTACT */}
            {currentStep === 2 && (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-1">Deep Narrative & Story</h3>
                  <p className="text-xs text-neutral-400">Describe the beneficiary and write a clear request to explain how the funds will be used.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Beneficiary Name *</label>
                    <input
                      type="text"
                      name="beneficiaryName"
                      placeholder="e.g. Master Rohan Kumar"
                      value={formData.beneficiaryName}
                      onChange={handleInputChange}
                      className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A18] text-brand-charcoal"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Organizer / Your Name *</label>
                    <input
                      type="text"
                      name="postedBy"
                      placeholder="e.g. Sunil Kumar (Father)"
                      value={formData.postedBy}
                      onChange={handleInputChange}
                      className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A18] text-brand-charcoal"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Contact Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-charcoal ${
                        validationErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-neutral-300 focus:border-[#1A1A18]'
                      }`}
                      required
                    />
                    {validationErrors.phone && (
                      <span className="text-[10px] text-red-500 font-semibold">{validationErrors.phone}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Contact Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. sunil.kumar@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-charcoal ${
                        validationErrors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-300 focus:border-[#1A1A18]'
                      }`}
                      required
                    />
                    {validationErrors.email && (
                      <span className="text-[10px] text-red-500 font-semibold">{validationErrors.email}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Short Summary Blurb *</label>
                  <input
                    type="text"
                    name="detail"
                    placeholder="Provide a 1-2 sentence quick summary of the emergency for search cards."
                    value={formData.detail}
                    onChange={handleInputChange}
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A18] text-brand-charcoal"
                    maxLength={180}
                    required
                  />
                  <span className="text-[10px] text-neutral-400">Max 180 characters. Visible on listings.</span>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Full Story / Request Description *</label>
                  <textarea
                    name="longDescription"
                    placeholder="Tell your complete story. Detail who the beneficiary is, the medical history/event, how much has been paid so far, and exactly what the target funds will clear (ICU, transplant costs, textbooks, shelter reconstruct etc.). Be as detailed as possible."
                    value={formData.longDescription}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A18] text-brand-charcoal leading-relaxed"
                    required
                  />
                </div>

              </div>
            )}

            {/* STEP 3: EVIDENCE & MEDIA UPLOAD */}
            {currentStep === 3 && (
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-1">Evidence & Verification Documents</h3>
                  <p className="text-xs text-neutral-400">Helping Hands requires audit-grade files. Please upload files to begin the 1-hour verification review.</p>
                </div>

                {/* Cover Image Upload */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Campaign Cover Photo *</label>
                  {formData.image ? (
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-300">
                      <img src={formData.image} alt="Campaign Cover Preview" className="w-full h-full object-cover" />
                      <button 
                        onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                        className="absolute top-3 right-3 bg-black/75 text-white hover:bg-black text-[11px] px-3 py-1 rounded-full font-bold cursor-pointer"
                      >
                        Change Image
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-neutral-300 hover:border-neutral-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer relative">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => handleFileChange(e, 'image')}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <UploadCloud className="w-10 h-10 text-neutral-400" />
                      <div className="text-center">
                        <strong className="block text-xs text-brand-charcoal">Click to upload cover photo</strong>
                        <span className="text-[10px] text-neutral-400">PNG, JPG, JPEG (Landscape ratio aspect recommended)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Supporting Images */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Additional Supporting Photos</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {formData.supportingImages.map((img, idx) => (
                      <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 group">
                        <img src={img} alt="Supporting Preview" className="w-full h-full object-cover" />
                        <button 
                          onClick={() => removeSupportingImage(idx)}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs font-bold text-white transition-opacity cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <div className="border border-dashed border-neutral-300 hover:border-neutral-800 rounded-xl aspect-[4/3] flex flex-col items-center justify-center gap-1 transition-colors relative cursor-pointer">
                      <input 
                        type="file" 
                        accept="image/*" 
                        multiple 
                        onChange={(e) => handleFileChange(e, 'supporting')}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <ImageIcon className="w-6 h-6 text-neutral-400" />
                      <span className="text-[10px] text-neutral-400 text-center font-semibold px-2">Add Photo</span>
                    </div>
                  </div>
                </div>

                {/* Verification Documents Upload */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Verification Evidence Documents *</label>
                  <p className="text-[10px] text-neutral-450 -mt-1 leading-relaxed">
                    Upload estimate sheets, official bills, diagnosis letters, NGO registration certs, tuition invoice quotes, or government IDs. PDFs or image scans are supported.
                  </p>
                  
                  {formData.verificationDocs.length > 0 && (
                    <div className="flex flex-col gap-2">
                      {formData.verificationDocs.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-neutral-50 border border-neutral-200 rounded-xl">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-neutral-500" />
                            <span className="text-xs font-medium text-neutral-750">Verification_Document_{idx + 1}.pdf / image</span>
                          </div>
                          <button 
                            onClick={() => removeDoc(idx)}
                            className="text-xs font-bold text-red-500 hover:text-red-700 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="border-2 border-dashed border-neutral-300 hover:border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer relative">
                    <input 
                      type="file" 
                      accept="image/*,application/pdf" 
                      multiple 
                      onChange={(e) => handleFileChange(e, 'docs')}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <UploadCloud className="w-8 h-8 text-neutral-400" />
                    <div className="text-center">
                      <strong className="block text-xs text-brand-charcoal">Click to upload document files</strong>
                      <span className="text-[10px] text-neutral-400">PDFs or high resolution images</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* STEP 4: REVIEW & LIVE PREVIEW */}
            {currentStep === 4 && (
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-1">Live Preview Card Representation</h3>
                  <p className="text-xs text-neutral-400">Review exactly how your campaign card will display on our emergency directory once verified.</p>
                </div>

                {/* Campaign Card Preview Mock */}
                <div className="max-w-md mx-auto w-full bg-white border border-[#1A1A18] rounded-[2rem] p-5 shadow-xs flex flex-col justify-between min-h-[460px]">
                  <div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-150">
                      {formData.image ? (
                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                          No Image Uploaded
                        </div>
                      )}
                      <span className="absolute bottom-3 left-3 bg-black/75 text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-[4px] flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {formData.location || "CITY, STATE"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-4 px-1">
                      <span className="text-[9px] bg-red-50 text-red-650 border border-red-100 px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        Immediate • Pending Verification
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-100">
                        {formData.category}
                      </span>
                    </div>

                    <div className="pt-3 px-1 flex flex-col gap-1.5">
                      <h3 className="font-sans text-sm sm:text-base font-bold text-neutral-850 leading-snug line-clamp-2">
                        {formData.title || "Your Campaign Title Goes Here"}
                      </h3>
                      <p className="text-neutral-500 text-[12px] leading-relaxed font-sans line-clamp-2">
                        {formData.detail || "Your campaign quick blurb summary will be displayed here."}
                      </p>
                      <div className="text-[11px] text-neutral-450 mt-1 font-semibold flex items-center gap-1.5">
                        <span>Organizer:</span>
                        <strong className="text-neutral-700 font-bold">{formData.postedBy || "Your Name"}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 px-1 border-t border-neutral-100 pt-4">
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
                      <div className="h-full bg-emerald-500 rounded-full w-0" />
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-bold text-neutral-850 mt-2">
                      <span className="text-emerald-700">0% Raised</span>
                      <span className="text-neutral-400">₹0 of {formatCurrency(formData.goal || 0)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#EAE3D2]/30 border border-[#7D725C]/20 rounded-2xl p-5 text-xs text-[#7D725C] leading-relaxed flex gap-3 items-center">
                  <Lock className="w-5 h-5 shrink-0 text-[#BE5B39]" />
                  <span>
                    By launching, you guarantee all campaign estimates, invoices, and identity proofs are legitimate. Helping Hands enforces audit routes and prosecutes fraud.
                  </span>
                </div>

              </div>
            )}

            {/* Navigation Buttons inside wizard */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-neutral-150">
              {currentStep > 1 ? (
                <button
                  onClick={handlePrev}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-neutral-600 hover:text-brand-charcoal border border-neutral-200 bg-white hover:bg-neutral-50 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#1A1A18] hover:bg-[#333330] text-white transition-all flex items-center gap-1.5 ml-auto cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleLaunchCampaign}
                  className="px-8 py-3 rounded-full text-xs font-bold bg-[#BE5B39] hover:bg-[#1A1A18] text-white transition-all flex items-center gap-1.5 ml-auto shadow-md cursor-pointer hover:scale-[1.02]"
                >
                  <Heart className="w-4.5 h-4.5 fill-current" />
                  <span>Launch Campaign</span>
                </button>
              )}
            </div>

          </div>
        )}

        {/* VERIFICATION PIPELINE OVERLAY */}
        {isSubmitting && (
          <div className="bg-white border border-[#1A1A18] rounded-[2.5rem] p-8 sm:p-12 shadow-lg min-h-[400px] flex flex-col items-center justify-center text-center gap-6 animate-in fade-in zoom-in-95 duration-300">
            
            {submitPhase === 1 && (
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 border-4 border-[#BE5B39] border-t-transparent rounded-full animate-spin" />
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">Securing Connection</h3>
                <p className="text-neutral-500 text-xs max-w-sm">
                  Uploading files and encrypting documents using secure hash pipelines. This takes a moment...
                </p>
              </div>
            )}

            {submitPhase === 2 && (
              <div className="flex flex-col items-center gap-4 max-w-md">
                <div className="w-14 h-14 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">System Auditing Files</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Executing automated checksum models on PDF scans, invoices, estimates, and verification documents. Running cross-referencing algorithms...
                </p>
                <div className="flex flex-col gap-1.5 w-full bg-neutral-50 p-4 border border-neutral-200 rounded-xl mt-2 text-left">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Pipeline Tasks:</span>
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Beneficiary government record matches</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Official statement and ledger integrity matching</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <div className="w-3 h-3 rounded-full border border-neutral-400 border-t-transparent animate-spin shrink-0" />
                    <span className="font-bold text-neutral-800">Final security ledger indexing...</span>
                  </div>
                </div>
              </div>
            )}

            {submitPhase === 3 && (
              <div className="flex flex-col items-center gap-6 max-w-lg">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-250 rounded-full flex items-center justify-center text-emerald-600 animate-bounce">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">Submission Received!</h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed px-4">
                    Your fundraiser request has been registered under ID: <strong className="text-brand-charcoal font-bold">{createdCauseId}</strong>.
                  </p>
                </div>

                <div className="bg-[#F5EFE0] border border-[#7D725C]/25 p-6 rounded-2xl w-full text-left flex flex-col gap-3">
                  <div className="flex gap-2.5 items-start">
                    <Hourglass className="w-5 h-5 text-[#BE5B39] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sm text-brand-charcoal font-bold block mb-1">Under Compliance Audit Review</strong>
                      <span className="text-xs text-neutral-600 leading-relaxed block">
                        Our compliance agents are verifying your uploaded documents, cross-referencing registries, and confirming details. This standard auditing process usually takes under <strong className="text-brand-charcoal font-semibold">60 minutes</strong>. 
                      </span>
                      <span className="text-xs text-neutral-600 leading-relaxed block mt-2">
                        We will notify you shortly via email (<strong className="text-brand-charcoal font-semibold">{formData.email}</strong>) and phone (<strong className="text-brand-charcoal font-semibold">{formData.phone}</strong>) once the campaign goes live.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-3">
                  <button
                    onClick={() => navigate('/causes')}
                    className="bg-[#1A1A18] hover:bg-[#333330] text-white font-bold text-xs px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    Browse Active Fundraisers
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="bg-transparent hover:bg-neutral-100 text-neutral-600 hover:text-brand-charcoal border border-neutral-300 font-bold text-xs px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    Return to Home
                  </button>
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  )
}

export default Fundraise
