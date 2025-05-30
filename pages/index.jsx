// pages/index.js
import { useState, useEffect } from 'react';
import Domain from '@/components/Domain';
import Drives from '@/components/Drives';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Mission from '@/components/Mission';
import Nav from '@/components/Nav';
import Modal from '@/components/Modal'; // Import the new Modal component

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modal_case = {
    title: 'Medical case',
    description:
      'A patient from Lahore is suffering from stage 4 Cancer and is in a critical condition. Unfortunately, they are unable to bear the expensive treatment costs. Please donate generously to support this noble cause. ',
    AmountRequired: '50k',
    AmountCollected: '',
    Deadline: '30 March',
    Account1: '03196092861 (Abdul Rehman) Jazzcash Account',
    Account2: '03006844332 (Muhammad Junaid Rashid) Easypaisa Account',
    Account3: '00300110953386 (Abdul Rehman)  Meezan Bank Account',
    contact: '+923089431073 (Anas Naveed President)',
  };

  // Open the modal when the component mounts
  useEffect(() => {
    setIsModalOpen(true);
  }, []); // The empty dependency array ensures this runs only once after the initial render

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Nav />
      <Header />
      <Mission />
      <Domain />
      <Drives />
      <Footer />

      {/* Render the Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} data={modal_case} />
    </div>
  );
}