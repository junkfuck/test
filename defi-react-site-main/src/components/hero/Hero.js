import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'

const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1><i></i></h1>      
            </div>

        </div>
    )
}

export default hero
