import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className="d-flex ml-5">
      <Nav.Item style={{ padding: ".5rem 1rem" }}>
        {" "}
        Logged in as: <a>{user.name} </a>
      </Nav.Item>
      <Button
        className="ml-auto"
        variant="secondary"
        size="sm"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
