import React from "react";
import { useNavigate } from "react-router";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PROJECTS_ROUTE,
} from "../../contents-management/Landing";
import { Link } from "react-router-dom";
import githubLogo from "../../assets/github.png";
import './navBar.scss'

const NavBar = () => {
  const navigateToPages = useNavigate();

  const toHomePage = () => {
    navigateToPages(`/${HOME_ROUTE}`)
  }
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
    <nav>
      <Link
        to="https://github.com/jahseed89"
        target="_blank"
        className="gitImg-holder"
      >
        <img src={githubLogo} alt="github" />
      </Link>
      <ul className="pages-ul">
        <li onClick={toHomePage}>Home</li>
        <li onClick={toAboutPage}>About</li>
        <li onClick={toProjectPage}>Projects</li>
        <li onClick={toContactPage}>Contacts</li>
      </ul>
    </nav>
  );
};

export default NavBar;
