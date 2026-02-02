import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Feature from './component/Feature'
import AboutPage from './component/AboutPage'
import Banner from './component/Banner'
import Footer from './component/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {

  const navItem = [
    {link : "Overview", path : "home"},
    {link : "Feature", path : "feature"},
    {link : "About", path : "about"},
    // {link : "Pricing", path : "pricing"}
]

  return (
    <>
      <Header navItem={navItem} />
      <Home />
      <FloatingWhatsApp  />
      <Feature />
      <AboutPage/>
      <Banner/>
      <Footer navItem={navItem}/>
    </>

  )
}

export default App
