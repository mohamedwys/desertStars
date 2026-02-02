import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Feature from './component/Feature'
import AboutPage from './component/AboutPage'
import Banner from './component/Banner'
import Footer from './component/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { HoverEffect } from "./component/ui/card-hover-effect";

function App() {

  const projects = [
  {
    title: "Oasis Chapter (5 weeks)",
    description: "An introductory musical program designed for young singers.",
    link: "#",
  },
  {
    title: "Program Overview",
    description: "Discover the fundamentals of choral singing in a structured, engaging environment.",
    link: "#",
  },
  {
    title: "Learning Outcomes",
    description: "Build confidence, teamwork, and musical skills through guided sessions.",
    link: "#",
  },
  {
    title: "Performance",
    description: "Concludes with an informal mini-performance for families to showcase progress.",
    link: "#",
  },
  {
    title: "Taster Session",
    description: "AED 250 · 1.5 hours. Fee is deducted if the participant continues with the full program.",
    link: "#",
  },
  {
    title: "Full Program",
    description: "Remaining 4 sessions: AED 1,000, scheduled weekly.",
    link: "#",
  },
  {
    title: "Future Chapters",
    description: "After the spring holiday, the choir continues with advanced chapters, building towards a formal concert for families.",
    link: "#",
  },
  {
    title: "Schedule & Location",
    description: "AN Events, Kojak Building, Motor City. Mondays & Wednesdays · 16:30–18:00. Limited spaces; two groups only.",
    link: "#",
  },
  {
    title: "Program Nature",
    description: "Community-based, recreational, designed purely for the development of singing skills and enjoyment of music.",
    link: "#",
  },
];

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
      <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
      </div>
      <AboutPage/>
      <Banner/>
      <Footer navItem={navItem}/>
    </>

  )
}

export default App
