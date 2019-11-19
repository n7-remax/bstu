import React from 'react'

import './intro.css'

const Intro = () =>
    <section className="intro">
        <div className="headline"><p>The place to</p></div>
        <div class="make" aria-label="Make"><p>
          <span>M</span><span>A</span><span>K</span><span>E</span>
        </p></div>
        <div class="words-container">
          <p class="words-backgrounded">Your future</p>
        </div>
        <div className="button-place">
        <a class="button hollow" id="test" href="#course-finder">Explore our courses</a>
        </div>
    </section>

export default Intro