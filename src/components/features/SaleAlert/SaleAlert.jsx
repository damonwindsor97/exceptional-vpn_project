import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import styles from './SaleAlert.module.scss'
import React from 'react'

const SaleAlert = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible className={styles.alertBox}>
        <p className='fw-bold'>
            BUY NOW AND USE CODE EXP20 FOR 20% OFF YOUR PURCHASE
        </p>
      </Alert>
    );
  }
}

export default SaleAlert;