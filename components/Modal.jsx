// components/Modal.js
import { useEffect } from 'react';
import style from '../styles/Index.module.css'; 

export default function Modal({ isOpen, onClose, data }) {
  // If the modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  // Prevent scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

     const getDocuments = (case_val, case_contact)=>{
      const text = 'I need documents for '+case_val;
      const phone = case_contact;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
      window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
   }

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <button className={style.modalCloseButton} onClick={onClose}>
          &times;
        </button>
        <div className={style.ccase}>
          <h1>{data.title}</h1>
          <h6>{data.description}</h6> <br />
          <p className={style.required}>Amount Required: {data.AmountRequired}</p>
          <p className={style.collected}>Amount Collected: {data.AmountCollected}</p>
          <p className={style.deadline}>Deadline: {data.Deadline}</p>
          <p>Account 1: {data.Account1}</p>
          <p>Account 2: {data.Account2}</p>
          <p>Account 3: {data.Account3}</p> <br />
          {/* Assuming getDocuments is a function available in the parent or passed down if needed */}
          {/* For simplicity, we'll just have the button for now. You'd need to pass getDocuments from Home if it's used. */}
          <button
            onClick={()=>{
                         getDocuments(data.title, data.contact);
                     }}
          >
            Ask for documents
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}