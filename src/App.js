import React, {useEffect, useState} from 'react'
import Header from './components/Layout/Header'
import Hero from './components/Layout/Hero'
import Details from './components/Layout/Details'
import './App.css';
import Quote from './components/Layout/Quote';
import Footer from './components/Layout/Footer';
import Input from './components/Forms/Input';


function App() {
  const [links, setLinks] = useState([])

useEffect(()=> {
fetchFromLocalStorage()
}, [])

  const shortenLinkHandler = async (link)=> {
    const transformedData = []
    const hi = `https://api.shrtco.de/v2/shorten?url=${link}`;
    console.log(hi)
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const data = await response.json()
    console.log(data.result)
    const result = {
      id:data.result.code,
      originalLink :data.result.original_link,
      shortenLink: data.result.short_link

    }
  transformedData.push(result)
  console.log(transformedData)
  setLinks(transformedData)
  }
  const fetchFromLocalStorage = ()=> {

  }
  return (
    <React.Fragment>
     <Header/>
     <Hero/>
     <Input shortenLink={shortenLinkHandler}/>
     <Details result={links}/>
     <Quote/>
     <Footer/>
      
    </React.Fragment>
  );
}

export default App;
