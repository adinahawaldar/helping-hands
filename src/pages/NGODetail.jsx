import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { mockNGOs } from '../data/mockNGOs'
import { mockCauses } from '../data/mockCauses'
import { 
  ShieldCheck, 
  MapPin, 
  ArrowLeft, 
  Activity, 
  GraduationCap, 
  HeartHandshake, 
  ShieldAlert,
  ArrowUpRight,
  Heart,
  Globe,
  Settings,
  Plus,
  Compass
} from 'lucide-react'

const NGODetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const ngoId = id ? parseInt(id) : 1
  const ngo = mockNGOs.find(n => n.id === ngoId) || mockNGOs[0]

  const [customPackageAmount, setCustomPackageAmount] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-10 h-10 text-[#BE5B39]" strokeWidth={1.5} />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-10 h-10 text-[#BE5B39]" strokeWidth={1.5} />;
      case 'Activity':
        return <Activity className="w-10 h-10 text-[#BE5B39]" strokeWidth={1.5} />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-10 h-10 text-[#BE5B39]" strokeWidth={1.5} />;
      default:
        return <Activity className="w-10 h-10 text-[#BE5B39]" strokeWidth={1.5} />;
    }
  }

  // Filter campaigns run by this NGO
  const activeEmergencies = mockCauses.filter(
    cause => cause.ngo.toLowerCase() === ngo.name.toLowerCase()
  )

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value)
  }

  // Handle direct donation packages
  const handleDonatePackage = (amountValue, packageName) => {
    const customCause = {
      title: `General NGO Support - ${packageName}`,
      ngo: ngo.name,
      image: '/hero_mud_hands.png',
      condition: ngo.focus,
      id: 999 // Virtual ID for NGO direct donation
    }
    navigate('/donate', { state: { customCause, amount: amountValue } })
  }

  const handleCustomDonate = (e) => {
    e.preventDefault()
    if (!customPackageAmount || parseInt(customPackageAmount) <= 0) {
      alert('Please enter a valid amount.')
      return
    }
    handleDonatePackage(customPackageAmount, 'Custom Contribution')
  }

  // Mock details depending on NGO
  const getNGOOperationalDetails = () => {
    switch (ngo.name) {
      case 'ABC Foundation':
        return {
          what: 'We set up mobile libraries, build supplementary learning centers in low-income neighborhoods, and sponsor school accessories to reduce student dropouts.',
          how: 'We collaborate with local community leaders to identify at-risk children, coordinate volunteer teachers, and directly source quality learning materials from bulk producers to optimize expenditure.',
          locality: 'Operating across Maharashtra, Karnataka, and Bihar, covering 42 urban slum clusters and 15 rural flood-prone schools.'
        }
      case 'Feeding Hands NGO':
        return {
          what: 'We focus on hunger eradication and emergency food relief. We cook and distribute warm, nutritious meals, and distribute dry ration packs during natural disasters.',
          how: 'We establish community-run mega kitchens, partner with surplus food networks, and operate emergency volunteer mobilization networks in disaster zones.',
          locality: 'Headquartered in Delhi NCR with active field kitchens in Gujarat, Uttar Pradesh, and Bihar disaster rehabilitation centers.'
        }
      case 'Care & Cure Trust':
        return {
          what: 'We provide subsidized medical care, fund critical pediatric and adult surgeries, and organize rural checkup camps for early detection of health complications.',
          how: 'We partner with super-specialty hospitals to secure subsidized surgery quotas, run mobile clinic vans in remote villages, and verify treatments directly with hospital medical boards.',
          locality: 'Operating primary clinics across Tamil Nadu, Andhra Pradesh, and Maharashtra, with specialized disaster medical response squads.'
        }
      case 'Disaster Response India':
        return {
          what: 'We provide urgent disaster relief, setting up temporary dry shelters, distributing hygiene survival kits, and operating clean water purification stations in flood hit zones.',
          how: 'We deploy rapid action field teams, utilize rescue boats, coordinate closely with municipal disaster committees, and track real-time relief distribution via GPS-enabled field units.',
          locality: 'Active in Assam, West Bengal, Kerala, and Himachal Pradesh, specifically covering high-risk coastal and mountain valleys.'
        }
      default:
        return {
          what: 'We work on providing immediate relief, education, hunger mitigation, and healthcare facilities directly to families facing extreme distress.',
          how: 'By coordinating with grassroot workers, verifying and auditing local needs, and leveraging digital tools to trace donation usage and generate impact reviews.',
          locality: 'Currently operating in 10 states across India, focusing on underserved rural districts and remote mountain terrains.'
        }
    }
  }

  const details = getNGOOperationalDetails()

  const actionImages = [
    { src: '/hero_mud_hands.png', alt: 'Field operations and child education' },
    { src: '/hero_food_received.png', alt: 'Ration distribution and community kitchen' },
    { src: '/hero_stacked_hands.png', alt: 'Collaborative volunteer operations' },
    { src: '/hero_group_children.png', alt: 'Health camp and child medical support' }
  ]

  return (
    <div className="bg-white min-h-screen py-12 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Link */}
        <Link 
          to="/ngos" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 font-semibold text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to verified partners
        </Link>

        {/* Top Header Card */}
        <div className="bg-[#FAF8F5] border border-neutral-200 rounded-[2.5rem] p-8 md:p-10 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center shrink-0">
              {getIcon(ngo.iconName)}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] bg-[#BE5B39] text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider self-start mb-1.5">
                {ngo.focus}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A18] leading-tight">
                {ngo.name}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-bold self-start select-none">
            <ShieldCheck className="w-4 h-4" />
            <span>Helping Hands Verified Partner</span>
          </div>
        </div>

        {/* Detailed Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Left: What, How, Locality (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* What We Do */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EAE3D2]/35 border border-[#7D725C]/20 flex items-center justify-center text-[#BE5B39] shrink-0 font-bold select-none">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-lg font-bold text-[#1A1A18]">What We Do</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{details.what}</p>
              </div>
            </div>

            {/* How We Do It */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EAE3D2]/35 border border-[#7D725C]/20 flex items-center justify-center text-[#BE5B39] shrink-0 font-bold select-none">
                <Settings className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-lg font-bold text-[#1A1A18]">How We Do It</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{details.how}</p>
              </div>
            </div>

            {/* Locality */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EAE3D2]/35 border border-[#7D725C]/20 flex items-center justify-center text-[#BE5B39] shrink-0 font-bold select-none">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-lg font-bold text-[#1A1A18]">Locality & Coverage</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{details.locality}</p>
              </div>
            </div>

            {/* Gallery Images */}
            <div className="flex flex-col gap-3.5 mt-2">
              <h3 className="font-serif text-lg font-bold text-[#1A1A18]">NGO Action Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {actionImages.map((img, index) => (
                  <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-xs bg-neutral-100 border border-neutral-150 group">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: NGO Donation Packages (5 columns) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-neutral-200 rounded-[2.5rem] p-6 sm:p-8 flex flex-col gap-6">
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1A1A18]">Support Our Operations</h2>
              <p className="text-neutral-500 text-xs mt-1">Select a direct package to fund resources, or set a custom amount.</p>
            </div>

            {/* Donation Packages */}
            <div className="flex flex-col gap-4">
              
              {/* Package 1: 100rs school accessories */}
              <div 
                onClick={() => handleDonatePackage('100', 'School Accessories Package')}
                className="bg-white border border-neutral-200 hover:border-[#BE5B39] rounded-2xl p-4 flex items-start gap-3.5 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-[#BE5B39] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex justify-between items-center w-full">
                    <strong className="text-sm text-[#1A1A18] font-bold">School Accessories Package</strong>
                    <span className="text-sm font-extrabold text-[#BE5B39] ml-2">₹100</span>
                  </div>
                  <p className="text-[11px] text-neutral-550 mt-1 leading-relaxed">
                    Sponsors pencils, notebooks, and dynamic geometry boxes for a student in need.
                  </p>
                </div>
              </div>

              {/* Package 2: 500rs food ration */}
              <div 
                onClick={() => handleDonatePackage('500', 'Nutritional Meals Package')}
                className="bg-white border border-neutral-200 hover:border-[#BE5B39] rounded-2xl p-4 flex items-start gap-3.5 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-[#BE5B39] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex justify-between items-center w-full">
                    <strong className="text-sm text-[#1A1A18] font-bold">Nutritional Food Kit</strong>
                    <span className="text-sm font-extrabold text-[#BE5B39] ml-2">₹500</span>
                  </div>
                  <p className="text-[11px] text-neutral-550 mt-1 leading-relaxed">
                    Provides clean drinking water bottles and dry ration packs for one displaced family.
                  </p>
                </div>
              </div>

              {/* Package 3: 2000rs Medical checkup */}
              <div 
                onClick={() => handleDonatePackage('2000', 'Medical Support Package')}
                className="bg-white border border-neutral-200 hover:border-[#BE5B39] rounded-2xl p-4 flex items-start gap-3.5 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-[#BE5B39] shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex justify-between items-center w-full">
                    <strong className="text-sm text-[#1A1A18] font-bold">Urgent Medical Support</strong>
                    <span className="text-sm font-extrabold text-[#BE5B39] ml-2">₹2,000</span>
                  </div>
                  <p className="text-[11px] text-neutral-550 mt-1 leading-relaxed">
                    Funds emergency pediatric checkups, diagnostics, and essential field medication.
                  </p>
                </div>
              </div>

              {/* Custom Donation Form */}
              <form onSubmit={handleCustomDonate} className="bg-white border border-neutral-200 rounded-2xl p-4 flex flex-col gap-3">
                <label className="text-[10px] font-bold text-neutral-450 uppercase tracking-wider">Custom Donation Amount</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 font-bold text-neutral-400 text-sm">₹</span>
                  <input
                    type="text"
                    placeholder="Enter Custom Amount (e.g. 1500)"
                    value={customPackageAmount}
                    onChange={(e) => setCustomPackageAmount(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full pl-8 pr-4 py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#1A1A18] font-bold text-sm text-[#1A1A18]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1A1A18] hover:bg-[#BE5B39] text-white py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Donate Custom Amount</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>

        {/* Active emergencies managed by NGO */}
        <div className="flex flex-col gap-6 border-t border-neutral-150 pt-10">
          <div className="border-b border-neutral-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A1A18]">
              Active Emergencies by {ngo.name}
            </h2>
          </div>

          {activeEmergencies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeEmergencies.map((cause) => (
                <div 
                  key={cause.id} 
                  className="bg-white border border-neutral-200 shadow-sm rounded-[2rem] p-5 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300 justify-between min-h-[460px]"
                >
                  <div>
                    {/* Cause Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs bg-neutral-100 border border-neutral-100">
                      <img
                        src={cause.image}
                        alt={cause.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-[4px] select-none flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {cause.location}
                      </span>
                    </div>

                    {/* Urgency Badge & Category Tag */}
                    <div className="flex items-center justify-between gap-2 mt-4 px-1">
                      <span className="text-[9px] bg-red-50 text-red-650 px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider border border-red-100">
                        {cause.urgency}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        cause.category === 'Medical' 
                          ? 'bg-amber-50 text-amber-805 border border-amber-100' 
                          : 'bg-blue-50 text-blue-805 border border-blue-100'
                      }`}>
                        {cause.category}
                      </span>
                    </div>

                    {/* Title & Details */}
                    <div className="pt-3 px-1 flex flex-col gap-1.5">
                      <h3 className="font-sans text-sm sm:text-base font-bold text-neutral-800 leading-snug line-clamp-2 hover:text-[#BE5B39] transition-colors">
                        <Link to={`/cause/${cause.id}`}>{cause.title}</Link>
                      </h3>
                      <p className="text-neutral-550 text-[12px] leading-relaxed font-sans mt-1 line-clamp-2">
                        {cause.detail}
                      </p>
                    </div>
                  </div>

                  <div>
                    {/* Progress Stats */}
                    <div className="mt-4 px-1 flex flex-col gap-2 border-t border-neutral-100 pt-3">
                      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/50">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
                          style={{ width: `${Math.min(cause.percentage, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-bold text-neutral-800">
                        <span className="text-emerald-700">{cause.percentage}% Raised</span>
                        <span className="text-neutral-400">{formatCurrency(cause.raised)} of {formatCurrency(cause.goal)}</span>
                      </div>
                    </div>

                    {/* Action buttons inside card - HIGHLIGHTED */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <Link
                        to={`/cause/${cause.id}`}
                        className="text-xs font-bold text-neutral-500 hover:text-[#BE5B39] transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/donate/${cause.id}`}
                        className="bg-[#BE5B39] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#1A1A18] transition-all flex items-center gap-1 shadow-sm"
                      >
                        <span>Donate Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#FAF8F5] border border-neutral-200 rounded-[2rem] flex flex-col items-center justify-center gap-2 shadow-xs">
              <span className="text-2xl">🌱</span>
              <strong className="text-neutral-750 font-serif">No active emergency campaigns</strong>
              <p className="text-xs text-neutral-400 max-w-xs">
                This NGO is not managing active emergency campaigns at the moment. Browse other non-profits or education/rehabilitation campaigns.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default NGODetail
