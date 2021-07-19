import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./style.css";



function Footer() {
  return (
    <div className="footer pt-5">
      <span className="align-text-center">&copy; 2021 Jess Greene</span>
      <div className="p-1 size-md">
       <a
            href="tel:704-242-4748"
            alt="Phone #: 704-242-4748"
          >
           <FontAwesomeIcon icon={faMobileAlt} size="4x" />
          </a>
          <a
            href="mailto:jess.greene9@gmail.com"
            target="_blank"
            rel="noreferrer"
            alt="email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
           
          </a>
          <a
            href="https://github.com/jessgreene9"
            target="_blank"
            alt="github"
            rel="noreferrer"
          >
             <FontAwesomeIcon icon={faGithubSquare} size="4x" />

          </a>
          <a
            href="https://www.linkedin.com/in/jess-greene-241139211/"
            target="_blank"
            alt="linkedIn"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
        </div> 
  </div>
   
  );
}

export default Footer;