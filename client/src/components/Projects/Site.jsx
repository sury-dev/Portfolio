import React from 'react'
import './Site.css'
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

function Site({ reverse = false }) {

    const techIcons = [
        { src: HTML, alt: 'HTML' },
        { src: CSS5, alt: 'CSS5' },
        { src: JS, alt: 'JavaScript' },
        { src: NodeJs, alt: 'Node.js' },
        { src: Git, alt: 'Git' },
        { src: NPM, alt: 'NPM' },
        { src: Bootstrap, alt: 'Bootstrap' },
        { src: Figma, alt: 'Figma' },
        { src: ExpressJS, alt: 'Express.js' },
        { src: MongoDB, alt: 'MongoDB' },
    ];

    return (<>
        <div className={`projects-container ${reverse ? "flex-row-reverse" : ""}`}>
            <div className="project-preview slide-right">
                <img src="/ArtTales.png" alt="hola" />
            </div>
            <div className="project-info slide-left dark:border-white border-black dark:text-white text-black">
                <div className="project-info-content">
                    <h1>
                        ART TALES
                    </h1>
                    <p>
                        A platform for artists to share their work and stories, fostering a community of creativity and inspiration.
                    </p>
                </div>
                <div className="other-detail-container">
                    <div
                        className="tech-known border-l-1 border-black dark:border-white"
                        style={{
                            '--height': '70px',
                            '--width': '400px',
                            '--quantity': techIcons.length,
                            '--slider-width': '500px'
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
                    <div className="project-cta">
                        <a
                            href="https://github.com/sury-dev/ArtTales"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="textBox glassMorph project-cta-btn mb-0"
                        >
                            Repository ↗
                        </a>
                        <a
                            href="https://art-tales.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="textBox glassMorph project-cta-btn mb-0"
                        >
                            Live ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={`projects-container ${!reverse ? "flex-row-reverse" : ""}`}>
            <div className="project-preview slide-right">
                <img src="/NorthernDelight.png" alt="hola" />
            </div>
            <div className="project-info slide-left dark:border-white border-black dark:text-white text-black">
                <div className="project-info-content">
                    <h1>
                        ART TALES
                    </h1>
                    <p>
                        A platform for artists to share their work and stories, fostering a community of creativity and inspiration.
                    </p>
                </div>
                <div className="other-detail-container">
                    <div
                        className="tech-known border-l-1 border-black dark:border-white"
                        style={{
                            '--height': '70px',
                            '--width': '400px',
                            '--quantity': techIcons.length,
                            '--slider-width': '500px'
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
                    <div className="project-cta">
                    <a
                            href="https://github.com/sury-dev/Northern-Delight"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="textBox glassMorph project-cta-btn mb-0"
                        >
                            Repository ↗
                        </a>
                        <a
                            href="https://northern-delight.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="textBox glassMorph project-cta-btn mb-0"
                        >
                            Live ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Site
