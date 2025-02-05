import React, {useCallback, useEffect, useState} from 'react'
import './HeroRight.css'
import NeonMan from '../../assets/NeonMan.png'
import Me from '../../assets/Me.png'

function HeroRight() {
    return (
        <div className="hero-right slide-left">
            <div className="name-slider">
                <h1>SURYANSH&nbsp;PANDEY</h1>
            </div>
            <img src={Me} alt="Hero" />
            <div id="vignette" className='bg-gradient-to-b from-transparent to-white dark:to-black h-1/6 dark:h-1/2 '></div>
        </div>
    )
}

export default HeroRight
