import React from "react";

import "react-multi-carousel/lib/styles.css";
import JS from "../svg/JS.svg";
import TS from "../svg/TS.svg";
import Angular from "../svg/Angular.svg";
import Vue from "../svg/Vue.svg";
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
import TailWind from "../svg/TailWind.svg";
import NextIcon from "../svg/Next.svg";
import NodeIcon from "../svg/Node.svg";
import Netlify from "../svg/Netlify.svg";
import MongoDB from "../svg/MongoDb.svg";
import MySql from "../svg/MySql.svg";
import ReactIcon from "../svg/React.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const AboutMe = () => {

  const skillsData = [
    { imgSrc: {Angular}, alt: 'HTML', label: 'HTML5' },
    // Add other skills data here
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
        <div className="timelineItem">
            <span className="date">April 2023 - August 2023</span>
            <h3>Fiat Match, Toronto</h3>
            <span>Team Lead, Software Developer</span>
            
          </div>
          <div className="timelineItem">
            <span className="date">January 2022 - August 2023</span>
            <h3>Humber College, Etobicoke</h3>
            <span>Information Technology Solutions </span>
            <p>
              GPA of <strong> 8.7 </strong>
            </p>
          </div>
          <div className="timelineItem">
            <span className="date">May 2019 - November 2021</span>
            <h3>Narola Solutions, India</h3>
            <span>Full Stack Developer</span>
            
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
      

<section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="skill-bx">
              <h2>Skills</h2>
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                arrows={false}
              >
                  <div  className="item">
                    <img src={ReactIcon} alt='ReactIcon' />
                    <h6>{'React'}</h6>
                  </div>
                  <div  className="item">
                    <img src={NextIcon} alt='NextIcon' />
                    <h6>{'Next'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Angular} alt='Angular' />
                    <h6>{'Angular'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Vue} alt='Vue' />
                    <h6>{'Vue'}</h6>
                  </div>
                  <div  className="item">
                    <img src={NodeIcon} alt='NodeIcon' />
                    <h6>{'Node'}</h6>
                  </div>
                  <div  className="item">
                    <img src={HTML5} alt='HTML5' />
                    <h6>{'HTML5'}</h6>
                  </div>
                 
                  <div  className="item">
                    <img src={MySql} alt='MySql' />
                    <h6>{'MySql'}</h6>
                  </div>
                  <div  className="item">
                    <img src={MongoDB} alt='MongoDB' />
                    <h6>{'MongoDB'}</h6>
                  </div>
                <div  className="item">
                    <img src={CSS} alt='CSS' />
                    <h6>{'CSS'}</h6>
                  </div>
                  <div  className="item">
                    <img src={BootStrap} alt='BootStrap' />
                    <h6>{'BootStrap'}</h6>
                  </div>
                  <div  className="item">
                    <img src={TailWind} alt='TailWind' />
                    <h6>{'TailWind'}</h6>
                  </div>
                  <div  className="item">
                    <img src={MaterialUI} alt='MaterialUI' />
                    <h6>{'MaterialUI'}</h6>
                  </div>
                  <div  className="item">
                    <img src={JQuery} alt='JQuery' />
                    <h6>{'JQuery'}</h6>
                  </div>
                  <div  className="item">
                    <img src={JS} alt='JS' />
                    <h6>{'JavaScript'}</h6>
                  </div>
                  <div  className="item">
                    <img src={TS} alt='TS' />
                    <h6>{'TypeScript'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Python} alt='Python' />
                    <h6>{'Python'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Atlasian} alt='Atlasian' />
                    <h6>{'Atlasian'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Jira} alt='Jira' />
                    <h6>{'Jira'}</h6>
                  </div>
                  <div  className="item">
                    <img src={AWS} alt='AWS' />
                    <h6>{'AWS'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Netlify} alt='Netlify' />
                    <h6>{'Netlify'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Docker} alt='Docker' />
                    <h6>{'Docker'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Heroku} alt='Heroku' />
                    <h6>{'Heroku'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Git} alt='Git' />
                    <h6>{'Git'}</h6>
                  </div>
                  <div  className="item">
                    <img src={GitLab} alt='GitLab' />
                    <h6>{'GitLab'}</h6>
                  </div>
                  <div  className="item">
                    <img src={Github} alt='Github' />
                    <h6>{'Github'}</h6>
                  </div>
                 
               
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        className="background-image-left"
        src="/static/media/color-sharp.d6409477.png"
        alt=""
      /> */}
    </section>

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
      <section class="portfolio section" id="portfolio">
            <div class="background-bg"></div>

            <div class="container">
                <div class="section-header">
                    <h3 class="title" data-title="My works">Portfolio</h3>
                </div>

                <div class="section-body">
                    <div class="grid">

                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="http://todos-app-frontend.s3-website-us-east-1.amazonaws.com/" target="_blank">
                                    <img src="./images/portfolio/todo.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Todos Management Application</h3>
                                            <h5 class="">Technologies used: React, Spring Boot, MySQL</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/Sales-Management-Web-App.git" target="_blank">
                                    <img src="./images/portfolio/sales.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Sales Management Web Application</h3>
                                            <h5 class="">Technologies used: NodeJS, ExpressJS, MongoDB
                                            </h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/Reddit-Search.git" target="_blank">
                                    <img src="./images/portfolio/reddit.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Reddit Search</h3>
                                            <h5 class="">Technologies used: HTML, CSS, JavaScript, Bootstrap, XML, AJAX,
                                                JQuery</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/Breakout-Ball-Game.git" target="_blank">
                                    <img src="./images/portfolio/breakout.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Breakout Ball Game</h3>
                                            <h5 class="">Technologies used: Java Core, Java Swing, Java AWT, Data
                                                Structures</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/Staff-Information-Management-System.git" target="_blank">
                                    <img src="./images/portfolio/staff.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Staff Information Management System</h3>
                                            <h5 class="">Technologies used: Java Core, Java Swing, Java AWT, Oracle
                                                RDBMS</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/MovieLand.git" target="_blank">
                                    <img src="./images/portfolio/movieland.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">MovieLand Website</h3>
                                            <h5 class="">Technologies Used: React.js, JavaScript, HTML, CSS</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/Adventure-Game.git" target="_blank">
                                    <img src="./images/portfolio/adventure.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Adventure Game</h3>
                                            <h5 class="">Technologies used: Java, Data Structures</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div> 
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://employer-engagement-event.vercel.app/#home" target="_blank">
                                    <img src="./images/portfolio/emp.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Employer Engagement Event Website</h3>
                                            <h5 class="">Technologies used: HTML, CSS, JavaScript, Bootstrap</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/GameTronix.git" target="_blank">
                                    <img src="./images/portfolio/gametronix.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">GameTronix Website</h3>
                                            <h5 class="">Technologies used: HTML, CSS, JavaScript</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/Starbucks-Menu-Application.git" target="_blank">
                                    <img src="./images/portfolio/starbucks.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Starbucks Menu Application</h3>
                                            <h5 class="">Technologies used: C#, .Net, Data Structures, Design Patterns
                                            </h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/Heart-Attack-Prediction-ML-Model.git" target="_blank">
                                    <img src="./images/portfolio/heart.jpg" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Heart Attack Prediction ML Model</h3>
                                            <h5 class="">Technologies used: Python, Scikit-learn, Matplotlib, Seaborn,
                                                Pandas, NumPy</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/Toronto-MCI-Analysis.git" target="_blank">
                                    <img src="./images/portfolio/mci.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Toronto MCI Analysis</h3>
                                            <h5 class="">Technologies used: HDFS, Hive, Hbase, Spark, Pig</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="gallery-image">
                                <a href="https://github.com/kartik-nain/Customer-Subscription-ML-Models.git" target="_blank">
                                    <img src="./images/portfolio/bank_model.png" alt="" class="" />
                                    <div class="img-overlay">
                                        <div class="img-description">
                                            <h3 class="">Customer Subscription ML Models</h3>
                                            <h5 class="">Technologies used: Python, Matplotlib, Seaborn, Pandas, NumPy, Weka</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </section>
    </main>
  );
};

export default AboutMe;
