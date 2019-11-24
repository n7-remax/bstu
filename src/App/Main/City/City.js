import React from 'react'
import { Link } from 'react-router-dom'

import './city.css'

const City = () =>
    <section className="city">
        <div className="city-container">
            <blockquote>“Bryansk is a City of Military Glory - Here i can literally touch the history.”</blockquote>
        </div>
        <div className="video-frame">
            <iframe src="https://www.youtube.com/embed/qlwpBcZEt5s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </div>
        <div className="buton-place">
        <Link className="buton" to="/bryansk">Learn more about Bryansk</Link>
        </div>
    </section>

export default City