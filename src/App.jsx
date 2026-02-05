import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Feature from './component/Feature'
import AboutPage from './component/AboutPage'
import Testimonials from './component/Testimonials'
import Banner from './component/Banner'
import Footer from './component/Footer'
import LocationSection from './component/Locationsection'
import BookingSection from './component/Bookingsection';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { HoverEffect } from "./component/ui/card-hover-effect";
import dummyAvatar from './assets/avatar.png'

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
        avatar={dummyAvatar}   
        darkMode={false} 
        notification={true} 
        notificationSound={true}  
      />
      <Feature />

      {/* Programs & Pricing Section */}
      <section className="max-w-screen-2xl mx-auto px-4 md:px-14 py-20 bg-white">
        <div className="text-center mb-12">
          <span className="px-4 py-2 bg-secondary/10 text-secondary font-bold text-sm rounded-full inline-block mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Musical Journey
            </span>
          </h2>
          <p className="text-lg text-light max-w-3xl mx-auto">
            Flexible options designed to fit your family's schedule and budget. Start with a taster or dive into the full experience.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <HoverEffect items={projects} />
        </div>
      </section>
      <AboutPage/>
      <Testimonials />
      <BookingSection />
      <LocationSection />
      <Banner/>
      <Footer navItem={navItem}/>
    </>

  )
}

export default App
