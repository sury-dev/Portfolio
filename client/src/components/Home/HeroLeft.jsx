import React from 'react';
import './HeroLeft.css';
import HTML from '../../assets/icons/HTML.svg'
import Angular from '../../assets/icons/Angular.svg'
import JS from '../../assets/icons/JS.svg'
import NodeJs from '../../assets/icons/NodeJs.svg'
import MongoDB from '../../assets/icons/MongoDB.svg'
import Python from '../../assets/icons/Python.svg'
import C from '../../assets/icons/C.svg'
import CPP from '../../assets/icons/CPP.svg'
import Git from '../../assets/icons/Git.svg'
import Java from '../../assets/icons/Java.svg'
import NPM from '../../assets/icons/NPM.svg'
import CSS5 from '../../assets/icons/CSS5.svg'
import Bootstrap from '../../assets/icons/Bootstrap.svg'
import Figma from '../../assets/icons/Figma.svg'
import ExpressJS from '../../assets/icons/ExpressJS.svg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function HeroLeft() {
    const [name] = useTypewriter({
        words: ['SURYANSH'],
        loop: 1
    });

    const [profession] = useTypewriter({
        words: ['Web Developer', 'UI/UX Designer'],
        loop: true,
        delaySpeed: 1500,
    });

    const techIcons = [
        { src: HTML, alt: 'HTML' },
        { src: CSS5, alt: 'CSS5' },
        { src: JS, alt: 'JavaScript' },
        { src: Java, alt: 'Java' },
        { src: Python, alt: 'Python' },
        { src: NodeJs, alt: 'Node.js' },
        { src: Angular, alt: 'Angular' },
        { src: C, alt: 'C' },
        { src: CPP, alt: 'C++' },
        { src: Git, alt: 'Git' },
        { src: NPM, alt: 'NPM' },
        { src: Bootstrap, alt: 'Bootstrap' },
        { src: Figma, alt: 'Figma' },
        { src: ExpressJS, alt: 'Express.js' },
        { src: MongoDB, alt: 'MongoDB' },
    ];

    return (
        <div className="hero-left slide-right">
            <p className='text-black dark:text-white'>Hi, I'm</p>
            <h1 id="hh">
                {name},
            </h1>
            <p className='text-black dark:text-white'>
                a {profession}
                <Cursor cursorStyle="|" cursorColor='#DA54EB' />
            </p>
            <div
                className="tech-known border-l-2 border-black"
                style={{
                    '--height': '70px',
                    '--width': '400px',
                    '--quantity': techIcons.length,
                    '--slider-width' : '500px'
                }}
            >
                <div className="list">
                    {techIcons.map((icon, index) => (
                        <div
                            className="tk-item"
                            key={index}
                            style={{ '--position': index + 1 }}
                        >
                            <img src={icon.src} alt={icon.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroLeft;
