import './App.css'
import { useEffect } from 'react'
import Aos from 'aos'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Ui/Hero'
import Services from './components/Ui/Services'
import Portfolio from './components/Ui/Portfolio'
import Contact from './components/Ui/Contact'

function App() {

  useEffect(() =>{
    Aos.init()
  },[])
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App
