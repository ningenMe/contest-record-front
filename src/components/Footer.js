import React from "react";
import { Navbar } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">&copy; 2020　Furuta Taishi</Navbar.Brand>
    </Navbar>
    );
  }
}