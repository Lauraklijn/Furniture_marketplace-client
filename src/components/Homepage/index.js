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

      <p>{props.imageUrl}</p>

      {props.showLink ? (
        <Link to={`/homepages/${props.id}`}>
          <Button variant="outline-secondary">Visit page</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
