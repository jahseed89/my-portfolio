import React, { useEffect, useState } from "react";
import BrandLoader from "../../components/brand-loader/BrandLoader";
import me from "../../assets/me.jpg";
import { TiThMenuOutline } from "react-icons/ti";
import "./aboutMe.scss";
import PagesModal from "../../components/modal/PagesModal";
import { CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from "../../contents-management/Landing";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [pages, setPages] = useState(false)
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setPages(prev => !prev)
  }

  const closeModal = () => {
    setPages()
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="about">
      <nav>
        <div className="menuBar-holder">
          <div className="menuBar-holder">
            <span onClick={showModal}>
              <TiThMenuOutline className="menu" />
            </span>
          </div>
        </div>
        {pages && (
          <PagesModal handleClose={closeModal}>
          <div className="pages-container">
            <span>
              <Link to={`/${HOME_ROUTE}`}>Home</Link>
            </span>
            <span>
              <Link to={`/${PROJECTS_ROUTE}`}>Projects</Link>
            </span>
            <span>
              <Link to={`/${CONTACT_ROUTE}`}>Contact Me</Link>
            </span>
          </div>
        </PagesModal>
        )}
      </nav>
      {loading ? (
        <BrandLoader />
      ) : (
        <div className="page-content">
          <div className="img-holder">
            <img src={me} alt="avatar" />
          </div>
          <div className="bio-section">
            <h1>Samson Ocran</h1>
            <p>
              Hello! It's nice having you here, I'm Samson Jahseed Ocran A
              Junior Software developer, using the latest tools and technologies
              used in frontend development to bring ideas to an accessible,
              human-centered products. I am a quick learner and fast in
              delivering Projects because I stay focuse on worikng extral hours
              to make sure I have a given project done. I love to learn and
              explore new technologies and passionate about problem solving.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
