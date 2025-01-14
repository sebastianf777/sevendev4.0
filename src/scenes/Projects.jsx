import React, { useState } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-80 transition duration-500
    bg-black z-30 flex flex-col justify-center items-center text-center p-16 text-white`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noreferrer">
        <div className={overlayStyles}>
          <p className="text-1xl">{title}</p>
        </div>
        <img
          src={`../assets/${projectTitle}.jpg`}
          alt={`${title} thumbnail`}
          loading="lazy"
          className="w-full h-auto"
        />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    { title: "LP Websites N1", link: "https://8blocksrealestate.com/" },
    { title: "LP Websites N2", link: "https://costamodernproperties.com/" },
    { title: "LP Websites N4", link: "https://elizabethalligoodassociates.com/" },
    { title: "LP Websites N5", link: "https://gimenezrealtygroup.echeloncalifornia.com/" },
    { title: "LP Websites N6", link: "https://joyliu.helmrealestate.com/" },
    { title: "LP Websites N8", link: "https://remilestone.com/" },
    { title: "LP Websites N11", link: "https://www.raintownrealty.com/" },
    { title: "LP Websites N12", link: "https://liveyoursanctuary.com/" },
    { title: "LP Websites N15", link: "https://liveyoursanctuary.com/" },
    { title: "Wordpress Project N1", link: "https://magnesiusai.com/" },
    { title: "Wordpress Project N2", link: "https://wellness.magnesiusai.com/" },
    { title: "Wordpress Project N3", link: "https://robot.magnesiusai.com/" },
    { title: "Wordpress Project N4", link: "https://sevendev.magnesiusai.com/" },
    { title: "Adobe Projects N1", link: "https://7fprojects.myportfolio.com/" },
    { title: "Adobe Projects N2", link: "https://7fai.myportfolio.com/work" },
    { title: "React Training", link: "https://tiendaropa-sebastianfontana.web.app/" },
    { title: "Php Project", link: "https://fontana7-3rd-version.online/" },
    { title: "CMS Project", link: "https://sbn7art.online/" },
    { title: "Template Training", link: "https://sebastianf777.github.io/proyectoJS/" },
    { title: "Client Project N1", link: "https://sebastianf777.github.io/personal-prototype/" },
    { title: "Client Project N2", link: "https://sebastianf777.github.io/personal2-prototype/" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="projects" className="group pt-28 pb-28">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="mb-10">
          <p className="text-4xl bg-yellow text-deep-blue w-fit mx-auto">
            My Projects:
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center">
        <motion.div
          key={currentPage}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{ minHeight: `calc((200px + 16px) * 2)` }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {currentProjects.map((project, index) => (
            <Project key={index} title={project.title} link={project.link} />
          ))}
        </motion.div>

        <div className="flex flex-col items-center justify-center space-y-3 mt-5">
          {/* Prev and Next Buttons */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              ← Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next →
            </button>
          </div>

          {/* Page Indicator */}
          <p className="text-2xl sm:text-base text-center">{`Page ${currentPage} of ${totalPages}`}</p>
        </div>

      </div>
    </section>
  );
};

export default Projects;