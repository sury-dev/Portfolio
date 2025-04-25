import React, { useState } from 'react';
import GmailLogo from '../../assets/GmailLogo.png';
import InstagramLogo from '../../assets/InstagramLogo.png';
import LinkedInLogo from '../../assets/LinkedInLogo.png';
import WhatsappLogo from '../../assets/WhatsappLogo.png';
import RadialMenu from './RadialMenu';
import './Sidebar.css';

function SideBar() {
    return (
        <>
            <RadialMenu />
            <div className="social-icons">
                <a href="https://www.instagram.com/suryansh_pandey_3011/" target="_blank"><img src={InstagramLogo} alt="Instagram" /></a>
                <a href="mailto:suryanshpandey3011@gmail.com" target="_blank"><img src={GmailLogo} alt="Gmail" /></a>
                <a href="https://www.linkedin.com/in/suryanshpandey3011/" target="_blank"><img src={LinkedInLogo} alt="LinkedIn" /></a>
                <a href="https://wa.me/+917973946576" target="_blank"><img src={WhatsappLogo} alt="WhatsApp" /></a>
            </div>
        </>
    );
}

export default SideBar;
