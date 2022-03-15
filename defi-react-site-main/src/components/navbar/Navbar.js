import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
                <h1 style={{ marginLeft: '1rem', color: '#ff0000'}} >$SER</h1>
                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <a href="https://www.dextools.io">Chart</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.t.me/sertokenportal">Community</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.linktr.ee/SER_Token">Offical Links</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn' href="https://app.uniswap.org">Buy Now</a>
                    </li>
                </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
