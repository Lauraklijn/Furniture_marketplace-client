import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        {" "}
        <img
          src="https://cdn.dribbble.com/users/17577/screenshots/1478281/furniture.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Userpage"
        />{" "}
      </Navbar.Brand>

      <Nav className="mr-auto">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/test">Test</NavLink>
        <NavLink href="/signup">Signup</NavLink>
        <NavLink href="/login">Login</NavLink>
        <Button>Logout</Button>
      </Nav>
    </Navbar>
  );
}
