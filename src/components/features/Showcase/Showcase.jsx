import React from 'react'
import Image from 'next/image'
import styles from './Showcase.module.scss';
import showcaseImage from './/../../../images/hand-globe-hand.jpg'

const Showcase = ({ title, description, bgImage }) => {
  return (
    <div  className={styles.showcase} >

        <Image   className={styles.showcase}  alt='connected' src={showcaseImage}  width='' height=''></Image>

      <div className={styles.overlay}>
        <h1>Stay <span>Safe</span></h1>
        <h1>Stay <span>Connected</span></h1>
        <h1>Stay <span>Exceptional</span></h1>
      </div>
      
    </div>

  )
}

export default Showcase