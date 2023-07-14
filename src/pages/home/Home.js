import React, { useEffect, useState } from "react";
import BrandLoader from "../../components/brand-loader/BrandLoader";
import "./home.scss";
import AboutMe from "../about/AboutMe";
import SkillsCard from "../../components/skills/SkillsCard";
import {
  html,
  css,
  sass,
  bootstrap,
  react,
  js,
  typscript,
  vue,
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
        </>
      )}
    </div>
  );
};

export default Home;
