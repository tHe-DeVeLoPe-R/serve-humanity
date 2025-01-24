import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        setIsMobile(window.innerWidth <= 650)
    })
  return (
    <div className = {styles.headerParent}>
        <div className = {styles.headerContents}>
          <h1>Serve Humanity - Impacting Society</h1>
        <h3>
"Together, we are building a brighter, more compassionate future for all."</h3>
<button className = {styles.statsButton}>
          View our stats
          </button>
          <button className = {styles.donationButton}>
          Give donation
          </button>
        </div>
      
    </div>
  )
}
