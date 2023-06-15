import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "next/image";
import styles from './OurFeatures.module.scss'

import vpnImage from '../../../images/vpn_phone.webp'
import monitors from '../../../images/3_monitors_blue.webp'

const OurFeatures = () => {
  return (
    <div className={styles.features}>
        <Container>
            <h1 className='main-heading'>Why Exceptional?</h1>
            <h1 className='sub-sub-heading'>Our Features are the best in the Industry</h1>

            <Row className={styles.featureRow}>
                <Col>
                <h3 className="sub-heading">Feature 1</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quasi obcaecati quaerat unde voluptas iure cum, fugiat eveniet, amet natus repellendus doloribus eos saepe illum necessitatibus sed. Voluptas quia, cumque tempora animi voluptate a quisquam cupiditate officiis maxime consequuntur in.</p>

                <h3 className="sub-heading">Feature 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque aspernatur sed quibusdam, veritatis ab, et hic molestiae maxime porro dolore vitae consequuntur impedit commodi perferendis incidunt! Suscipit veritatis et commodi quibusdam hic tempore, voluptatibus placeat qui, ratione possimus necessitatibus.</p>
                </Col>
                <Col>
                    <Image 
                    className={styles.featureImage}
                    alt="vpn"
                    src={vpnImage}
                    width="550"
                    height="500"
                    />
                </Col>
            </Row>


            {/* --------------- Bottom --------------- */}

            <Row className={styles.featureRow}>
                <Col>
                <Image 
                    className={styles.featureImage}
                    alt="vpn"
                    src={monitors}
                    width="550"
                    height="500"
                    />
                </Col>
                <Col>
                <h3 className="sub-heading">Feature 3</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quasi obcaecati quaerat unde voluptas iure cum, fugiat eveniet, amet natus repellendus doloribus eos saepe illum necessitatibus sed. Voluptas quia, cumque tempora animi voluptate a quisquam cupiditate officiis maxime consequuntur in.</p>

                <h3 className="sub-heading">Feature 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloremque aspernatur sed quibusdam, veritatis ab, et hic molestiae maxime porro dolore vitae consequuntur impedit commodi perferendis incidunt! Suscipit veritatis et commodi quibusdam hic tempore, voluptatibus placeat qui, ratione possimus necessitatibus.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurFeatures