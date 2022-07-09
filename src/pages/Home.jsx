import React from "react";
import { GrProjects } from "react-icons/gr";
import { VscInfo } from "react-icons/vsc";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  FaLinkedin,
  FaGithub,
  FaBook,
  FaClipboardList,
  FaCommentAlt,
  FaDiceD6,
  FaInfo,
  FaCommentDots,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
const Home = () => {
  const reload = () => {
    window.location.reload(true);
  };

  return (
    <div className="home-page">
      <main>
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <img src="../images/junaid(1).png" alt="" />
              <h3>Junaid Asif</h3>
              <p>Web Developer</p>
            </div>
            <div className="links">
              <a href="#about-page" className="link">
                <FaBook className="icon" />

                <h2>Resume</h2>
              </a>
              <a href="#projects-page" className="link">
                <FaDiceD6 className="icon" />
                <h2>Projects</h2>
              </a>
              <a href="#about-page" className="link">
                <FaInfo className="icon" />
                <h2>About</h2>
              </a>
              <a href="#contact-page" className="link">
                <FaCommentDots className="icon" />
                <h2>Contact</h2>
              </a>
            </div>
            <div className="pro">
              <FaLinkedin className="social-icon" />
              <FaGithub className="social-icon" />
            </div>
          </div>
          <div className="games">
            <div className="status">
              <h1>Skills</h1>
            </div>
            <div className="cards">
              <div className="card">
                <FaReact className="skills-icon" />
                <div className="card-info">
                  <h2>React.js</h2>

                  <div className="progress" id="react"></div>
                </div>
                <h2 className="percentage">65%</h2>
              </div>
              <div className="card">
                <FaNodeJs className="skills-icon" />
                <div className="card-info">
                  <h2>Node.js</h2>

                  <div className="progress" id="node"></div>
                </div>
                <h2 className="percentage">50%</h2>
              </div>
              <div className="card">
                <FaJsSquare className="skills-icon" />
                <div className="card-info">
                  <h2>javascript</h2>

                  <div className="progress" id="javascript"></div>
                </div>
                <h2 className="percentage">80%</h2>
              </div>
              <div className="card">
                <FaHtml5 className="skills-icon" />
                <div className="card-info">
                  <h2>HTML</h2>

                  <div className="progress" id="html"></div>
                </div>
                <h2 className="percentage">90%</h2>
              </div>
              <div className="card">
                <FaCss3Alt className="skills-icon" />
                <div className="card-info">
                  <h2>CSS</h2>

                  <div className="progress" id="css"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
};

export default Home;
