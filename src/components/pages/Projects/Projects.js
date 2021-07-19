import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projects from "./index";
import Footer from "../../Footer/Footer";
import projects from "../../../utils/index";
import "./style.css";

function Portfolio() {
  return (
    <Container fluid="md">
      <h2 className="m-2 page-header">Projects</h2>
      <div fluid="md" className="portfolio p-1"><Row> 
        {projects.map((project) => (
          <Col key={project.title} ><Projects
            title={project.title}
            image={project.image}
            repo={project.repo}
            deploy={project.deployedSite}
          
          ></Projects></Col>
        ))}
      </Row>
      </div>
      <Footer />
    </Container>
  );
}

export default Portfolio;
