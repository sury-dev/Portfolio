import React from 'react'
import './Projects.css'
import Site from './Site'

function Projects() {
    return (
        <>
            <div className="contain" id='work'>
                <div className="color-box" id='cb1'></div>
                <div className="color-box" id='cb2'></div>
                <div className="color-box" id='cb3'></div>
                <div className='projects'>
                    <p className='headerBox glassMorph dark:border-white border-black dark:text-white text-black'>
                        Featured Projects
                    </p>
                    <Site/>
                </div>
            </div>
        </>
    )
}

export default Projects
