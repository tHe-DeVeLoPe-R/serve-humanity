import React, { useState, useEffect } from 'react';
import style from '../styles/CurrentCases.module.css';

export default function CurrentCases() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 650);
    }, []); // ✅ Added dependency array to prevent unnecessary re-renders

    // ✅ Removed duplicate `cases` array declaration
    const cases = [
        {
            "title": "Medical case",
            "description": "A patient from Lahore is suffering from stage 4 Cancer and is in a critical condition. Unfortunately, they are unable to bear the expensive treatment costs. Please donate generously to support this noble cause.",
            "AmountRequired": "50k",
            "Deadline": "30 March",
            "Account1": "03196092861 (Abdul Rehman) JazzCash",
            "Account2": "03006844332 (Muhammad Junaid Rashid) Easypaisa",
            "Account3": "00300110953386 (Abdul Rehman) Meezan Bank Account",
            "contact": "03089431073 (Anas Naveed President)"
        }
    ];

    // ✅ Renamed `ts` function to `getDocuments` to match button click event
    const getDocuments = (case_val, case_contact) => {
        const text = `I need documents for ${case_val}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${case_contact}&text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
    };

    return (
        <div className={`${isMobile ? style.mobile_cases_main : style.cases_main}`}>
            <br />
            <h1>Current Cases</h1> <br />
            <p className={style.para}>
                Our team, along with dedicated volunteers, is working tirelessly to drive this revolutionary effort forward.
                Below are the cases that are currently active, while many others have already been successfully resolved.
                We appreciate the commitment of everyone involved and acknowledge their valuable contributions.
            </p>
            <div className={`${isMobile ? style.mobile_cases : style.cases}`}>
                {cases.map((ccase, index) => (
                    <div key={index} className={`${isMobile ? style.mobile_ccase : style.ccase}`}>
                        <h1>{ccase.title}</h1>
                        <h6>{ccase.description}</h6> <br />
                        <p className={style.required}>Amount Required: {ccase.AmountRequired}</p>
                        <p className={style.deadline}>Deadline: {ccase.Deadline}</p>
                        <p>Account 1: {ccase.Account1}</p>
                        <p>Account 2: {ccase.Account2}</p>
                        <p>Account 3: {ccase.Account3}</p> <br />
                        <button onClick={() => getDocuments(ccase.title, ccase.contact)}>
                            Ask for documents
                        </button>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}
