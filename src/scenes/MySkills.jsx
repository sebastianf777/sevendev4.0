import LineGradient from '../components/LineGradient';
import {motion} from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariant = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1},
};

const Skill = ({title, variation, link}) => {
  const overlayStyles = `absolute h-[80%] w-[85%] opacity-0 group-hover:opacity-90 transition duration-[1000ms] delay-[700ms]
  bg-grey z-30 flex flex-col justify-center m-auto items-center text-center inset-0 overflow-auto text-deep-blue`;
  const skillTitle = title.split (' ').join ('-').toLowerCase ();
  
  return (
    <motion.div variants={skillVariant} className="relative group">

      <a href={link} target="_blank" rel="noreferrer">
        {/* <div className={overlayStyles}>
          <p className="text-2xl">If you're curious and want to learn more about this skill, just click it!</p>
        </div> */}
        <img
          className={variation}
          src={`../assets/${skillTitle}.png`}
          alt={skillTitle}
        />
      </a>
    </motion.div>
  );
};

const MySkills = () => {
  const isAboveLarge = useMediaQuery ('(min-width: 768px)');

  return (
    <section id="skills" className="pt-28 pb-28 group">
      {/* HEADINGS */}

      <motion.div
        className="md:w-2/5 mx-auto text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0},
        }}
      >
        <div className="mb-14">
          <p className="text-4xl hover:animate-[pulse_1s_infinite] group-hover:bg-white bg-yellow text-deep-blue w-fit mx-auto">
            My Skills:
            <span className="animate-custom-pulse">{''}|</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
       
      </motion.div>

      {/* SKILLS */}
      {isAboveLarge
        ? <div className="flex justify-center mt-[-70px]">
            <motion.div
              className="sm:grid sm:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.2}}
            >
              {/* ROW 1 */}
              <div className="flex justify-center text-center items-center m-5 bg-white hover:bg-yellow text-deep-blue hover:rotate-[360deg] transition duration-500
              rounded-full aspect-square self-center text-3xl scale-75 hover:scale-90">
                Front End Skills
              </div>
              {/*you can add links like this <Skill link='https://react.dev/' title="Skill 1" variation="p-5 scale-75 group-hover:scale-90 transition duration-500 group-hover:rotate-180" /> */}

              <Skill title="Skill 1" variation="p-5 scale-75 hover:scale-90 transition duration-500 hover:rotate-180" />
              <Skill title="Skill 2" variation="p-5 scale-75 hover:scale-90 transition duration-500 hover:rotate-[360deg]" />

              {/* ROW 2 */}
              <Skill title="Skill 3" variation="p-5 scale-75 hover:scale-100 transition duration-500 hover:rotate-12"/>
              <Skill title="Skill 4" variation="p-5 scale-75 hover:scale-100 transition duration-500 hover:rotate-12"/>
              <Skill title="Skill 5" variation="p-5 scale-75 hover:scale-100 transition duration-500 hover:rotate-12"/>

              {/* ROW 3 */}
              <Skill title="Skill 6" variation="p-5 scale-90 transition duration-500 hover:animate-php-animation opacity-100 hover:scale-75" />
              <Skill title="Skill 7" variation="p-5 scale-90 transition duration-500 hover:animate-php-animation opacity-100 hover:scale-75"/>

              <div className="flex justify-center text-center items-center m-5 scale-90 bg-yellow hover:bg-white text-deep-blue
              rounded-full max-w-[400px] max-h-[400px] aspect-square self-center text-3xl transition duration-500 hover:animate-php-animation opacity-100 hover:scale-75">
                Back End Skills
              </div>

            </motion.div>
          </div>
        : 

        // SMALL SCREENS
        // SMALL SCREENS
        // SMALL SCREENS

        <div className="flex justify-center">
            <motion.div
              className="sm:grid sm:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.2}}
            >
              {/* ROW 1 */}
              <div className="flex justify-center text-center items-center p-10 bg-yellow text-deep-blue
              rounded-full max-h-[400px] text-2xl">
                Front End Skills
              </div>

              <Skill title="Skill 1" variation="p-5 scale-75 group-hover:scale-90 transition duration-500 group-hover:rotate-180" />
              <Skill title="Skill 2" variation="p-5 scale-75 group-hover:scale-90 transition duration-500 group-hover:rotate-[360deg]" />

              {/* ROW 2 */}
              <Skill title="Skill 3" variation="p-5 scale-75 group-hover:scale-100 transition duration-500 group-hover:rotate-12"/>
              <Skill title="Skill 4" variation="p-5 scale-75 group-hover:scale-100 transition duration-500 group-hover:rotate-12"/>
              <Skill title="Skill 5" variation="p-5 scale-75 group-hover:scale-100 transition duration-500 group-hover:rotate-12"/>

              {/* ROW 3 */}
              <Skill title="Skill 6" variation="p-5 scale-90 transition duration-500 group-hover:animate-php-animation opacity-100 group-hover:scale-75" />
              <Skill title="Skill 7" variation="p-5 scale-90 transition duration-500 group-hover:animate-php-animation opacity-100 group-hover:scale-75"/>
              <div className="flex justify-center text-center items-center p-10 bg-yellow
               rounded-full max-h-[400px] text-2xl text-deep-blue">
                Back End Skills
              </div>

            </motion.div>
          </div>}
    </section>
  );
};

export default MySkills;
