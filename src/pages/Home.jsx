import React from 'react'
import Hero from '../components/Hero'
import USPs from '../components/USPs'
import FeaturedCauses from '../components/FeaturedCauses'
import FeaturedNGOs from '../components/FeaturedNGOs'
import Transparency from '../components/Transparency'
import SuccessStories from '../components/SuccessStories'
import CTA from '../components/CTA'
import FadeIn from '../components/FadeIn'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FadeIn>
        <USPs />
      </FadeIn>
      <FadeIn>
        <FeaturedCauses />
      </FadeIn>
      <FadeIn>
        <FeaturedNGOs />
      </FadeIn>
      <FadeIn>
        <Transparency />
      </FadeIn>
      <FadeIn>
        <SuccessStories />
      </FadeIn>
      <FadeIn>
        <CTA />
      </FadeIn>
    </div>
  )
}

export default Home
