import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from "../contents-management/Landing";
import PageNotFound from "../pages/page-not-found/PageNotFound";

const LandingLayout = lazy(() => import('../layout/LandingLayout'))
const Home = lazy(() => import("../pages/home/Home"))
const AboutMe = lazy(() => import("../pages/about/AboutMe"))
const Projects = lazy(() => import("../pages/projects/Projects"))
const ContactMe = lazy(() => import("../pages/contact/ContactMe"))


const LandingRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<LandingLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route
              path={HOME_ROUTE}
              element={<Home />}
            />
            <Route
              path={ABOUT_ROUTE}
              element={<AboutMe />}
            />
            <Route
              path={PROJECTS_ROUTE}
              element={<Projects />}
            />
            <Route
              path={CONTACT_ROUTE}
              element={<ContactMe />}
            />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </div>
  );
};

export default LandingRoute;
