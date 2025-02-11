import React from 'react'
import styles from '../styles/Join.module.css'
import logo from '../public/images/logo.png'

export default function JoinUS() {

  const openWhatsApp = ()=>{
    const phoneNumber = '923097852424';
    const message = "I want to join you as volunteer...";
    const text = `Hello, ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
  }
  return (
    <div className = {styles.joinMain}>
      <div className = {styles.joinContent}>
        <img src={logo.src} alt="logo" /> <br />
      Join Serve Humanity as a volunteer and make a meaningful impact! We assist low-income students, provide food supplies to families in need, and support individuals facing health challenges. Your time and dedication can bring hope and relief through event organization, supply distribution, and then raising awareness. Together, let’s foster kindness and create a caring society. Join us today!

      <button onClick={openWhatsApp}>Connect Our Member To Proceed</button>
      </div>
    </div>
  )
}
