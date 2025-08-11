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
  const [showLoading , setShowLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);


  const handleLoadingComplete = () => {
    setShowLoading(false);
    document.body.style.overflow = '';
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
