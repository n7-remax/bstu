import React from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import logo from '../../common/images/logo/logo.png'


import './header.css'

const Header = () =>
    <header className="header">
        <div className="logo-place">
            <Link to="/bstu"><img className="logo" src={logo} alt="logo"></img></Link>
            <h1 className="logo-text"><Link to="/bstu">Bryansk State Technical University</Link></h1>
        </div>
        <nav className="nav">
            <div className="box">
                {/* <ul>
                <li><Link to="/bstu">Home</Link></li>
                <li><Link to="/our-vision">About us</Link></li>
                <li><Link to="/about-university">Our University</Link></li>
                <li><Link to="/bryansk">Explore our city</Link></li>
                <li><AnchorLink href='#footer'>Contact us</AnchorLink></li>
            </ul> */}
                <Link to="/bstu">Home</Link>
                <div class="dropdown">
                    <button class="dropbtn">About us</button>
                    <div class="dropdown-content">
                    <Link to="/our-vision">About BSTU</Link>
                        <a href="#">History</a>
                        <a href="#">International department</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Our speciality</button>
                    <div class="dropdown-content">
                        <a href="#">Full education</a>
                        <a href="#">Past education</a>
                        <a href="#">Paid</a>
                        <a href="#">Free</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">International studies resource</button>
                    <div class="dropdown-content">
                        <a href="#">Map of Bryansk</a>
                        <a href="#">Our Campuses</a>
                        <a href="#">Transfer</a>
                        <a href="#">The first stap</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Migration department</button>
                    <div class="dropdown-content">
                        <a href="#">Invitation</a>
                        <a href="#">Visa</a>
                        <a href="#">Registration</a>
                        <a href="#">Memo</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

export default Header