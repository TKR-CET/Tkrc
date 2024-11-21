// Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="college-info-left">
        <p style={{ color: 'red', fontWeight: 'bold' }}>COLLEGE CODE: K9</p>
        <p>Survey No.8/A, Medbowli, Meerpet<br />Hyderabad - 500097, Telangana, INDIA</p>
        <p><a href="http://www.tkrct.ac.in">www.tkrct.ac.in</a></p>
      </div>
      <div className="center-content">
        <h1 style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          TKR COLLEGE OF ENGINEERING & TECHNOLOGY
        </h1>
        <img src="./images/logo.png" alt="TKRCET Logo" className="logo" />
      </div>
      <div className="college-info-right">
        <p className="red-text">An Autonomous Institution</p>
        <p>Accredited with 'A+' Grade by NAAC<br />
           Approved by AICTE, New Delhi<br />
           Affiliated to JNTUH<br />
           Recognized under 2(f) & 12(B) of UGC</p>
      </div>
    </div>
  );
}

export default Header;