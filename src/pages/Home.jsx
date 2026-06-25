import React from 'react'
import Hero from '../components/Hero'
import FeaturedCauses from '../components/FeaturedCauses'
import FeaturedNGOs from '../components/FeaturedNGOs'
import Transparency from '../components/Transparency'
import SuccessStories from '../components/SuccessStories'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedCauses />
      <FeaturedNGOs />
      <Transparency />
      <SuccessStories />
      <CTA />
    </div>
  )
}

export default Home
