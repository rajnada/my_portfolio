import React from "react";

const Header = () => {
  return (
    <header>
      <div className="style_container">
        {/* <nav id="navbar" className="bg-transparent">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="style_container">
            <ul>
              <li>
                <a href="#home">Home </a>
              </li>

              <li>
                <a href="#aboutme">About Me </a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects </a>
              </li>

              <li>
                <a href="#contact">Contact </a>
              </li>
            </ul>
          </div>
        </nav> */}
        <div id="home" className="topInfo">
          <div className="topLeftInfo">
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-text user_img"
              type="button"
            >
              <span className="MuiButton-label"></span>
              <span className="MuiTouchRipple-root"></span>
            </button>
          </div>
          <div className="topRightInfo">
            <div>
              <span className="aboutmeTxt">A LITTLE BIT ABOUT ME</span>
              <span>
                <div className="typist">
                  <div className="user-info">
                    <span id="user-name">
                      Raj Nada <span className="cursor_with_delay"></span>
                    </span>
                  </div>
                </div>
              </span>
              <p className="title">Full Stack Web Developer</p>
              <p>[ React | JavaScript | Node | MongoDB ]</p>
            </div>
            <div>
              <dl>
                <dt>Email:</dt>

                <dd>rajnada1915@gmail.com</dd>
                <dt>Location:</dt>
                <dd>Etobicoke,Toronto, CANADA</dd>
              </dl>
            </div>
            <div className="social">
              <span>
                <a
                  href="https://www.linkedin.com/in/raj-nada-26b5ab109/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/rajnada"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github-square"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://join.skype.com/invite/t6sbWAiQDrc2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-skype"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/nada.raj.9081/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook-square"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://api.whatsapp.com/send?phone=+14379853092&amp;text=Hey Raj, Good Morning!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-whatsapp"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
