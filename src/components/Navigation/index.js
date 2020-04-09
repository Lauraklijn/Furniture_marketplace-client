import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" variant="light">
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
        <NavbarItem path="/" linkText="Home" />
        {token ? (
          <NavbarItem path="/myhomepage" linkText="My Marketplace" />
        ) : null}
        {loginLogoutControls}
      </Nav>
    </Navbar>
  );
}
