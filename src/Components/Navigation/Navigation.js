import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./doctor-bari.jpg";
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
        <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="img not found" width='150px' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-bar-custom">
              <Nav.Link href="#home" className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Home</Nav.Link>
              <Nav.Link href="#link" className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Aboute Us</Nav.Link>
              <Nav.Link href="#link" className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Private Doctor</Nav.Link>
              <Nav.Link href="#link" className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Log In</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;
