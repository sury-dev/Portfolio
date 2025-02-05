import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HamBurgerMenu.css'

function HamBurgerMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="hamNav slide-down">
            <div className='hamburger' onClick={toggleMenu}>
                <div className={`line bg-black dark:bg-white ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line bg-black dark:bg-white ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line bg-black dark:bg-white ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`hamNavUl bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <NavLink to='/'
                        className={({ isActive }) =>
                            `hamNavBtns ${isMenuOpen ? 'open' : ''} ${isActive ? 'text-[#6A0DAD] dark:text-[#DA54EB]' : 'text-black dark:text-white hover:text-[#6A0DAD] dark:hover:text-[#DA54EB]'}`
                        }
                        style={{'--i': 1}}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/work'
                        className={({ isActive }) =>
                            `hamNavBtns ${isMenuOpen ? 'open' : ''} ${isActive ? 'text-[#6A0DAD] dark:text-[#DA54EB]' : 'text-black dark:text-white hover:text-[#6A0DAD] dark:hover:text-[#DA54EB]'}`
                        }
                        style={{'--i': 2}}>
                        Work
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'
                        className={({ isActive }) =>
                            `hamNavBtns ${isMenuOpen ? 'open' : ''} ${isActive ? 'text-[#6A0DAD] dark:text-[#DA54EB]' : 'text-black dark:text-white hover:text-[#6A0DAD] dark:hover:text-[#DA54EB]'}`
                        }
                        style={{'--i': 3}}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'
                        className={({ isActive }) =>
                            `hamNavBtns ${isMenuOpen ? 'open' : ''} ${isActive ? 'text-[#6A0DAD] dark:text-[#DA54EB]' : 'text-black dark:text-white hover:text-[#6A0DAD] dark:hover:text-[#DA54EB]'}`
                        }
                        style={{'--i': 4}}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HamBurgerMenu
