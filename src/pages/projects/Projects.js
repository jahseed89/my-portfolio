import React, { useEffect, useState } from "react";
import { BrandLoader, ProjectCard } from "../../components/index";
import {
  agrigy,
  carefinder,
  githubApi,
  ibeliev,
  phonex,
  romanNum,
} from "../../assets/index";
import "./projects.scss";

const Projects = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <BrandLoader />
      ) : (
        <div className="projects-page">
          <h1>Projects</h1>
          <div className="proj-wrapper">
            <ProjectCard
              title="Carefinder"
              projImg={carefinder}
              desc="The Application helps user to locate the nearest hospital in their location. It also allow users search hospitals in all over the country and its authenticated with firebase authentication."
              url="https://hospitalsearch.netlify.app"
              linkText="View Site"
            />
            <ProjectCard
              title="Roman Number Converter"
              projImg={romanNum}
              desc="This App help's user to input a number and in return output the roman figure of the number that was inputed"
              url="https://romannumbers.netlify.app/"
              linkText="View Site"

            />
            <ProjectCard
              title="Ibelieve"
              projImg={ibeliev}
              desc="This platform seeks to help propel talented individuals into the world of fame. Are you good at singing, 
                dancing or at any cool thing? iBelieve is a platform where you can leverage on your talents and become a global star."
              url="https://ibelieve.netlify.app/home"
              linkText="View Site"

            />
            <ProjectCard
              title="Agrify"
              projImg={agrigy}
              desc="This App is all about Ranch that contains all kinds of Capybara (Hydrochoerus hydrochaeris) Animals. And this app was build in with corraburations. This Application can only be login with the right cridentials"
              url="https://agrify-web.netlify.app/auth/login"
              linkText="View Site"

            />
            <ProjectCard
              title="Gitbut API Fetch"
              projImg={githubApi}
              desc="GitHub Api is a simple web app that describes my GitHub profiles and repository details."
              url="https://gighub-api.netlify.app"
              linkText="View Site"

            />
            <ProjectCard
              title="Random User App"
              projImg={phonex}
              desc="The Xcel-phonie helps in securing your phone number. It has an input that takes in any phone number and provides the righ network information."
              url="https://ibelieve.netlify.app/home"
              linkText="View Site"

            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
