import React , { useEffect , useState } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import SkillSection from './SkillSection'
import Projects from './Projects'
import Education from './Education'
import LaptopModelCon from './LaptopModelCon'
import Contact from './Contact'
import Footer from './Footer'
import Loading from './Loading'
import StarStreakBackground from '../Model/StarStreakBackground'
import { div } from 'framer-motion/client'

const MainPage = () => {
  const [Time , setTime] = useState(true)
  const [showLoading , setShowLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);

  
  useEffect(() => {
    setTimeout(() => {
      setTime(false);
    } , 16000)
  } , [])

  const handleLoadingComplete = () => {
    setShowLoading(false);
    document.body.style.overflow = ''; // Restore scrolling
  };

  return (
    <div>
        {showLoading && <Loading onComplete={handleLoadingComplete} />}
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
    </div>
  )
}

export default MainPage
