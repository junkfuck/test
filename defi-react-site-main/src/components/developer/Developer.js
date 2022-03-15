import React from 'react'
import './Developer.css'
import Terminal from '../../assets/terminal.png'

const Developer = () => {
    return (
        <div className='developers'>
                <div className="right">
                    <div className="img-container">
                        <img src={Terminal} alt=""/>
                    </div>
                </div>
            </div>
    )
}

export default Developer
