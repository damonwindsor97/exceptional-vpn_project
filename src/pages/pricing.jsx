import React from 'react'
import PricingComponent from '../components/features/Pricing'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import { Fragment } from 'react'

const pricingPage = () => {
  return (
    <Fragment>
      <Head>
      <title>Exceptional | Pricing</title>
      <meta 
        name='Exceptional VPN'
        description='Exceptional VPN has the best pricing!'
        />
      </Head>

      <Container>
          <PricingComponent/>

      </Container>

    </Fragment>
    
  )
}

export default pricingPage