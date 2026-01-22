import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'

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
import SkillsSection from './home/SkillsSection'
import MyProject from './home/myproject'
import NotFoundPage from "./home/NotFoundPage";
import Gallery from './gallery/Gallery';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <MovingText />
      <AcademicsTimeline />
      <MyProject />
      <ResearchInternships />
      <Timeline />
      <Specilaties />
      <SkillsSection />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
