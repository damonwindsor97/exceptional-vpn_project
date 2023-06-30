import Whatisvpn from "@/components/features/Whatisvpn/Whatisvpn"
import Head from "next/head"

const whatisvpnPage = () => {
  return (
    <div>
      <Head>
        <title>Exceptional VPN | What is a VPN?</title>
        <meta 
          name='Exceptional VPN'
          description='Exceptional VPN is the fastest, most reliable VPN'
          />
      </Head>
      <Whatisvpn></Whatisvpn>

    </div>
  )
}

export default whatisvpnPage