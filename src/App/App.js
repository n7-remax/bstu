import React from 'react';
import './App.css';
import Intro from './Intro/Intro';
import Header from './Header/Header';
import City from './City/City';
import Vision from './Vision/Vision';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <City></City>
      <Vision></Vision>
      <Footer></Footer>
    </div>
  );
}

export default App;
