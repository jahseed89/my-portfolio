import React, { useEffect, useState } from "react";
import { me4 } from "../../assets/index";
import { BrandLoader } from "../../components/index";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./aboutMe.scss";

const AboutMe = () => {
  const [loading, setLoading] = useState(false);

  const [text] = useTypewriter({
    words: ["Software Development"],
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
              <img src={me4} alt="avatar" />
            </div>
            <div className="bio-section">
              <h1>About Me</h1>
              <h3>
                <span>{text}</span>
                <span>
                  <Cursor cursorStyle=" _#" />
                </span>
              </h3>
              <p>
                In my role as a Frontend Developer, I am driven by a passion for
                creating exceptional user experiences. My expertise lies in
                meticulously crafting pixel-perfect and responsive web
                interfaces, utilizing modern frontend technologies such as React
                and TypeScript to breathe life into designs. Proficient in HTML,
                CSS, and JavaScript, I seamlessly blend technical proficiency
                with a discerning eye for design and usability. I prioritize
                delivering interfaces that not only showcase visual excellence
                but also guarantee smooth interactions and an enjoyable user
                journey. My development approach revolves around a dedication to
                user-centric design, with the goal of creating experiences that
                are both seamless and engaging for all users. Through
                internships and collaborative group projects, I have honed my
                ability to collaborate effectively with designers and backend
                developers, contributing to the successful realization of web
                applications. I recognize the importance of teamwork in
                delivering a cohesive user experience. Committed to continuous
                learning, I stay updated on industry trends and best practices
                in frontend development by regularly following industry blogs,
                attending webinars, and undertaking online courses. This
                commitment allows me to remain current with the ever-evolving
                landscape of frontend technologies. Thriving on tackling complex
                problems, I am motivated to find innovative solutions. As a
                junior developer, I am eager to apply my problem-solving skills
                to contribute to the team's success and adapt to new challenges.
                I am enthusiastic about the opportunity to make a meaningful
                impact and contribute to the ongoing success of the team.
              </p>

              <div className="in-summary">
                <h3>Summary</h3>
                <p>
                  <span>Nickname</span>
                  <span>Jahseed</span>
                </p>
                <p>
                  <span>Pronouns</span>
                  <span>He/Him/His</span>
                </p>
                <p>
                  <span>Education</span>
                  <span>Computer Science of National Deplomah</span>
                </p>
                <p>
                  <span>Myers-briggs</span>
                  <span>ISFJ</span>
                </p>
                <p>
                  <span>Current Location</span>
                  <span>Lagos, Nigeria</span>
                </p>
                <p>
                  <span>Interests</span>
                  <span>Raggae Music, Forieng Movies</span>
                </p>
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
