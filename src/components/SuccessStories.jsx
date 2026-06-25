import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const stories = [
    {
      id: 1,
      image: '/hero_education.png',
      quote: "Thanks to the school kit and tuition sponsor, I can now write stories and solve math equations! I want to become a teacher to help others.",
      name: "Rani Kumari",
      age: 10,
      impact: "Educated for 1 Full Year",
      location: "Dharavi, Mumbai"
    },
    {
      id: 2,
      image: '/hero_children.png',
      quote: "With clean drinking water from the community well, my kids no longer fall sick every month. I can spend my day working rather than drawing water from miles away.",
      name: "Meera Bai",
      age: 32,
      impact: "Clean Water Access for 25 Families",
      location: "Rural Rajasthan"
    }
  ]

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length)
  }

  const current = stories[currentIndex]

  return (
    <div className="bg-white py-20 border-b border-neutral-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        {/* Double Quote Icon */}
        <div className="text-[5rem] md:text-[6rem] text-neutral-400 font-serif leading-none select-none h-12 flex items-center justify-center mb-8">
          “
        </div>

        {/* Testimonial Quote Text */}
        <blockquote className="min-h-[140px] flex items-center justify-center">
          <p className="font-sans text-xl sm:text-2xl md:text-[1.85rem] font-medium text-neutral-800 leading-relaxed tracking-tight max-w-3xl">
            {current.quote}
          </p>
        </blockquote>

        {/* User Image (Avatar) */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md mx-auto mt-10 mb-4 transition-all">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info Details */}
        <div className="flex flex-col items-center">
          <span className="font-sans font-bold text-[#1A1A18] text-base">
            {current.name}, {current.age}
          </span>
          <span className="text-neutral-500 text-xs sm:text-sm font-medium mt-1">
            {current.location} • {current.impact}
          </span>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-3 justify-center mt-10">
          <button
            onClick={prevStory}
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-600 transition-all active:scale-95 cursor-pointer shadow-sm"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-850" strokeWidth={2} />
          </button>
          <button
            onClick={nextStory}
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-600 transition-all active:scale-95 cursor-pointer shadow-sm"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5 text-neutral-850" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
