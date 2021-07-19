import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contact/Contact";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
