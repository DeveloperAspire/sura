import React from 'react'
import Header from './components/Layout/Header'
import Hero from './components/Layout/Hero'
import Details from './components/Layout/Details'
import './App.css';
import Quote from './components/Layout/Quote';

function App() {
  return (
    <React.Fragment>
     <Header/>
     <Hero/>
     <Details/>
     <Quote/>
      
    </React.Fragment>
  );
}

export default App;
