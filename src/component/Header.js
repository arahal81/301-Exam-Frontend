import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Home Page</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home Page</Link>
          <Link to="/fav">Favorite</Link>
        </Nav>
      </Navbar>
    );
  }
}
