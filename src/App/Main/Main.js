import React from 'react';

import './main.css';

import Intro from './Intro/Intro';
import City from './City/City';
import Vision from './Vision/Vision';

function Main() {
  return (
    <main className="Main">
      <Intro></Intro>
      <City></City>
      <Vision></Vision>
    </main>
  );
}

export default Main;
