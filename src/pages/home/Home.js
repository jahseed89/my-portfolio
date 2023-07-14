import React, { useEffect, useState } from "react";
import AboutMe from "../about/AboutMe";
import { BrandLoader, ProjectCard, SkillsCard } from "../../components/index";
import "./home.scss";

import {
  html,
  css,
  sass,
  bootstrap,
  react,
  js,
  typscript,
  vue,
  ibeliev,
  carefinder,
  phonex,
} from "../../assets/index";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="home-page">
      {loading ? (
        <BrandLoader />
      ) : (
        <>
          <AboutMe />
          <div className="skills-container">
            <h1>Skills</h1>
            <div className="skill-wrapper">
              <div>
                <SkillsCard skillIcon={html} skill="HTML" />
                <SkillsCard skillIcon={css} skill="CSS" />
                <SkillsCard skillIcon={sass} skill="SASS" />
                <SkillsCard skillIcon={bootstrap} skill="BS" />
              </div>
              <div>
                <SkillsCard skillIcon={react} skill="REACT" />
                <SkillsCard skillIcon={js} skill="JS" />
                <SkillsCard skillIcon={typscript} skill="TS" />
                <SkillsCard skillIcon={vue} skill="VUE" />
              </div>
            </div>
          </div>
          <div className="projectSection-container">
            <h1>Recent Projects</h1>
            <div className="proj-section">
              <div className="project-holder">
                <ProjectCard
                  title="Ibeliev"
                  projImg={ibeliev}
                  desc="This platform seeks to help propel talented individuals into the world of fame. Are you good at singing, 
                  dancing or at any cool thing? iBelieve is a platform where you can leverage on your talents and become a global star."
                  url="https://ibelieve.netlify.app/home"
                  linkText="View site"
                />
                <ProjectCard
                  title="Carefinder"
                  projImg={carefinder}
                  desc="The Application helps user to locate the nearest hospital in their location. It also allow users search hospitals in all over the country and its authenticated with firebase authentication."
                  url="https://hospitalsearch.netlify.app"
                  linkText="View site"
                />
                <ProjectCard
                  title="Xcel-Phonie"
                  projImg={phonex}
                  desc="The Xcel-phonie helps in securing your phone number. It has an input that takes in any phone number and provides the righ network information.."
                  url="https://loquacious-syrniki-bdb8bf.netlify.app/"
                  linkText="View site"
                />
              </div>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
