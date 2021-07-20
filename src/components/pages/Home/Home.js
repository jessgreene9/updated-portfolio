import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import picture from "../../../assets/images/Headshot.jpg";
import Container from "react-bootstrap/Container";
import Footer from "../../Footer/Footer";
import "./style.css";

function About() {
  return (
    <>
        <header className="hero">
          <div className="inner">
            <h1 className="name text-center">Jess Greene</h1>
          </div>
          <h3 className="text-center">Coding Boot Camp Student </h3>
        </header>
      <Container fluid="md" className="home m-3">
        <h2 className="text-left">About Me</h2>
        <div className="about-me">
          <p>
            <img
              src={picture}
              alt="Jess Greene"
              className="bio m-4 pull-right"
            />
          </p>
          <br></br>
          <p>
            I currently live in Wilmington, North Carolina. I graduated from the
            University of North Carolina at Wilmington in 2007 with an English
            degree and a Teacher's License. Over the years, I have discovered
            that I am incredibly interested in what goes on behind the scenes
            with websites and applications. This has led me to enrolling in the
            Coding Boot Camp program at the University of North Carolina at
            Charlotte.
          </p>
          <p>
            I intend to use the skills that I have obtained in my various roles
            to assist me in my venture to change my career path into something I
            truly love and enjoy. My goal is to continue learning after the
            program has completed and to build on skills learned in this course
            to create a new and better future for myself.
          </p>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default About;
