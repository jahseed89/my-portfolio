import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import {
  BlogCard,
  BrandLoader,
  Button,
  ProjectCard,
  SkillsCard,
} from "../../components/index";
import "./home.scss";

import {
  me2,
  html,
  css,
  sass,
  bootstrap,
  react,
  js,
  typscript,
  vue,
  carefinder,
  githubApi,
  context2,
  learning,
  gallery,
  movies,
} from "../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import {
  CONTACT_ROUTE,
  PROJECTS_ROUTE,
} from "../../contents-management/Landing";
import Aos from "aos";
import ContactMe from "../contact/ContactMe";
import "aos/dist/aos.css";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const navigator = useNavigate();

  function toProjPage() {
    navigator(`/${PROJECTS_ROUTE}`);
  }

  function toContactPage() {
    navigator(`/${CONTACT_ROUTE}`);
  }

  const [text] = useTypewriter({
    words: ["Software Development"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="home-page">
      {loading ? (
        <BrandLoader />
      ) : (
        <>
          <div className="page-content">
            <div className="img-holder">
              <img src={me2} alt="avatar" />
            </div>
            <div className="bio-section">
              <h1>Samson Ocran</h1>
              <h3>
                <span>{text}</span>
                <span>
                  <Cursor cursorStyle=" _#" />
                </span>
              </h3>
              <p>
                Hello! It's nice having you here, I'm Samson Jahseed Ocran A
                Junior frontend developer with a knack for creating stunning
                user experiences. I specialize in building responsive websites
                that look and fuction flawlessly across all devices and screen
                sizes. From mobile to desktop, my goal is to ensure that every
                user has a consistent and optimized experience. I stay
                up-to-date with the latest frontend frameworks and libraries,
                such as React, Typscript etc to creat dynamic and interactive
                web applications. I also collaborative in working closely with
                designers and backend developers to bring concepts to life.
                Clear communication and teamwork are integral to my process,
                ensuring that projects are delivered on time and to client
                satisfaction. I've had the privilege of working on projects that
                have not only challenged my skills but also allowed me to create
                impactful solutions. The world of frontend development is always
                evolving, and I'm committed to continuous learning.
              </p>
              <div className="cv__info-container">
                <Button btnTxt="Contact Me" handleClick={toContactPage} />
                <Link to='https://docs.google.com/document/d/11CEeJ_wiV5R4v-wJHS2F3lhuxzRawpxfqkxJv9mEHG0/edit' target="_blank" className="cv-link">Get CV</Link>
              </div>
            </div>
          </div>
          <div className="border-line-container"></div>
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
                  title="Movie Room"
                  projImg={movies}
                  desc="This is a movie app build with TMDB api. Allowing users to search for movie of their choice by the help of filtering"
                  url="https://mymovies-phi.vercel.app/"
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
                  title="Image Gallery"
                  projImg={gallery}
                  desc="The Image gallery allow users to login to the application of images and also anable the authenticated user to drag and drop images."
                  url="https://image-gallery-rho-two.vercel.app/"
                  linkText="View site"
                />
              </div>
              <div className="viewmore-btn">
                <Button btnTxt="View more" handleClick={toProjPage} />
              </div>
            </div>
          </div>
          <div className="blog">
            <h1>My Blogs</h1>
            <div className="blog-wrapper" data-aos="flip-left">
              <BlogCard
                blogTitle="Github API App"
                blogImg={githubApi}
                description="Github Users Api fetch"
                blogLink="Read"
                blogUrl="https://medium.com/@samson.ocran/github-api-altschool-second-semester-exams-74612148c495"
              />
              <BlogCard
                blogTitle="useContext Hook"
                blogImg={context2}
                description="How to use react context hook"
                blogLink="Read"
                blogUrl="https://medium.com/@samson.ocran/using-react-context-f6fea4bb036f"
              />
              <BlogCard
                blogTitle="Self Building"
                blogImg={learning}
                description="Building up one self"
                blogLink="Read"
                blogUrl="https://medium.com/@samson.ocran/self-building-4fe9001dd101"
              />
            </div>
          </div>
          <div className="home-footer">
            <ContactMe />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
