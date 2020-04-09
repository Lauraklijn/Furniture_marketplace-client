import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Homepage(props) {
  return (
    <Jumbotron
      style={{
        //backgroundColor: props.backgroundColor,
        backgroundColor: "rgba(255, 228, 228, 0.603)",
        color: props.color
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      {props.showLink ? (
        <Link to={`/homepages/${props.id}`}>
          <Button variant="outline-secondary">Visit page</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
