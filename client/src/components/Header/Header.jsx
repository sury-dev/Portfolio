import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import HamBurgerMenu from './HamBurgerMenu'
import './Header.css'

function Header() {
    const savedTheme = localStorage.getItem('theme') === 'dark';
    const [themeToggled, setThemeToggled] = useState(savedTheme);

    useEffect(() => {
        if (themeToggled) {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    }, [themeToggled]); // Effect runs when themeToggled changes

    // Function to toggle the theme
    const themeToggler = () => {
        setThemeToggled(prevState => !prevState); // Toggle based on previous state
    };
    return (<>
        <HamBurgerMenu />
        <nav className='navbar slide-down'>
            <ul>
                <li>
                    <a href="#home" className="navBtns text-black dark:text-white hover:text-[#6A0DAD] dark:hover:text-[#DA54EB]">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#work" className="navBtns text-black dark:text-white hover:text-[#6A0DAD] dark:hover:text-[#DA54EB]">
                        Work
                    </a>
                </li>
                <li>
                    <a href="#certifications" className="navBtns text-black dark:text-white hover:text-[#6A0DAD] dark:hover:text-[#DA54EB]">
                        Certifications
                    </a>
                </li>
                <li>
                    <a href="/BetterCv.pdf" download>
                        <button className="resumeDownloadBtn">Resume</button>
                    </a>

                </li>

                {/* <li>
                    <button className='navBtns hover:text-[#6A0DAD] dark:hover:text-[#DA54EB] text-black dark:text-white' onClick={() => {themeToggler()}}> Toggle Theme</button>
                </li> */}
            </ul>
        </nav>
    </>)
}

export default Header
