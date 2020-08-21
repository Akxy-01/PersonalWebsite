import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      title: 'Akshatha Sudhir',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' }
      ],
      home: {
        title: 'Be Relentless',
        subtitle: 'Projects that make a difference',
        text: 'Checkout my Projects below'
      },
      about: {
        title: 'About Me',
      }
    }
  }
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" style={{fontWeight: 'bold', fontSize: '20px'}}>
            <Navbar.Brand>Akshatha Sudhir</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
