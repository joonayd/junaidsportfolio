import React from "react";
import jsPDF from "jspdf";
// import cv from "../docs/resume.pdf";

const About = () => {
  React.useEffect(() => {
    react();
    node();
    javascript();
    html();
    css();
    bootstrap();
    mongodb();
    jquery();
  }, []);

  const react = () => {
    const numb1 = document.querySelector(".numb1");
    let counter = 0;
    setInterval(() => {
      if (counter == 65) {
        clearInterval();
      } else {
        counter += 1;
        numb1.textContent = counter + "%";
      }
    }, 40);
  };
  const node = () => {
    const numb2 = document.querySelector(".numb2");
    let counter = 0;
    setInterval(() => {
      if (counter == 50) {
        clearInterval();
      } else {
        counter += 1;
        numb2.textContent = counter + "%";
      }
    }, 40);
  };
  const javascript = () => {
    const numb3 = document.querySelector(".numb3");
    let counter = 0;
    setInterval(() => {
      if (counter == 80) {
        clearInterval();
      } else {
        counter += 1;
        numb3.textContent = counter + "%";
      }
    }, 42);
  };
  const html = () => {
    const numb4 = document.querySelector(".numb4");
    let counter = 0;
    setInterval(() => {
      if (counter == 80) {
        clearInterval();
      } else {
        counter += 1;
        numb4.textContent = counter + "%";
      }
    }, 42);
  };
  const css = () => {
    const numb5 = document.querySelector(".numb5");
    let counter = 0;
    setInterval(() => {
      if (counter == 60) {
        clearInterval();
      } else {
        counter += 1;
        numb5.textContent = counter + "%";
      }
    }, 48);
  };
  const bootstrap = () => {
    const numb6 = document.querySelector(".numb6");
    let counter = 0;
    setInterval(() => {
      if (counter == 90) {
        clearInterval();
      } else {
        counter += 1;
        numb6.textContent = counter + "%";
      }
    }, 40);
  };
  const mongodb = () => {
    const numb7 = document.querySelector(".numb7");
    let counter = 0;
    setInterval(() => {
      if (counter == 50) {
        clearInterval();
      } else {
        counter += 1;
        numb7.textContent = counter + "%";
      }
    }, 45);
  };

  const jquery = () => {
    const numb8 = document.querySelector(".numb8");

    let counter = 0;
    setInterval(() => {
      if (counter == 50) {
        clearInterval();
      } else {
        counter += 1;

        numb8.textContent = counter + "%";
      }
    }, 40);
  };
  return (
    <div className="about-page" id="about-page">
      <section className="about-glass1">
        <h1>About Me</h1>
        <p>
          Specializing in ReactJs, NodeJs and MongoDB and a wordpress site developer. I have built
          websites from E-Commerce functionality to any kind of Dynamic and Static websites. My area
          of expertise is web development programming. I have worked with APIs and databases and
          modern agile methodologies. My Skills set consists of HTML, CSS, Bootstrap, jquery,
          Javascript, ReactJs, NodeJs, MongoDB, ExpressJs, APIs, E-Commerce Functionality. I am
          basically a coding geek who could complete your project for you under any circumstances. I
          could build you a website in any platform you would want me to
        </p>

        <a href="../docs/resume.pdf" download>
          <button className="about-btn1">
            <h2>Download CV</h2>
          </button>
        </a>
      </section>

      <section className="about-glass2">
        <h1>Extensive Skills</h1>
        <div className="progress-container">
          <div className="progress-column">
            <h3>React</h3>
            <div className="circular">
              <div className="inner"></div>
              <div className="numb1">0%</div>
              <div className="circle">
                <div className="bar left">
                  <div className="progress"></div>
                </div>
                <div className="bar right1 ">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="progress-column">
            <h3>Node</h3>
            <div className="circular">
              <div className="inner"></div>
              <div className="numb2">0%</div>
              <div className="circle">
                <div className="bar left">
                  <div className="progress"></div>
                </div>
                <div className="bar right2">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="progress-column">
            <h3>JS</h3>
            <div className="circular">
              <div className="inner"></div>
              <div className="numb3">0%</div>
              <div className="circle">
                <div className="bar left">
                  <div className="progress"></div>
                </div>
                <div className="bar right3 ">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="progress-container2">
          <div className="progress-column">
            <h3>HTML</h3>
            <div className="circular">
              <div className="inner"></div>
              <div className="numb4">0%</div>
              <div className="circle">
                <div className="bar left">
                  <div className="progress"></div>
                </div>
                <div className="bar right4 ">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="progress-column">
            <h3>CSS</h3>
            <div className="circular">
              <div className="inner"></div>
              <div className="numb5">0%</div>
              <div className="circle">
                <div className="bar left">
                  <div className="progress"></div>
                </div>
                <div className="bar right5 ">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="progress-column">
            <h3>Bootstrap</h3>
            <div className="circular">
              <div className="inner"></div>
              <div className="numb6">0%</div>
              <div className="circle">
                <div className="bar left">
                  <div className="progress"></div>
                </div>
                <div className="bar right6 ">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="progress-container3">
          <div className="progress-column">
            <h3>MongoDB</h3>
            <div className="circular">
              <div className="inner"></div>
              <div className="numb7">0%</div>
              <div className="circle">
                <div className="bar left">
                  <div className="progress"></div>
                </div>
                <div className="bar right7 ">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="progress-column">
            <h3>JQuery</h3>
            <div className="circular">
              <div className="inner"></div>
              <div className="numb8">0%</div>
              <div className="circle">
                <div className="bar left">
                  <div className="progress"></div>
                </div>
                <div className="bar right8 ">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
