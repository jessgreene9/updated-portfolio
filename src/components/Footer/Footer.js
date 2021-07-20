import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

function Footer() {
  return (
    <div className="footer pt-5">
      <div className="p-1 size-md">
        <a
          href="mailto:jess.greene9@gmail.com"
          target="_blank"
          rel="noreferrer"
          alt="email"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="4x"
            style={{ color: "white" }}
            className="icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jess-greene-241139211/"
          target="_blank"
          alt="linkedIn"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="4x"
            style={{ color: "white" }}
            className="icon"
          />
        </a>
        <a
          href="https://github.com/jessgreene9"
          target="_blank"
          alt="github"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithubSquare}
            size="4x"
            style={{ color: "white" }}
            className="icon"
          />
        </a>
      </div>
      <span className="align-text-center font-weight-bold">
        &copy; 2021 Jess Greene
      </span>
    </div>
  );
}

export default Footer;
