import { useState } from 'react'
import './App.css'
import LoadingPage from './home/LoadingPage'
import Header from './home/header'
import Contact from './home/ContactPage'
import MovingText from "./home/MovingText"
import Hero from "./home/Hero"
import Work from "./home/Projects"
import About from "./home/About"
import Footer from './home/Footer'
import Technology from "./home/Technology"
import Specilaties from "./home/Specilaties"
import Timeline from "./home/Activities"
import AcademicsTimeline from "./home/AcademicsTimeline"
import ResearchInternships from "./home/ResearchInternships"
import Avatar3D from './home/Avatar3D'
import SkillsSection from './home/SkillsSection'
import CertificatesAndSeminarsSection from './home/CertificatesAndSeminarsSection'
import MyProject from './home/myproject'

function App() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 3000)

  return (
    <>
      {
      // loading ? (
      //   <LoadingPage />
      // ) :
      (
        <div className="">   
          <Header />
          <Hero />
          <About/>
          <MovingText />
          <AcademicsTimeline/>
          <MyProject/>
          <ResearchInternships/>
          <Timeline/>
          {/* <Work/> */}
          {/* <Avatar3D height={500}/> */}
          <Specilaties/>
          {/* <CertificatesAndSeminarsSection/> */}
          <SkillsSection/>
          {/* <Technology/> */}
          <Contact />
          <Footer/>
        </div>
      )}
    </>
  )
}


export default App

