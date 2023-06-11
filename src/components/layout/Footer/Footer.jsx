import React from 'react'
import styles from './Footer.module.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.footerContent}>
        <Row>

          <Col>
          <ul className='leftNavFooter'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Features</li>
            <li>News</li>
          </ul>
          </Col>

          <Col>
          <p>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cum.</p>
          </Col>

          <Col>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          </Col>

        </Row>
      </div>


    </div>
  )
}

export default Footer