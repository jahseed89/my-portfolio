import React, { useState } from "react";
import ibeliveProj from "../../assets/ibelive.png";
import romanNumbers from "../../assets/roman-nums.png";
import diesGame from "../../assets/dies-game.png";
import phonex from "../../assets/phonex.png";
import randomUsers from "../../assets/random-users.png";
import { GrMenu } from "react-icons/gr";
import { CgClose } from "react-icons/cg";
import Links from "../../components/links/Links";
import "./projects.scss";
import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
} from "../../contents-management/Landing";

const Projects = () => {
  const [pages, setPages] = useState(false);
  const [menuIcon, setMenuIcon] = useState(true);
  const [cancelIcon, setCancelIcon] = useState(false);

  const showCancelIconAndPages = () => {
    setMenuIcon((prev) => !prev);
    setCancelIcon((prev) => !prev);
    setPages((prev) => !prev);
  };
  const showMenuBar = () => {
    setCancelIcon();
    setMenuIcon(true);
    setPages(false);
  };

  return (
    <div className="projects-page">
      {/* <nav>
        <div className="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <nav>
        <div className="menuBar-holder">
          {menuIcon && (
            <span onClick={showCancelIconAndPages}>
              <GrMenu className="menu" />
            </span>
          )}
          {cancelIcon && (
            <span onClick={showMenuBar}>
              <CgClose className="cancleIcon" />
            </span>
          )}
        </div>

        {pages && (
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
        )}
      </nav>

      <header>Featured Projects</header>

      <div className="projects-wrapper">
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
              <Links text="View Website" url="https://ibelieve.netlify.app/home" />
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
              <Links text="View Website" url="https://romannumbers.netlify.app/" />
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
              <Links text="View Website" url="https://darling-pegasus-a474c4.netlify.app/" />
            </div>
            <div className="diesGame-imgHolder">
              <img src={diesGame} alt="dies-game" />
            </div>
          </div>
        </div>
        <div className="fourth-proj-wrapper">
          <div className="forth-proj-holder">
            <h2>Random Users Information</h2>
            <p>
              This Application is build on a random user API that generates
              information about a particular group of applicants
            </p>
            <div className="btn_holder">
              <Links text="View Website" url="https://users-random-card.netlify.app/" />
            </div>
            <div className="randomUsers-proj-holder">
              <img src={randomUsers} alt="random-users" />
            </div>
          </div>

          <div className="fith-proj-holder">
            <h2>The Xcel-Phonie</h2>
            <p>
              The Xcel-phonie helps in securing your phone number. It has an
              input that takes in any phone number and provides the righ network
              information.
            </p>
            <div className="btn_holder">
              <Links text="View Website" url="https://loquacious-syrniki-bdb8bf.netlify.app/" />
            </div>
            <div className="phonex-proj-holder">
              <img src={phonex} alt="phonex" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
