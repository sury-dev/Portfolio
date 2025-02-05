import React, { useState } from 'react';
import GmailLogo from '../../assets/GmailLogo.png';
import InstagramLogo from '../../assets/InstagramLogo.png';
import LinkedInLogo from '../../assets/LinkedInLogo.png';
import WhatsappLogo from '../../assets/WhatsappLogo.png';
import RadialMenu from './RadialMenu';
import './SideBar.css';

function SideBar() {
    return (
        <>
            <RadialMenu />
            <div className="social-icons">
                <img src={InstagramLogo} alt="Instagram" />
                <img src={GmailLogo} alt="Gmail" />
                <img src={LinkedInLogo} alt="LinkedIn" />
                <img src={WhatsappLogo} alt="WhatsApp" />
            </div>
        </>
    );
}

export default SideBar;
