import { PriorityHighTwoTone } from "@material-ui/icons";
import React from "react";
import Corosle from "./layout/Corosle";
import "react-multi-carousel/lib/styles.css";
import JS from "../svg/JS.svg";
import Angular from "../svg/Angular.svg";
import Atlasian from "../svg/Atlasian.svg";
import AWS from "../svg/AWS.svg";
import BootStrap from "../svg/Bootstrap.svg";
import CSS from "../svg/CSS.svg";
import Docker from "../svg/Docker.svg";
import Git from "../svg/Git.svg";
import Github from "../svg/GitHub.svg";
import GitLab from "../svg/GitLab.svg";
import Python from "../svg/Python.svg";
import Heroku from "../svg/Heroku.svg";
import HTML5 from "../svg/HTML5.svg";
import Jira from "../svg/Jira.svg";
import JQuery from "../svg/JQuery.svg";
import MaterialUI from "../svg/MaterialUI.svg";
import MongoDB from "../svg/MongoDb.svg";
import MySql from "../svg/MySql.svg";
import ReactIcon from "../svg/React.svg";

const AboutMe = () => {
  return (
    <main id="aboutme" className="main_container">
      <section id="hello" className="introduction">
        <h1>Hi_</h1>
        <p>
          3 years of IT experience which includes 2.5+ years of Extensive
          experience as a React.js &amp; Node.js Developer. Experienced in
          working with Redux &amp; Redux Saga architecture using complex
          Object-Oriented concepts in improving the performance of the websites
          <br />
          <br />I like building new stuff and work with other people – nothing
          really interesting is ever built alone!.
        </p>

        <a
          className="MuiButtonBase-root MuiButton-root MuiButton-text download_btn"
          tabindex="0"
          aria-disabled="false"
          href="./download/Raj_Resume_1.pdf"
          download="Raj_Nada_Resume.pdf"
        >
          <span id="btn" className="MuiButton-label">
            Download Resume
          </span>
          <span className="MuiTouchRipple-root"></span>
        </a>
      </section>
      <section id="about" className="about_me">
        <h1>About_</h1>

        <div className="education">
          <h3>Education</h3>
          <div className="timelineItem">
            <span className="date">January 2022 - Present</span>
            <h3>Humber College, Etobicoke</h3>
            <span>Information Technology Solutions </span>
            <p>
              GPA of <strong> 8.7 </strong>
            </p>
          </div>
          <div className="timelineItem">
            <span className="date">August 2015 - May 2019</span>
            <h3>Parul University, Vadodara</h3>
            <span>
              Bachelor of Technology in Computer science and Engineering
            </span>
            <p>
              CGPA of <strong> 8.28 </strong>
            </p>
          </div>
          <div className="timelineItem">
            <span className="date">Mar 2013 - April 2015</span>
            <h3>P. P. Savani School</h3>
            <span>Gujarat Secondary and Higher Secondary Education Board</span>
            <p>
              Top of the className with <strong>80.32% </strong>
            </p>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="skill-bx">
              <h2>Skills</h2>
              <Corosle />
            </div>
          </div>
        </div>
      </div>

      <section id="experience">
        <h1>Experience_</h1>
        <ul className="experience-list">
          <li>
            Strong understanding of industry trends and dynamic web application
            development.
          </li>
          <li>
            Utilized cutting-edge Javascript Frameworks such as React, Next Js
            and Node, Designing Skills for developing web applications for
            different clients.
          </li>
          <li>
            Experienced in working with Redux & Redux-Saga architecture using
            complex Object-Oriented concepts in improving the performance of the
            websites.
          </li>
          <li>
            Experience in using React JS components, Forms, Events, Keys, Router
            concept along with Hooks.
          </li>
          <li>
            Worked with NPM commands and using package.json for managing
            dependencies and dev-dependencies of NodeJS applications.
          </li>
          <li>
            Worked on JSON web tokens for authentication and authorization
            security configurations.
          </li>
          <li>Good experience in Bug tracking tools like JIRA, ASANA.</li>
          <li>
            Experience in all phases of SDLC like Requirement Analysis,
            Implementation and Maintenance, and extensive experience with Agile
            and SCRUM.
          </li>
          <li>
            Proficient in web application development & maintenance skills.
          </li>
          <li>
            Updated and Streamlined existing code in React to improve site
            performance for a particular client
          </li>
        </ul>
      </section>
      {/* 
    <section id="projects">
      <h1>Projects_</h1>

      <div className="project-container">
        <div className="slideshow-container">
          <div className="slides fade">
            
          <img src={pro1} width={800} height={500} />
          </div>
          <div className="slides fade">
            
          <img src={pro2} width={800} height={500} />
          </div>
          <div className="slides fade">
            
          <img src={pro3} width={800} height={500} />
          </div>
          <div className="slides fade">
            
          <img src={pro4} width={800} height={500} />
          </div>
          <div className="slides fade">
            
          <img src={pro5} width={800} height={500} />
          </div>
          <div className="slides fade">
            
          <img src={pro6} width={800} height={500} />
          </div>
          <div className="slides fade">
            
          <img src={pro7} width={800} height={500} />
          </div>

          <a href=" " className="prev" onClick={increaseSlides(-1)}>
            &#10094;
          </a>
          <a href=" " className="next" onClick={increaseSlides(1)}>
            &#10095;
          </a>
        </div>
        <br />

        <div style={{ textAlign: "center" }}>
          <span className="dot" onclick={currentSlide(1)}></span>
          <span className="dot" onclick={currentSlide(2)}></span>
          <span className="dot" onclick={currentSlide(3)}></span>
          <span className="dot" onclick={currentSlide(4)}></span>
          <span className="dot" onclick={currentSlide(5)}></span>
          <span className="dot" onclick={currentSlide(6)}></span>
          <span className="dot" onclick={currentSlide(7)}></span>
          <span className="dot" onclick={currentSlide(8)}></span>
        </div>

        <div className="project-info">
          <h3>Camera Web App</h3>
          <p>
            The aim of this app is to show Live Stream and recorded video of
            the place where the camera is attached. In addition, in terms of
            vehicle security, one can not only trace their own vehicle but
            also make surveillance on near and dear ones vehicle activity.
            Apart from that, many functionalities such as display engine
            status, Alert status, Current vehicle speed and many more.
            Moreover, the owner can get immediate notification If finding
            anything suspicious. Other than that, we can also see Live GPS
            and Live Streaming of vehicles.
          </p>
        </div>
      </div>
    </section> */}
    </main>
  );
};

export default AboutMe;
