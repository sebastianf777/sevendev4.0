import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({page, selectedPage, setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? `scale-150 ${window.scrollY === 0 && isDesktop ? "text-white" : ""}` : ""
      } ${window.scrollY === 0 ? "hover:text-white" : ""} hover:scale-150 transition duration-500 w-fit mx-auto`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage, isScrollingDown, setIsScrollingDown }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarScrollMode = isTopOfPage ? "text-yellow" : "bg-yellow text-deep-blue";
  const logoScrollMode = isTopOfPage ? "../assets/logo2023.png" : "../assets/logo2023-white.png";
  const logoClass = isDesktop ? "md:h-12 md:w-auto sm:w-14 " : "w-[100px]";



  return (
    <nav className={`${navbarScrollMode} z-40 w-[100vw] sm:w-full fixed left-0 top-0 py-6 transition-transform duration-500 ${
      !isScrollingDown ? "transform translate-y-0 " : "transform -translate-y-full"
    }`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
      <AnchorLink href="#home">
        <img className={logoClass} alt="logo" src={logoScrollMode} />
      </AnchorLink>
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 text-sm xs:text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-yellow p-2 h-[45px]"
            onClick={() => {setIsMenuToggled(!isMenuToggled); setIsScrollingDown(true)}}
          >

            <img className="w-[30px]" alt="menu-icon" src="../assets/menu-icon.png" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-yellow w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img className="w-[40px] absolute top-[110px]" alt="close-icon" src="../assets/close-icon.png" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col py-7 mt-[-10px] gap-10  text-center text-2xl text-deep-blue bg-yellow">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
