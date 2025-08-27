import { useState } from 'react'
import './App.css'
import LoadingPage from './home/LoadingPage'
import Header from './home/header'
import Contact from './home/ContactPage'
import MovingText from "./home/MovingText"
import Hero from "./home/Hero"
import Work from "./home/Work"
import About from "./home/About"
import Footer from './home/Footer'
import Technology from "./home/Technology"
import Services from "./home/Services"
import Timeline from "./home/Timeline"
import Academics from "./home/Academics"
import StarryPage from "./home/StarryPage"

function App() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 3000)

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="flex flex-col w-screen ">   {/* removed min-h-screen */}
          <Header />
          <Hero />
          {/* <StarryPage/> */}
          <About/>
          <MovingText />
          <Technology/>
          <Work/>
          <Academics/>
          <Timeline/>
          <Services/>
          <Contact />
          <Footer/>
        </div>
      )}
    </>
  )
}


export default App

