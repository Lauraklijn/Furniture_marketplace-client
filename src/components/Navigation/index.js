import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./navigation.css";

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
      <p className="font-logo">My-your-our Furniture app.</p>
      <Nav className="ml-auto">
        <NavbarItem path="/" linkText="Home" />
        <svg
          className="bi bi-heart-fill"
          width="1em"
          height="2.5em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            clipRule="evenodd"
          />
        </svg>
        {token ? <NavbarItem path="/myhomepage" linkText="My page" /> : null}
        {loginLogoutControls}
      </Nav>
    </Navbar>
  );
}
