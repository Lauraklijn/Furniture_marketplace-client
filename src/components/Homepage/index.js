import React from "react";

import { Link } from "react-router-dom";
import Media from "react-bootstrap/Media";
import Card from "react-bootstrap/Card";

export default function Homepage(props) {
  console.log("props homepage?", props);
  return (
    <ul
      className="list-unstyled"
      className="border border-secondary"
      style={{
        backgroundColor: "rgba(255, 228, 228, 0.603)"
      }}
    >
      <Media as="li">
        <img
          width={160}
          height={160}
          className="mr-3"
          //class="rounded-circle"
          src={props.image}
          alt="Generic placeholder"
        />
        <Media.Body>
          <Link className="text-dark " to={`/homepages/${props.id}`}>
            <div className="font-weight-bold mt-2 text-sm-left">
              {props.title}
            </div>
          </Link>

          <p className="text-sm-left mt-1 font-italic">{props.description}</p>
        </Media.Body>
      </Media>
    </ul>
  );
}
