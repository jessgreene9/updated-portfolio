import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faUserCircle,
  faEnvelope,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import resume from "../../assets/resume/Jess Greene RESUME2.0 2021.pdf";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="md" bg="secondary" >
      <Link to="/"></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
            About
          </Link>

          <Link
            to="/projects"
            className={
              location.pathname === "/projects" ? "nav-link active" : "nav-link"
            }
          >
            <FontAwesomeIcon icon={faProjectDiagram} size="2x" />
            Projects
          </Link>

          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            Contact
          </Link>

          <a
            className={
              location.pathname === "/resume" ? "nav-link active" : "nav-link"
            }
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFileDownload} size="2x" />
            Resume
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
