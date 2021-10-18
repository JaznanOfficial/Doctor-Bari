import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Link to='/home' className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Home</Link>
              <Link to='/about' className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Aboute Us</Link>
              <Link to='./private-doctor' className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Private Doctor</Link>
              <Link to='./log-in' className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Log In</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;
