import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { mockNGOs } from '../data/mockNGOs'
import { mockCauses } from '../data/mockCauses'
import { 
  GraduationCap, 
  HeartHandshake, 
  Activity, 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight,
  Heart,
  Users,
  MapPin,
  ArrowUpRight,
  Plus,
  Send,
  UserCheck
} from 'lucide-react'

const NGOs = () => {
  const navigate = useNavigate()
  
  const [ngosList, setNgosList] = useState(mockNGOs)
  // State for peer-to-peer community posts
  const [communityPosts, setCommunityPosts] = useState([
    {
      id: 101,
      title: "Urgent Treatment Support for 6-Year-Old Rohan's Brain Tumor Surgery",
      location: 'HYDERABAD, INDIA',
      postedBy: 'Meera Nair (Mother)',
      condition: 'Brain Tumor Surgery',
      urgency: 'Critical • Immediate Aid Required',
      detail: 'Rohan is scheduled for emergency surgical resection at Apollo Hospital. We need help to clear the ICU deposit.',
      goal: 350000,
      raised: 145000,
      percentage: 41,
      image: '/hero_group_children.png'
    },
    {
      id: 102,
      title: 'Rebuilding My Small Tea Shop and Home Destroyed in Assam Floods',
      location: 'SILCHAR, ASSAM',
      postedBy: 'Devendra Das (Owner)',
      condition: 'Flood Disaster Relief',
      urgency: 'Urgent • Active Rehabilitation',
      detail: 'Severe monsoons washed away my tea shop, our family\'s only income. Need funds to purchase sheets and cups.',
      goal: 45000,
      raised: 28000,
      percentage: 62,
      image: '/hero_mud_hands.png'
    },
    {
      id: 103,
      title: 'Sponsor Emergency Knee Surgery for Daily Wage Worker Harish',
      location: 'MYSORE, INDIA',
      postedBy: 'Sumalatha (Sister)',
      condition: 'Accident Recovery',
      urgency: 'Urgent • 5 Days Left',
      detail: 'Harish suffered multiple fractures after falling at a construction site. Requires orthopedic plates to walk again.',
      goal: 85000,
      raised: 62000,
      percentage: 72,
      image: '/hero_food_received.png'
    }
  ])

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Fetch live NGOs from custom backend
    fetch('http://localhost:5000/api/ngos')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setNgosList(data)
        }
      })
      .catch(err => console.log('Backend offline, falling back to local mockNGOs', err))

    // Fetch live verified community emergency requests
    fetch('http://localhost:5000/api/causes')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const communityOnly = data.filter(c => c.ngo === 'Independent Beneficiary Account')
          if (communityOnly.length > 0) {
            setCommunityPosts(communityOnly)
          }
        }
      })
      .catch(err => console.log('Backend offline, falling back to local community mock posts', err))
  }, [])

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-[#BE5B39]" strokeWidth={1.5} />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-[#BE5B39]" strokeWidth={1.5} />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-[#BE5B39]" strokeWidth={1.5} />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-8 h-8 text-[#BE5B39]" strokeWidth={1.5} />;
      default:
        return <Activity className="w-8 h-8 text-[#BE5B39]" strokeWidth={1.5} />;
    }
  }

  const getActiveEmergencyCount = (ngoName) => {
    return mockCauses.filter(c => c.ngo.toLowerCase() === ngoName.toLowerCase()).length
  }

  const handleSupportNGO = (ngoName) => {
    navigate('/causes', { state: { selectedNGO: ngoName } })
  }

  // Handle donation to direct peer-to-peer posts
  const handleDonateDirectly = (post) => {
    const customCause = {
      title: post.title,
      ngo: 'Independent Beneficiary Account',
      image: post.image,
      condition: post.condition || 'Emergency Care',
      id: post.id
    }
    navigate('/donate', { state: { customCause, amount: '3000' } })
  }

  // Handle submitting new direct community request
  const handlePostRequest = (e) => {
    e.preventDefault()
    if (!newTitle || !newLocation || !newPostedBy || !newGoal || !newDetail) {
      alert('Please fill out all fields to post your request.')
      return
    }

    const goalVal = parseInt(newGoal)
    if (isNaN(goalVal) || goalVal <= 0) {
      alert('Please enter a valid goal amount.')
      return
    }

    const newPost = {
      id: Date.now(),
      title: newTitle,
      location: newLocation.toUpperCase(),
      postedBy: newPostedBy,
      condition: newCondition || 'General Support',
      urgency: 'Immediate • Posted Just Now',
      detail: newDetail,
      goal: goalVal,
      raised: 0,
      percentage: 0,
      image: '/hero_stacked_hands.png' // Default stock image for new posts
    }

    setCommunityPosts([newPost, ...communityPosts])

    // Reset Form fields
    setNewTitle('')
    setNewLocation('')
    setNewPostedBy('')
    setNewCondition('')
    setNewDetail('')
    setNewGoal('')

    alert('Your emergency request has been posted successfully directly onto the community help board!')
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="bg-white min-h-screen py-16 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-[11px] font-extrabold tracking-widest text-[#BE5B39] uppercase">
            Vetted Collaborations & Community Giving
          </span>
          <h1 className="font-serif text-[2.5rem] sm:text-[3.5rem] font-bold tracking-tight text-[#1A1A18] leading-[1.1]">
            Our Verified NGO Partners
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We perform extensive legal compliance checks, financial audits, and field validations. 100% of your contributions are routed directly to these partners for field utilization.
          </p>
        </div>

        {/* Directory Grid - Simplified NGO cards with just name and Start Donating CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ngosList.map(ngo => {
            return (
              <div 
                key={ngo.id}
                className="bg-white border border-[#1A1A18] rounded-[2rem] p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[220px]"
              >
                <div>
                  {/* Top: Icon and verification badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-neutral-200/60 flex items-center justify-center">
                      {getIcon(ngo.iconName)}
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-50/50 border border-emerald-100/80 text-emerald-800 px-2 py-0.5 rounded-full text-[9px] font-bold select-none">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Focus & Name */}
                  <div className="flex flex-col">
                    <span className="text-[9px] font-extrabold text-[#BE5B39] tracking-wider uppercase">
                      {ngo.focus}
                    </span>
                    <h2 className="font-serif text-lg font-bold text-[#1A1A18] mt-1 leading-tight">
                      {ngo.name}
                    </h2>
                  </div>
                </div>

                {/* CTA Action button - Highlighted */}
                <Link
                  to={`/ngo/${ngo.id}`}
                  className="mt-6 w-full text-center bg-[#BE5B39] hover:bg-[#1A1A18] text-white py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm transform hover:scale-[1.01]"
                >
                  <span>Start Donating</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Section 2: Direct Peer-to-Peer Community Requests (Not related to NGO) */}
        <div className="border-t border-neutral-200 pt-16 flex flex-col gap-10">
          
          <div className="max-w-3xl flex flex-col gap-2">
            <span className="text-[10px] font-extrabold tracking-widest text-[#BE5B39] uppercase">
              Direct Peer-to-Peer Relief
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A18]">
              Independent Community Help Board
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              These campaigns are created directly by patients, students, or families in urgent distress and are not affiliated with any NGO. Funds are dispatched directly to the individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityPosts.map(post => (
              <div 
                key={post.id}
                className="bg-white border border-[#1A1A18] rounded-3xl p-6 flex flex-col sm:flex-row gap-6 hover:shadow-xs transition-all"
              >
                {/* Post Image thumbnail */}
                <div className="w-full sm:w-44 h-32 rounded-2xl overflow-hidden shrink-0 border border-neutral-100 bg-neutral-50">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>

                {/* Post Details */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-[9px] bg-red-50 text-red-650 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider select-none">
                        {post.urgency}
                      </span>
                      <span className="text-[10px] text-neutral-450 font-bold flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {post.location}
                      </span>
                    </div>
                    
                    <h3 className="font-sans font-bold text-sm sm:text-base text-[#1A1A18] mt-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 mt-1.5 leading-relaxed line-clamp-2">
                      {post.detail}
                    </p>
                    
                    <div className="mt-2 text-[10px] text-neutral-450 font-semibold flex items-center gap-1">
                      <UserCheck className="w-3 h-3 text-neutral-450" />
                      <span>Posted by: <strong className="text-neutral-700 font-bold">{post.postedBy}</strong></span>
                    </div>
                  </div>

                  {/* Progress & Donate CTA */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Progress bar */}
                    <div className="flex-grow max-w-xs flex flex-col gap-1.5">
                      <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/50">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
                          style={{ width: `${Math.min(post.percentage, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[9px] font-bold text-neutral-800">
                        <span className="text-emerald-700">{post.percentage}% Funded</span>
                        <span className="text-neutral-400">{formatCurrency(post.raised)} of {formatCurrency(post.goal)}</span>
                      </div>
                    </div>

                    {/* Highlighted Donate Now */}
                    <button
                      onClick={() => handleDonateDirectly(post)}
                      className="bg-[#BE5B39] hover:bg-[#1A1A18] text-white px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer self-end sm:self-auto"
                    >
                      <span>Donate Directly</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default NGOs
