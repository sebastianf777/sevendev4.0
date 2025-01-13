import LineGradient from '../components/LineGradient';
import {motion} from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1},
};

const Project = ({title, link}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-80 transition duration-500
    bg-black z-30 flex flex-col justify-center items-center text-center p-16 text-white`;
  const projectTitle = title.split (' ').join ('-').toLowerCase ();

  return (
    <motion.div variants={projectVariant} className="relative" >
      <a href={link} target="_blank" rel="noreferrer">
        <div className={overlayStyles}>
          <p className="text-1xl">{title}</p>
          {/* <p className="mt-7">{subtitle}</p> */}
        </div>
        <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="group pt-28 pb-28">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0},
        }}
      >
        <div className="mb-10">
          <p className="text-4xl bg-yellow text-deep-blue w-fit mx-auto hover:animate-[pulse_1s_infinite] group-hover:bg-white">
           My Projects:
            <span className="animate-custom-pulse">{''}|</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {/* ROW 1 */}
          <Project title="LP Websites N1" link="https://8blocksrealestate.com/"/>
          <Project title="LP Websites N2" link="https://costamodernproperties.com/"/>
          <Project title="LP Websites N4" link="https://elizabethalligoodassociates.com/"/>
          <Project title="LP Websites N5" link="https://gimenezrealtygroup.echeloncalifornia.com/"/>
          <Project title="LP Websites N6" link="https://joyliu.helmrealestate.com/"/>
          <Project title="LP Websites N8" link="https://remilestone.com/"/>
          <Project title="LP Websites N11" link="https://www.raintownrealty.com/"/>
          <Project title="LP Websites N12" link="https://liveyoursanctuary.com/"/>
          <Project title="LP Websites N15" link="https://liveyoursanctuary.com/"/>

          <Project
            title="React Training"
            link="https://tiendaropa-sebastianfontana.web.app/"
          />
          <Project title="Best Blog Project" link="https://s3v3n37.online/"/>

          {/* ROW 2 */}
          <Project title="CMS Project" link="https://sbn7art.online/" />
          <Project title="Best Php Project" link="https://fontana7-3rd-version.online/"/>

          {/* ROW 3 */}
          <Project title="Best Template Project" link={"https://sebastianf777.github.io/personal-prototype/"}/>
          <Project title="Best Game Project" link={'https://sebastianf777.github.io/proyectoJS/'}/>
          <div className="flex justify-center text-center items-center p-10 bg-yellow group-hover:bg-white text-deep-blue
               text-2xl">
          
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
