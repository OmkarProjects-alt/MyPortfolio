import React , { useEffect } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import SkillSection from './SkillSection'
import Projects from './Projects'
import Education from './Education'
import LaptopModelCon from './LaptopModelCon'
import Contact from './Contact'
import Footer from './Footer'
import StarStreakBackground from '../Model/StarStreakBackground'

const MainPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);

  return (
    <div className='relative overflow-hidden bg-transparent font-sans  '>
      <NavBar/>
      <LaptopModelCon/>
      <Hero/>
      <Projects/>
      <SkillSection/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default MainPage
