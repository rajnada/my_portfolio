import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Footer = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5xzn0a9",
        "template_yh5zcfo",
        form.current,
        "TOvJEWQlK5xUHHTdj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();
  return (
    <footer id="contact">
      <div className="text-zone">
        <h1>
          <span>
            <span className="text-animate-hover">C</span>
            <span className="text-animate-hover">o</span>
            <span className="text-animate-hover">n</span>
            <span className="text-animate-hover">t</span>
            <span className="text-animate-hover">a</span>
            <span className="text-animate-hover">c</span>
            <span className="text-animate-hover">t</span>
            <span className="text-animate-hover"> </span>
            <span className="text-animate-hover">m</span>
            <span className="text-animate-hover">e</span>
          </span>
        </h1>
        <p>
          I am interested in freelance opportunities - especially ambitious or
          large projects. However, if you have other request or question, don't
          hesitate to contact me using below form either.
        </p>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="name"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* <!-- email --> */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                id="email_body"
                placeholder="Messege"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
