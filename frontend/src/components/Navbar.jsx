import React , {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Link
} from 'react-router-dom';
import './Navbar.css';

export default class NavbarComp extends Component {
  render () {
  return (
    <div> 
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand className='navbar-brand-custom' href="#home">Risk Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
          <span className="navbar-toggler-icon">
            <span className="custom-line"></span> {/* Middle Line */}
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/home"} className="custom-nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"} className="custom-nav-link">About</Nav.Link>
            <Nav.Link as={Link} to={"/contact"} className="custom-nav-link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
  }
};

