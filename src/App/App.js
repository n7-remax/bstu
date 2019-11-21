import React from 'react';
import './App.css';
import Intro from './Intro/Intro';
import Header from './Header/Header';
import City from './City/City';
import Vision from './Vision/Vision';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <City></City>
      <Vision></Vision>
    </div>
  );
}

export default App;
