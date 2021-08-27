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
  const [stored, setStored] = useState(false)
  const [ loading, setLoading] = useState(false)

useEffect(()=> {
fetchFromLocalStorage()
}, [stored])

  const shortenLinkHandler = async (link)=> {
    setLoading(true)
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
     storeToLocalStorage(result)
     setLoading(false)
  }
  const storeToLocalStorage = (newLinkList)=> {
   
       let linkList = []

       if(localStorage.getItem('Links') === null){
         linkList = []
       }else {
        linkList = JSON.parse(localStorage.getItem('Links'))
       }
       linkList.push(newLinkList)

      localStorage.setItem("Links", JSON.stringify(linkList));
      setStored(true)
  }
  const fetchFromLocalStorage = ()=> {
    const linkList = JSON.parse(localStorage.getItem("Links"));
    if(linkList === null){
      setLinks([]);

    }else{
       setLinks(linkList);
    }
   
    console.log('hello')

  }
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Input shortenLink={shortenLinkHandler} loading={loading} />
      <Details result={links} loading={loading} />
      <Quote />
      <Footer />
    </React.Fragment>
  );
}

export default App;
