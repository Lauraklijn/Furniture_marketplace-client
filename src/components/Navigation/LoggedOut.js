import React from "react";
import NavbarItem from "./NavbarItem";

export default function LoggedOut() {
  return (
    <>
      <NavbarItem className="ml-auto" path="/login" linkText="Login" />
    </>
  );
}
