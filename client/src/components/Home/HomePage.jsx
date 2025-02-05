import React from 'react'
import './HomePage.css'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

function HomePage() {
    return (
        <div className="hero-section">
            <HeroLeft />
            <HeroRight />
        </div>
    )
}

export default HomePage
