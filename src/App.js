import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
// import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";
import { PacmanLoader } from 'react-spinners';

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [loading, setLoading] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // window.onload = function () {
  //   // setTimeout(() => {
  //     setLoading(false);

  //   // }, 2000);
  // };
  useEffect(() => {
    
    const handleScroll = () => {
      setIsMounted(true);

      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
      //IS TOP PAGE
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
       {!isMounted && loading ? (
        <PacmanLoader size={30} color={'#ffff00'} loading={true} />
      ): (

        <div className="app bg-hero">
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isScrollingDown={isScrollingDown}
          setIsScrollingDown={setIsScrollingDown}
          />
          <div className="w-5/6 mx-auto md:h-full">
            {isDesktop && (
              <DotGroup
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            )}
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("home")}
            >
              <Landing setSelectedPage={setSelectedPage} />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-5/6 mx-auto">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("skills")}
            >
              <MySkills />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-5/6 mx-auto">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("projects")}
            >
              <Projects />
            </motion.div>
          </div>
          {/* <LineGradient />
          <div className="w-5/6 mx-auto md:h-full">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("testimonials")}
            >
              <Testimonials />
            </motion.div>
          </div> */}
          <LineGradient />
          <div className="w-5/6 mx-auto">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("contact")}
            >
              <Contact />
            </motion.div>
          </div>
          <LineGradient />
          <Footer />
        </div>
      )}
    </div>

  );
}

export default App;
