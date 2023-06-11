import React from 'react';


import Pricing from '@/components/features/Pricing/Pricing';
import Showcase from '@/components/features/Showcase/Showcase';
import FeaturedOn from '@/components/features/FeaturedOn'


const HomePage = () => {
  return (
    <div>
      <Showcase
      title='Connected'
      description='Stay Exceptional'
      bgImage='./images/hand-globe-hand.jpg'
      />
      <FeaturedOn/>
      <Pricing/>
    </div>
  )
}

export default HomePage