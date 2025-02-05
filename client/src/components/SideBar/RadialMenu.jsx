import React, {useState} from 'react'
import './RadialMenu.css'
import LinkIcon from '../../assets/LinkIcon.png';
import GmailLogo from '../../assets/GmailLogo.png';
import InstagramLogo from '../../assets/InstagramLogo.png';
import LinkedInLogo from '../../assets/LinkedInLogo.png';
import WhatsappLogo from '../../assets/WhatsappLogo.png';

function RadialMenu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleRadialMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`radial-menu ${isOpen ? 'radial-open' : ''}`}>
            <div className="radial-menu-toggle border-black dark:border-white" onClick={toggleRadialMenu}>
                { !isOpen ? <img src={LinkIcon} alt="" />:
                <div className="close-icon">
                    <div className="close-icon-line bg-black dark:bg-white"></div>
                    <div className="close-icon-line bg-black dark:bg-white"></div>
                </div>}
            </div>
            <div className='radial-icons' style={{'--radial-index':0}}>
                <a href=""><img src={InstagramLogo} alt="" /></a>
            </div>
            <div className='radial-icons' style={{'--radial-index':1}}>
                <a href=""><img src={GmailLogo} alt="" /></a>
            </div>
            <div className='radial-icons' style={{'--radial-index':2}}>
                <a href=""><img src={LinkedInLogo} alt="" /></a>
            </div>
            <div className='radial-icons' style={{'--radial-index':3}}>
                <a href=""><img src={WhatsappLogo} alt="" /></a>
            </div>
        </div>
    )
}

export default RadialMenu
