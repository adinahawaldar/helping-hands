import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { mockCauses } from '../data/mockCauses'
import { 
  Search, 
  MapPin, 
  ArrowUpRight, 
  Flame, 
  Droplet
} from 'lucide-react'

const Causes = () => {
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [causesList, setCausesList] = useState(mockCauses)

  // Scroll to top and fetch live causes
  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Check if category was passed from navigation state
    if (location.state && location.state.category) {
      setActiveCategory(location.state.category)
    }

    // Fetch verified causes from custom backend
    fetch('http://localhost:5000/api/causes')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setCausesList(data)
        }
      })
      .catch(err => console.log('Backend offline, using local mockCauses fallback', err))
  }, [location])

  const categories = ['All', 'Medical', 'Flood Relief']

  // Filter logic
  const filteredCauses = causesList.filter(cause => {
    const matchesSearch = 
      cause.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cause.ngo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (cause.condition && cause.condition.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = 
      activeCategory === 'All' ||
      (activeCategory === 'Medical' && cause.category === 'Medical') ||
      (activeCategory === 'Flood Relief' && cause.category === 'Flood Relief')

    return matchesSearch && matchesCategory
  })

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="bg-white min-h-screen py-16 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-[11px] font-extrabold tracking-widest text-[#BE5B39] uppercase">
            Immediate Response & Direct Relief
          </span>
          <h1 className="font-serif text-[2.5rem] sm:text-[3.5rem] font-bold tracking-tight text-[#1A1A18] leading-[1.1]">
            Active Emergency Relief Campaigns
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Donate directly to critical medical treatments, disaster rescues, and family emergencies. 100% of your contributions go straight to the field operations.
          </p>
        </div>

        {/* Emergency Causes Section */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-neutral-200 pb-3 gap-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A18]">
              Urgent Emergencies
            </h2>
            <span className="text-xs text-neutral-500 font-semibold">
              {filteredCauses.length} Fundraiser{filteredCauses.length !== 1 ? 's' : ''} Active
            </span>
          </div>

          {/* Filter Controls: Category Tabs & Search Box */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none py-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'border-[#1A1A18] bg-[#1A1A18] text-white shadow-xs'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  {cat === 'Medical' && <Flame className="w-3.5 h-3.5" />}
                  {cat === 'Flood Relief' && <Droplet className="w-3.5 h-3.5" />}
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-80 flex items-center">
              <input
                type="text"
                placeholder="Search emergency, diagnosis, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-neutral-300 rounded-full focus:outline-none focus:border-[#1A1A18] text-neutral-800"
              />
              <Search className="absolute left-3.5 w-4 h-4 text-neutral-400" />
            </div>

          </div>

          {/* Causes Catalog Grid */}
          {filteredCauses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredCauses.map((cause) => (
                <div 
                  key={cause.id} 
                  className="bg-white border border-[#1A1A18] shadow-sm rounded-[2rem] p-5 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300 justify-between min-h-[480px]"
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
                      {/* Location Overlay */}
                      <span className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-[4px] select-none flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {cause.location}
                      </span>
                    </div>

                    {/* Urgency Badge & Category Tag */}
                    <div className="flex items-center justify-between gap-2 mt-4 px-1">
                      <span className="text-[9px] bg-red-50 text-red-650 border border-red-100 px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        {cause.urgency}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        cause.category === 'Medical' 
                          ? 'bg-amber-50 text-amber-800 border border-amber-100' 
                          : 'bg-blue-50 text-blue-800 border border-blue-100'
                      }`}>
                        {cause.category}
                      </span>
                    </div>

                    {/* Title & Details */}
                    <div className="pt-3 px-1 flex flex-col gap-1.5">
                      <h3 className="font-sans text-sm sm:text-base font-bold text-neutral-800 leading-snug line-clamp-2 hover:text-[#BE5B39] transition-colors">
                        <Link to={`/cause/${cause.id}`}>{cause.title}</Link>
                      </h3>
                      <p className="text-neutral-500 text-[12px] leading-relaxed font-sans mt-1 line-clamp-2">
                        {cause.detail}
                      </p>
                      <div className="text-[11px] text-neutral-450 mt-1 font-semibold flex items-center gap-1.5">
                        <span>NGO Partner:</span>
                        <strong className="text-neutral-700 font-bold">{cause.ngo}</strong>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Progress Stats */}
                    <div className="mt-5 px-1 flex flex-col gap-2 border-t border-neutral-100 pt-4">
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

                    {/* Action buttons inside card - HIGHLIGHTED Donate Now */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <Link
                        to={`/cause/${cause.id}`}
                        className="text-xs font-bold text-neutral-500 hover:text-[#BE5B39] transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/donate`}
                        state={{ customCause: cause, amount: '5000' }}
                        className="bg-[#BE5B39] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#1A1A18] transition-all flex items-center gap-1.5 shadow-sm transform hover:scale-[1.02] active:scale-[0.98]"
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
            <div className="text-center py-20 bg-white border border-neutral-200 rounded-[2rem] flex flex-col items-center justify-center gap-3 shadow-xs">
              <span className="text-3xl">🔍</span>
              <strong className="text-neutral-755 font-serif text-lg">No emergency campaigns found</strong>
              <p className="text-xs text-neutral-400 max-w-sm">
                There are no active emergency campaigns matching your filters. Try clearing your search query or selecting another category.
              </p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}
                className="mt-2 bg-[#1A1A18] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#BE5B39] transition-all animate-bounce"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Causes
