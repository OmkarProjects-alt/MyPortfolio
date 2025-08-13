import StarStreakBackground from "../Model/StarStreakBackground.jsx";

const Footer = () => {
  const ScrollTo = (id, offset) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="z-20 w-full relative bg-[#000000] text-center overflow-hidden text-white">
      <div className="relative z-10  h-auto  ">
        <div className="h-full p-4 rounded-t-full bg-gradient-to-br from-[#251b35] via-[#2b1649] to-[#3b0f60]">
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between gap-6 h-full w-full text-gray-400">
            <div className="flex flex-col justify-center lg:ml-14 md:ml-14">
              <h1 className="text-xl font-bold">Sitemap</h1>
              <div className="grid grid-cols-2 gap-4 underline">
                <a
                  href="#Home"
                  onClick={(e) => {
                    e.preventDefault();
                    ScrollTo("Home", 50);
                  }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#Skills"
                  onClick={(e) => {
                    e.preventDefault();
                    ScrollTo("Skills", 50);
                  }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#Hero"
                  onClick={(e) => {
                    e.preventDefault();
                    ScrollTo("Hero", 50);
                  }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  About
                </a>
                <a
                  href="#Projects"
                  onClick={(e) => {
                    e.preventDefault();
                    ScrollTo("Projects", 50);
                  }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#Education"
                  onClick={(e) => {
                    e.preventDefault();
                    ScrollTo("Education", 50);
                  }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Education
                </a>
                <a
                  href="#Contact"
                  onClick={(e) => {
                    e.preventDefault();
                    ScrollTo("Contact", 50);
                  }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className=" md:ml-10 flex flex-col justify-center">
              <h1 className="text-[1.3rem] font-bold">Omkar Gudappe</h1>
              <p>&copy; 2025 Omkar Gudappe | Built with using React & Three.js</p>
            </div>
            <div className="lg:mr-20 md:mr-20">
              <div className="flex items-center justify-center gap-4">
                <a href="https://github.com/OmkarProjects-alt?tab=repositories" className="text-3xl cursor-pointer">
                  <i className="fab fa-github hover:scale-115"></i>
                </a>
                <a href='http://www.linkedin.com/in/omkar-gudappe-a13644277' className="text-3xl cursor-pointer">
                  <i className="fab fa-linkedin hover:scale-115"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <StarStreakBackground />
      </div>
    </footer>
  );
};

export default Footer;
