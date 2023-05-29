import React, { useState } from "react";
import ibeliveProj from "../../assets/ibelive.png";
import romanNumbers from "../../assets/roman-nums.png";
import diesGame from "../../assets/dies-game.png";
import phonex from "../../assets/phonex.png";
import randomUsers from "../../assets/random-users.png";
import { GrMenu } from "react-icons/gr";
import Links from "../../components/links/Links";
import "./projects.scss";
import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
} from "../../contents-management/Landing";
import PagesModal from "../../components/modal/PagesModal";

const Projects = () => {
  const [pages, setPages] = useState(false);
  
  const showCancelIconAndPages = () => {
    setPages((prev) => !prev);
  };

  const closeModal = () => {
    setPages();
  };

  return (
    <div className="projects-page">
      <nav>
        <div className="menuBar-holder">
          <div className="menuBar-holder">
            <span onClick={showCancelIconAndPages}><GrMenu className="menu" /></span>
          </div>
        </div>

        {pages && (
          <PagesModal handleClose={closeModal}>
            <div className="pages-container">
              <span>
                <Link to={`/${HOME_ROUTE}`}>Home</Link>
              </span>
              <span>
                <Link to={`/${ABOUT_ROUTE}`}>About Me</Link>
              </span>
              <span>
                <Link to={`/${CONTACT_ROUTE}`}>Contact Me</Link>
              </span>
            </div>
          </PagesModal>
        )}
      </nav>

      <header>Featured Projects</header>

      <div className="projects-wrapper" onClick={closeModal}>
        <div className="first-proj">
          <div className="ibeliveImg-holder">
            <img src={ibeliveProj} alt="ibelive" />
          </div>
          <div className="ibiliev-desc">
            <h2>Got a talent? Showcase it to the world</h2>
            <p>
              This platform seeks to help propel talented individuals into the
              world of fame. Are you good at singing, dancing or at any cool
              thing? iBelieve is a platform where you can leverage on your
              talents and become a global star.
            </p>
            <div className="btn_holder">
              <Links
                text="View Website"
                url="https://ibelieve.netlify.app/home"
              />
            </div>
          </div>
        </div>
        <div className="second-proj-wrapper">
          <div className="second-proj">
            <h2>Making learning and teaching easy</h2>
            <p>
              This Application accept any number A user input and convert it to
              a roman figure
            </p>
            <div className="btn_holder">
              <Links
                text="View Website"
                url="https://romannumbers.netlify.app/"
              />
            </div>
            <div className="roman-nums-imgHolder">
              <img src={romanNumbers} alt="roman-numbers" />
            </div>
          </div>
          <div className="third-proj">
            <h2>Lets have some fun with Dies Game</h2>
            <p>
              This project was created when there was no room for workflow. So I
              decided to come up with a dies game of fun. Playing programaticaly
            </p>
            <div className="btn_holder">
              <Links
                text="View Website"
                url="https://darling-pegasus-a474c4.netlify.app/"
              />
            </div>
            <div className="diesGame-imgHolder">
              <img src={diesGame} alt="dies-game" />
            </div>
          </div>
        </div>
        <div className="fourth-proj-wrapper">
          <div className="fith-proj-holder">
            <h2>The Xcel-Phonie</h2>
            <p>
              The Xcel-phonie helps in securing your phone number. It has an
              input that takes in any phone number and provides the righ network
              information.
            </p>
            <div className="btn_holder">
              <Links
                text="View Website"
                url="https://loquacious-syrniki-bdb8bf.netlify.app/"
              />
            </div>
            <div className="phonex-proj-holder">
              <img src={phonex} alt="phonex" />
            </div>
          </div>
          <div className="forth-proj-holder">
            <h2>Random Users Information</h2>
            <p>
              This Application is build on a random user API that generates
              information about a particular group of applicants
            </p>
            <div className="btn_holder">
              <Links
                text="View Website"
                url="https://users-random-card.netlify.app/"
              />
            </div>
            <div className="randomUsers-proj-holder">
              <img src={randomUsers} alt="random-users" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
