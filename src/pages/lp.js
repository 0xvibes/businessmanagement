import React from 'react'
import Hero from '../lp-components/lpHero.js'
import Hero2 from '../lp-components/lpHero2.js'
import Hero3 from '../lp-components/lpHero3.js'
import SubHero from '../lp-components/lpSubHero.js'
import Features from '../lp-components/lpFeatures.js'
import FeatureCards from '../lp-components/lpFeatureCards.js'

const lp = () => {
  return (
    <div className='lp-background'>
        <Hero3 />
        <Hero2 />
        <Hero />
        <SubHero />
        <Features />
        <FeatureCards />
        
        
    </div>
  )
}

export default lp