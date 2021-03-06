import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

function Contact() {
  return (
    <Container className="contact">
      <h2 className="header">Get in Touch!</h2>
      <div className="card-box">
        <div className="card p-1 centered">
          <div className="card-title">Contact Me:</div>

          <ul className="list-group">
            <li className="list-group-item">
              <FontAwesomeIcon icon={faEnvelope} /> :
              <a
                href="mailto: jess.greene9@gmail.com"
                target="_blank"
                rel="noreferrer"
                alt="email"
              >
                <span className="p-2"> jess.greene9@gmail.com</span>
              </a>
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faGithubSquare} /> :
              <a
                href="https://github.com/jessgreene9"
                target="_blank"
                rel="noreferrer"
                alt="Github"
              >
                <span className="p-2"> Jess Greene Github</span>
              </a>
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faLinkedin} /> :
              <a
                href="https://www.linkedin.com/in/jess-greene-241139211/"
                target="_blank"
                alt="linkedIn"
                rel="noreferrer"
              >
                <span className="p-2"> LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Contact;
