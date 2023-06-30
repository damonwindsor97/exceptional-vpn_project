
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Image from "next/image"
import styles from './Whatisvpn.module.scss'


const Whatisvpn = () => {
  return (
    <div className={styles.whatisSection}>
        <Container>
        <h1 className='main-heading'>What is a VPN?</h1>
            <h1 className='sub-sub-heading'>We strive to educate our Customers, as well as service them</h1>
        <Row>
          <Col>
            <p className={styles.topSeperation}>A VPN (virtual private network) is the easiest and most effective way for people to protect their internet traffic and keep their identities private online.</p>

            <p className="text-seperation">As you connect to a secure VPN server, your internet traffic goes through an encrypted tunnel that nobody can see into, including hackers, governments, and your internet service provider.</p>

            <p><strong>Consumers use VPNs</strong> to keep their online activity private and ensure access to sites and services that might otherwise be restricted.</p>

            <p><strong>Companies use VPNs</strong> to connect far-flung employees as if they were all using the same local network at a central office, but with fewer benefits for individuals than a personal VPN.</p>
          </Col>

          <Col>
            <Image
            src='/what-is-vpn.png'
            width={500}
            height={550}
            alt=" What is a VPN?"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Whatisvpn