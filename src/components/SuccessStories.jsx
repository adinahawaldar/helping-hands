import React from 'react'
import { Quote } from 'lucide-react'

const SuccessStories = () => {
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

  return (
    <div className="bg-brand-bg py-24 border-b border-brand-sand/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
          <span className="font-sans text-xs font-semibold tracking-wider text-brand-sand-dark uppercase">
            Real Stories, Real Lives
          </span>
          <h2 className="font-serif text-[2.2rem] min-[380px]:text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] font-bold tracking-tight text-[#1A1A18] leading-[1.15]">
            How your support changed lives
          </h2>
          <p className="text-brand-brown text-sm sm:text-base leading-relaxed">
            Every contribution directly funds an individual child, a hungry family, or a community's core infrastructure.
          </p>
        </div>

        {/* Stories list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="bg-brand-sand/20 border border-brand-sand/30 rounded-[2.5rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
            >
              {/* Profile image with large rounded corner */}
              <div className="w-32 h-32 sm:w-44 sm:h-44 shrink-0 rounded-[2rem] overflow-hidden shadow-md">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Story Details */}
              <div className="flex flex-col gap-4 flex-grow">
                <Quote className="w-8 h-8 text-brand-sand-dark opacity-35" />
                <p className="text-brand-charcoal text-sm leading-relaxed italic font-serif">
                  "{story.quote}"
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-brand-sand/40 pt-4 text-xs">
                  <div>
                    <span className="font-bold text-brand-charcoal block">{story.name}, {story.age}</span>
                    <span className="text-brand-brown">{story.location}</span>
                  </div>
                  <span className="inline-block bg-brand-charcoal text-brand-bg px-3 py-1 rounded-full font-medium tracking-wide">
                    {story.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
