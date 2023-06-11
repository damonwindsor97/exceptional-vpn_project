import React from 'react'
import styles from './FeaturedOn.module.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { Container } from 'react-bootstrap';



import Linus from '../../../images/Linus_Tech_Tips_logo.svg.png';
import Jayz from '../../../images/jayztwocentz.webp';
import Codepen from '../../../images/codepen.png' 

const FeaturedOn = () => {
  return (
    <div className={styles.featured}>
      <Container>
        <Row>
          <Col><h3>AS FEATURED ON:</h3></Col>
          <Col>
            <Image
              src={Linus}
              width={100}
              height={100}
              alt="Linus Tech Tips"
            />
          </Col>
          <Col>            
            <Image
              src={Codepen}
              width={200}
              height={100}
              alt="Linus Tech Tips"
              />
            </Col>
          <Col>
            <Image
                src={Jayz}
                width={100}
                height={100}
                alt="Linus Tech Tips"
              />
          </Col>
        </Row>

      </Container>

    </div>
  )
}

export default FeaturedOn