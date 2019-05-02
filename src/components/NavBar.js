import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



class NavBar extends React.Component {
    render() {
      return (
        <Navbar collapseOnSelect expand="false" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Download Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
    }
  }

  export default NavBar