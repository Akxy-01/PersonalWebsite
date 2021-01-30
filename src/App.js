import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactsPage from './Pages/ContactsPage';

class App extends React.Component {
  
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Container className="p-0" fluid={true}>
          <Navbar className="navbar" bg="transparent" expand="lg">
            <Navbar.Brand>AKSHATHA SUDHIR</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/">HOME</Link>
                <Link className="nav-link" to="/about">ABOUT</Link>
                <Link className="nav-link" to="/resume">RESUME</Link>
                <Link className="nav-link" to="/projects">PROJECTS</Link>
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container fluid={true} style={{backgroundColor: '#f4f4f4', height:'100%!important', position:'absolute', minHeight: '100%'}}>
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/about" exact render={() => <AboutPage />} />
            <Route path="/resume" exact render={() => <ResumePage />} />
            <Route path="/projects" exact render={() => <ProjectsPage />} />
            <Route path="/contact" exact render={() => <ContactsPage />} />
          </Container>
          

         
        </Container>
      </Router>
    );
  }
}

export default App;
