import React from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const ScrollTo = (id , offset) => {
      const element = document.getElementById(id);
      if(element){
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
  }

  return (
    <nav className="z-40 backdrop-blur-md bg-gradient-to-br from-[#1e0a3ad5]  to-[#231230cc] border-b-2 border-[#9943e9] px-4 py-3 fixed top-0 left-0 w-full" style={{ fontFamily: 'Space Grotesk, sans-serif'}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand/logo */}
        <a className="text-2xl font-bold text-[#a8c0ff]" href="#Home" onClick={(e) => { e.preventDefault(); ScrollTo('Home' , 50)}}>
          Portfolio
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none cursor-pointer"
          >
            <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#Home" onClick={(e) => { e.preventDefault(); ScrollTo('Home' , 50)}} className="text-white hover:text-blue-300 transition-colors">
            Home
          </a>
          <a href="#Hero" onClick={(e) => { e.preventDefault(); ScrollTo('Hero' , 50)}} className="text-white hover:text-blue-300 transition-colors">
            About
          </a>
          <a href="#Projects" onClick={(e) => { e.preventDefault(); ScrollTo('Projects' , 50)}} className="text-white hover:text-blue-300 transition-colors">
            Projects
          </a>
          <a href="#Skills" onClick={(e) => { e.preventDefault(); ScrollTo('Skills' , 50)}} className="text-white hover:text-blue-300 transition-colors">
            Skills
          </a>
          <a href="#Education" onClick={(e) => { e.preventDefault(); ScrollTo('Education' , 50)}} className="text-white hover:text-blue-300 transition-colors">
            Education
          </a>
          <a href="#Contact" onClick={(e) => { e.preventDefault(); ScrollTo('Contact' , 50)}} className="text-white hover:text-blue-300 transition-colors">
            Contact
          </a>
         </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden mt-2 pb-3 space-y-2 ${isOpen ? '' : 'animate__animated animate__bounceOutUp'}`}>
          <a href="#Home" onClick={(e) => { e.preventDefault(); ScrollTo('Home' , 50); setIsOpen(false); }} className="block px-3 py-2 text-white hover:bg-[#121a30] rounded">
            Home
          </a>
          <a href="#Hero" onClick={(e) => { e.preventDefault(); ScrollTo('Hero' , 50); setIsOpen(false); }} className="block px-3 py-2 text-white hover:bg-[#121a30] rounded">
            About
          </a>
          <a href="#Skills" onClick={(e) => { e.preventDefault(); ScrollTo('Skills' , 50); setIsOpen(false); }} className="block px-3 py-2 text-white hover:bg-[#121a30] rounded">
            Skills
          </a>
          <a href="#Projects" onClick={(e) => { e.preventDefault(); ScrollTo('Projects' , 50); setIsOpen(false); }} className="block px-3 py-2 text-white hover:bg-[#121a30] rounded">
            Projects
          </a>
          <a href="#Education" onClick={(e) => { e.preventDefault(); ScrollTo('Education' , 50); setIsOpen(false); }} className="block px-3 py-2 text-white hover:bg-[#121a30] rounded">
            Education
          </a>
          <a href="#Contact" onClick={(e) => { e.preventDefault(); ScrollTo('Contact' , 50); setIsOpen(false); }} className="block px-3 py-2 text-white hover:bg-[#121a30] rounded">
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default NavBar