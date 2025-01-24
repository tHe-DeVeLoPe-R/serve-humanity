import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/Nav.module.css'
export default function Nav() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        setIsMobile(window.innerWidth <= 650);
    })
  return (
    <div className = {styles.navParent}>
        <div className= {styles.nav}>
          <h1>Serve Humanity</h1>
          <h3>Inspiring Action, Transforming Communities</h3>
        </div>
        <div className = {styles.navigation}>
            <button className = {styles.navButton}>Home</button>
            <button className = {styles.navButton}>Projects</button>
            <button className = {styles.navButton}>Team</button>
            <button className = {styles.navButton}>About us</button>
            <button className = {styles.navButton}>Donate</button>
            <button className = {styles.navButton}>current cases</button>
            <button className = {styles.navButton}>Join us</button>
            <button className = {styles.navButton}>Contact us</button>
            
        </div>
    </div>
  )
}
