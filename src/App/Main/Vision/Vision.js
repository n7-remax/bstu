import React from 'react'

import './vision.css'

const Vision = () =>
    <section className="vision">
        <h2>Our Vision</h2>
        <div className="flex">
            <div className="col-three">
                <h3>Learn to transform</h3>
                <p>ensuring that studying at BSTU is a life-changing experience for every student</p>
            </div>
            <div className="col-three">
                <h3>Research with impact</h3>
                <p>building an international reputation for research that makes a difference to people's lives</p>
            </div>
            <div className="col-three">
                <h3>Engage for change</h3>
                <p>forming partnerships and making connections, in pursuit of progressive goals</p>
            </div>
        </div>
        <div className="button-place">
        <a className="button" href="#about-us">Learn more about us</a>
        </div>
    </section>

export default Vision