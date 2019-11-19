import React from 'react';
import './App.css';
import Intro from './Intro/Intro';
import Header from './Header/Header';
import City from './City/City';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <City></City>
    </div>
  );
}

export default App;
