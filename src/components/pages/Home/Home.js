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
        <p>
          <img src={picture} alt="Jess Greene" className="bio m-4 pull-right" />
        </p>
        <h2 className="text-left">About Me</h2>
        <div className="about-me">
          <br></br>

          <p>
            I am a Full Stack Web Developer based in Wilmington, NC. I received
            Certification through University of North Carolina at Charlotte
            Coding Bootcamp. I am a natural problem solver and love challenging
            myself to continue to learn and improve on my existing skill sets.
            After several years of teaching myself different computer skills as
            an Operations Manager, I decided to truly expand my knowledge by
            enrolling in the immersive experience of the boot camp.
          </p>
          <p>
            I excel in collaboration with others, as well as working on my own
            to meet deadlines. My goal is to continue pushing myself and to
            build on skills learned in this course to create a new and better
            future for myself.
          </p>
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default About;
