import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import {motion} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({setSelectedPage}) => {
  const isAboveLarge = useMediaQuery ('(min-width: 1020px)');

  return (
    <section
      id="home"
      className="group transition-500 bg-hero flex flex-col justify-around xs:justify-center md:flex-row md:flex md:justify-between md:items-center gap-8 xs:gap-16 h-screen"
    >
      {/* IMAGE SECTION */}
      {/* <div className=" z-10 flex large-screens:h-[50%] large-screens:items-end justify-center md:order-2 xCustom:w-[45vw] xCustom:justify-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 1}}
          variants={{
            hidden: {opacity: 0, x: 50},
            visible: {opacity: 1, x: 0},
          }}
        >
          {isAboveLarge
            ? <div className="relative group border-yellow border-2 group-hover:border-white">

                <div className="border-white">
                  <img
                    alt="profile"
                    class="absolute inset-0 w-full max-w-xs h-full object-cover opacity-100 transition duration-[500ms] transform scale-100 hover:scale-110 infinite"
                    src="assets/portrait-3.png"
                  />
                </div>
                <div className="border-white group-hover:animate-ping">
                  <img
                    alt="profile"
                    class="h-full object-cover transition duration-1000 transform  opacity-100 group-hover:opacity-0 w-full max-w-[400px] md:max-w-[50vh]"
                    src="assets/portrait-1.png"
                  />
                </div>
                <div className="hover:animate-ping absolute top-0">
                  <img
                    alt="profile"
                    class="h-full object-cover transition duration-1000 transform  opacity-100 hover:opacity-0 w-full max-w-[400px] md:max-w-[50vh]"
                    src="assets/portrait-2.png"
                  />
                </div>

              </div>
            : <div class="relative group mt-20 xs:mt-auto">
                <div className="">
                  <img
                    alt="profile"
                    class="absolute inset-0 w-full max-w-xs h-full object-cover opacity-100 transition duration-[500ms] transform scale-100 hover:scale-110 infinite"
                    src="assets/portrait-3.png"
                  />
                </div>
                <div className="group-hover:animate-[pulse_1s]">
                  <img
                    alt="profile"
                    class="h-full object-cover transition duration-1000 transform  opacity-100 group-hover:opacity-0 w-full max-w-[30vh]"
                    src="assets/portrait-1.png"
                  />
                </div>
                <div className="hover:animate-[pulse_1s] absolute top-0">
                  <img
                    alt="profile"
                    class="h-full object-cover transition duration-1000 transform  opacity-100 hover:opacity-0 w-full max-w-[30vh]"
                    src="assets/portrait-2.png"
                  />
                </div>
              </div>}
        </motion.div>

      </div> */}

      {/* MAIN TEXT */}
      <div className="z-30 large-screens:h-[50%] custom-screen:mt-9 large-screens:mb-[10vh] large-screens:flex large-screens:flex-col large-screens:my-auto large-screens:justify-evenly xCustom:w-[51.5vw] xCustom:justify-end">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}
        >
          {isAboveLarge
            ? <p className="text-6xl z-10 text-center md:text-start text-white group-hover:text-yellow animate-bounce w-fit">
                <div className="transition duration-500 hover:text-white hover:scale-105">
                  Sebastian {''}
                  Fontana
                </div>
              </p>
            : <p className="text-3xl xs:text-6xl z-10 text-center md:text-start text-white group-hover:text-yellow animate-bounce pointer-events-none">
                <div className="transition duration-500 hover:text-white hover:scale-105">
                  Sebastian {''}
                  <br />
                  Fontana
                </div>
              </p>}
          {isAboveLarge
            ? <p className="text-4xl mt-7 mb-7 text-center md:text-start hover:animate-[pulse_1s_infinite] group-hover:bg-yellow group-hover:text-deep-blue transition duration-500 w-fit">
                <div className="hover:bg-white">Web Developer.<span className="animate-custom-pulse">{''}|</span></div>
              </p>
            : <p className="text-2xl mt-3 mb-0 mx-auto w-fit text-center md:text-start hover:animate-[pulse_1s_infinite] group-hover:bg-yellow group-hover:text-deep-blue transition duration-500">
                <div className="hover:bg-white">Web Developer.<span className="animate-custom-pulse">{''}|</span></div>
              </p>}
        </motion.div>
        {/* SOCIAL MEDIA */}
        <motion.div
          className="flex mt-0 xs:mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.4, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}
        >
          <SocialMediaIcons />
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-0 xs:mt-8 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}
        >
          <AnchorLink
            className="text-2xl bg-white text-deep-blue rounded-sm py-3 px-7 group-hover:py-0 group-hover:px-0 border-2 border-white hover:animate-[pulse_1s_infinite]
              hover:bg-transparent hover:text-white group-hover:bg-yellow group-hover:text-deep-blue group-hover:border-yellow motion-safe:hover:scale-110 group-hover:border-0 transition duration-500 extra-small-screens:text-center extra-small-screens:py-1 extra-small-screens:px-1"
            onClick={() => setSelectedPage ('contact')}
            href="#contact"
          >
            <div className="hover:bg-deep-blue hover:text-white group-hover:py-3 group-hover:px-7 border-0 group-hover:border-2 extra-small-screens:group-hover:py-1 extra-small-screens:group-hover:px-1 border-yellow hover:border-white">
              Let's Connect!
            </div>
          </AnchorLink>

        </motion.div>

      </div>
    </section>
  );
};

export default Landing;
