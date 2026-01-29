import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import MovingText from "../components/home/MovingText";
import About from "../components/home/About";
import SkillsSection from "../components/home/SkillsSection";
import MyProject from "../components/home/MyProject";
import ResearchInternships from "../components/home/ResearchInternships";
import AcademicsTimeline from "../components/home/AcademicsTimeline";
import Timeline from "../components/home/Activities";
import Contact from "../components/home/ContactPage";
import Footer from "../components/home/Footer";
import Specilaties from "@/components/home/Specilaties";

export default function Home() {
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
