import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Feature from './component/Feature'
import AboutPage from './component/AboutPage'
import Banner from './component/Banner'
import Footer from './component/Footer'
import LocationSection from './component/Locationsection'
import BookingSection from './component/Bookingsection';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { HoverEffect } from "./component/ui/card-hover-effect";
import avatarImage from '../assets/avatar.png'


function App() {

  const projects = [
  {
    title: "Oasis Chapter (4 weeks)",
    description: "A relaxed introduction for young singers to enjoy music and group singing.",
    link: "#",
  },
  {
    title: "Fun Sessions",
    description: "Guided by experienced leaders, sessions are playful and engaging.",
    link: "#",
  },
  {
    title: "Mini Performances",
    description: "Share songs with family and friends in a casual showcase.",
    link: "#",
  },
  {
    title: "Taster Session",
    description: "AED 250 · 1.5 hours. Fee is deducted if you join the full experience.",
    link: "#",
  },
  {
    title: "Full Experience",
    description: "Remaining 4 sessions: AED 1,000, scheduled weekly.",
    link: "#",
  },
  {
    title: "Future Chapters",
    description: "After the spring holiday, the choir continues with advanced chapters, building towards a formal concert for families.",
    link: "#",
  },
];

  const navItem = [
    {link : "Overview", path : "home"},
    {link : "Feature", path : "feature"},
    {link : "About", path : "about"},
    {link : "Book Now", path : "booking"}
]

  return (
    <>
      <Header navItem={navItem} />
      <Home />
      <FloatingWhatsApp 
        phoneNumber="971554307037"
        accountName="Desert Stars Choir"
        chatMessage="Hello! How can we help you today? 😊"
        avatar={avatarImage}  
        darkMode={false}
        notification={true}
        notificationSound={true} 
      />
      <Feature />
      <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
      </div>
      <AboutPage/>
      <LocationSection />
      <BookingSection />
      <Banner/>
      <Footer navItem={navItem}/>
    </>

  )
}

export default App
