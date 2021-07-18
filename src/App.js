import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
// import Projects from "./pages/Projects/Projects";
// import Contact from "./pages/Contact/Contact";

// import './index.css';

function App() {
    return (
      <Router >
        <div>
          {/* <NavBar /> */}
          <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Home} />
            {/* <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} /> */}
          </div>
      </Router>
    );
  }

export default App;