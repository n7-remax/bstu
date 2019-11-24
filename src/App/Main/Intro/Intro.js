import React from 'react'

import './intro.css'

const Intro = () =>
    <section className="intro">
      <div className="row">
        <div className="headline"><p>The place to</p></div>
        <div className="make" aria-label="Make"><p>
          <span>M</span><span>A</span><span>K</span><span>E</span>
        </p></div>
        <div className="words-container">
          <p className="words-backgrounded">Your future</p>
        </div>
        <div className="button-place">
        <a className="button" href="#course-finder">Explore our courses</a>
        </div>
        </div>
    </section>

export default Intro