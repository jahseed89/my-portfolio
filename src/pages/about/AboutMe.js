import React, { useEffect, useState } from "react";
import { me2 } from "../../assets/index";
import { BrandLoader, Button } from "../../components/index";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { CONTACT_ROUTE } from "../../contents-management/Landing";
import "./aboutMe.scss";

const AboutMe = () => {
  const [loading, setLoading] = useState(false);

  const navigator = useNavigate();
  function toContactPage() {
    navigator(`/${CONTACT_ROUTE}`);
  }

  const [text] = useTypewriter({
    words: [
      "Software Development",
      // "React js",
      // "Css/Sass",
      // "Bootstrap",
      // "PHP",
      // "Vue js",
      // "Typscript",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="about">
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
                Junior Software developer, using the latest tools and
                technologies used in frontend development to bring ideas to an
                accessible, human-centered products. I am a quick learner and
                fast in delivering Projects because I stay focuse on worikng
                extra hours to make sure I have a given project done. I love to
                learn and explore new technologies and passionate about problem
                solving.
              </p>
              <div>
                <Button btnTxt="Contact Me" handleClick={toContactPage} />
              </div>
            </div>
          </div>
          <div className="border-line-container"></div>
        </>
      )}
    </div>
  );
};

export default AboutMe;
