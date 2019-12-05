import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


import './intro.css'

const Intro = () =>
  <div className="intro">
    <div className="row">
      <div className="headline"><p>The place to</p></div>
      <div className="make" aria-label="Make"><p>
        <span>M</span><span>A</span><span>K</span><span>E</span>
      </p></div>
      <div className="words-container">
        <p className="words-backgrounded">Your future</p>
      </div>
      <div className="button-place">
        <AnchorLink className="button" href='#footer'>Sign up today</AnchorLink>
      </div>
    </div>
  </div>

export default Intro