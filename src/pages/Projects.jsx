import React from "react";

const Projects = () => {
  return (
    <div className="projects-page" id="projects-page">
      <div className="column1">
        <section className="projects-glass1">
          <img src="../../images/react.png" alt="" />
          <h1>React Components</h1>
          <div>
            <a href="https://react-components-page.netlify.app/ " target="_blank">
              <button className="project-btn1">
                <h2>Open Project</h2>
              </button>
            </a>
          </div>
        </section>
        <section className="projects-glass2">
          <img src="../../images/acotar-poster.jpg" alt="" />
          <div>
            <h1>A Court Of Thorns And Roses Fandom Website</h1>
            <a
              href="https://www.upwork.com/o/profiles/users/~01504d18ec3e00497e/?p=1431355475125923840"
              target="_blank"
            >
              <button className="project-btn2">
                <h2>Open Project</h2>
              </button>
            </a>
          </div>
        </section>
      </div>
      <div className="column2">
        <section className="projects-glass3">
          {/* <img src="../../images/cards.png" alt="" /> */}
          <div>
            <h1>Unstationary Card Customization Website</h1>
            <a
              href="https://www.upwork.com/freelancers/~01504d18ec3e00497e?p=1486366543804141568"
              target="_blank"
            >
              <button className="project-btn3">
                <h2>Open Project</h2>
              </button>
            </a>
          </div>
        </section>
        <section className="projects-glass4">
          {/* <img src="../../images/cards.png" alt="" /> */}
          <div>
            <h1>Rigfish Instrument/gears website</h1>
            <a
              href="https://www.upwork.com/freelancers/~01504d18ec3e00497e?p=1486395321203699712"
              target="_blank"
            >
              <button className="project-btn1">
                <h2>Open Project</h2>
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
