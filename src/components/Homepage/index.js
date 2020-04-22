import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Homepage(props) {
  console.log("props homepage?", props);
  return (
    <Jumbotron
      style={{
        backgroundColor: "rgba(255, 228, 228, 0.603)"
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img
        src={props.image}
        width="100"
        height="100"
        className="d-inline-block align-left"
        alt="Userpage image"
      />

      {props.showLink ? (
        <Link to={`/homepages/${props.id}`}>
          <Button variant="outline-secondary">Visit page</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
