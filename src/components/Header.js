import React from "react";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Contest Record</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link target="_blank" href="https://ningenme.net/">ningenMe.net</Nav.Link>
          <NavDropdown title="GitHub" id="basic-nav-dropdown">
            <NavDropdown.Item target="_blank" href="https://github.com/ningenMe/contest-record-front">ui</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://github.com/ningenMe/ningenme-net-back">api</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://github.com/ningenMe/ningenme-net-batch">batch</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}