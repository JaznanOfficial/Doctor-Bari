import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import logo from "./doctor-bari.jpg";
import './Navigation.css';

const Navigation = () => {
  const { user,logOut } = useFirebase();
    return (
        <div>
        <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="img not found" width='150px' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light nav-toggle' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-bar-custom">
              <Link to='/home' className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Home</Link>
              <Link to='/about' className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Aboute Us</Link>
              <Link to='./private-doctor' className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Private Doctor</Link>
                {
                  user.email ?
                   <div> &nbsp; &nbsp; &nbsp;<h4 className='text-light d-lg-inline-block'><i class="far fa-user text-light"></i> {user.displayName} <button onClick={logOut} type="button" class="btn btn-outline-light">Log Out</button></h4></div>
                    : <Link Link to='./login' className='fw-bolder fs-4 mx-3 px-0 text-light nav-link-text'>Log In</Link>
                }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;
