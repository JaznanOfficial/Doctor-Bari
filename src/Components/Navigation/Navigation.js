import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./doctor-bari.jpg";
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="img not found" width='150px' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='fw-bolder fs-4 mx-3 px-0 text-primary nav-link-text'>Home</Nav.Link>
              <Nav.Link href="#link" className='fw-bolder fs-4 mx-3 px-0 text-primary nav-link-text'>Link</Nav.Link>
              <Nav.Link href="#link" className='fw-bolder fs-4 mx-3 px-0 text-primary nav-link-text'>Link</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;
