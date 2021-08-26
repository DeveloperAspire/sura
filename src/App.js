import React from 'react'
import Header from './components/Layout/Header'
import Hero from './components/Layout/Hero'
import Details from './components/Layout/Details'
import './App.css';
import Quote from './components/Layout/Quote';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <React.Fragment>
     <Header/>
     <Hero/>
     <Details/>
     <Quote/>
     <Footer/>
      
    </React.Fragment>
  );
}

export default App;
