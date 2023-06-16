import OurFeatures from "@/components/features/OurFeatures"
import { Fragment } from "react"
import Head from "next/head"

const features = () => {
  return (
    <Fragment>
          <Head>
            <title>Exceptional | Features</title>
            <meta 
              name='Exceptional VPN'
              description='Exceptional VPN has the best features'
              />
          </Head>
          <OurFeatures/>
    </Fragment>
  )
}

export default features