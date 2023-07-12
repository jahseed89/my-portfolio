import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  PROJECTS_ROUTE,
} from "../../contents-management/Landing";
import githubLogo from "../../assets/github.png";
import avatar from "../../assets/me.jpg";

import "./home.scss";
import BrandLoader from "../../components/brand-loader/BrandLoader";

const Home = () => {
  const navigateToPages = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const toAboutPage = () => {
    navigateToPages(`/${ABOUT_ROUTE}`);
  };
  const toProjectPage = () => {
    navigateToPages(`/${PROJECTS_ROUTE}`);
  };
  const toContactPage = () => {
    navigateToPages(`/${CONTACT_ROUTE}`);
  };
  return (
    <div className="home-page">
      {loading ? (
        <BrandLoader />
      ) : (
        <div>
          <nav>
            <Link
              to="https://github.com/jahseed89"
              target="_blank"
              className="gitImg-holder"
            >
              <img src={githubLogo} alt="github" />
            </Link>
          </nav>
          <div className="main-contents">
            <div className="contents-header">
              <span className="avatar-holder">
                <img src={avatar} alt="avatar" />
              </span>
              <h2>Samson Ocran</h2>
              <i>
                Software Engineer
                <ul>
                  <li>Github</li>
                  <li>React js</li>
                </ul>
              </i>
            </div>
            <ul className="pages-ul">
              <li onClick={toAboutPage}>About</li>
              <li onClick={toProjectPage}>Projects</li>
              <li onClick={toContactPage}>Contacts</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
