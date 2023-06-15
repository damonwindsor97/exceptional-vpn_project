import React from 'react'
import styles from './Footer.module.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.footerContent}>
        <Row>

          <Col>
          <ul className='leftNavFooter'>
            <Link href='/'>
              <li>Home</li>
            </Link>

            <Link href='pricing'>
              <li>Pricing</li>
            </Link>

            <Link href='features'>
              <li>Features</li>
            </Link>

            <Link href='news'>
              <li>News</li>
            </Link>
          </ul>
          </Col>

          <Col>
          <p>Images provided by Unsplash</p>
          <p>A beginners project using Next.js and calling an API</p>
          </Col>

          <Col>
          <Link href='/privacypolicy'><p>Privacy Policy</p></Link>
          <Link href='/terms'><p>Terms & Conditions</p></Link>
          </Col>

        </Row>
      </div>


    </div>
  )
}

export default Footer