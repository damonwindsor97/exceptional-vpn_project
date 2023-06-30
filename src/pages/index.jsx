import React from 'react';
import Head from 'next/head';
import { Fragment } from 'react';


import Pricing from '@/components/features/Pricing';
import Showcase from '@/components/features/Showcase';
import FeaturedOn from '@/components/features/FeaturedOn';
import OurFeatures from '@/components/features/OurFeatures';
import WhatisVPN from '@/components/features/Whatisvpn'


const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Exceptional VPN | Home</title>
        <meta 
          name='Exceptional VPN'
          description='Exceptional VPN is the fastest, most reliable VPN'
          />
      </Head>
      <Showcase
      title='Connected'
      description='Stay Exceptional'
      bgImage='./images/hand-globe-hand.jpg'
      />
      <FeaturedOn/>
      <OurFeatures/>
      <Pricing/>
      <WhatisVPN/>
    </Fragment>
  )
}

export default HomePage