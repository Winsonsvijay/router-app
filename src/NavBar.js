import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand><Link to='/'>React-Bootstrap</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                <NavDropdown title="Users" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/users">Users </Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/users/student">Student </Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/users/faculty">Faculty</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link> <Link to="/about">About</Link></Nav.Link>
                <Nav.Link ><Link to="/service">Service</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    )
  }
}
