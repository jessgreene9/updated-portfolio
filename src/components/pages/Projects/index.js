import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

function Projects(props) {
  return (
    <div className=" p-4">
      <div
        className="card projects"
        style={{ border: "black solid 1px" }}
      >
        <img className="card-img-top p-2" src={props.image} alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
        <div className="card-body text-center">
          <a href={props.deploy}  target="_blank" rel="noreferrer">
            Launch Website <FontAwesomeIcon icon={faRocket} />
          </a>
          <a href={props.repo} target="_blank" rel="noreferrer">
            Github Repo <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
