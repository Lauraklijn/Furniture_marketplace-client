import React from "react";

import { Link } from "react-router-dom";
import Media from "react-bootstrap/Media";

export default function Homepage(props) {
  console.log("props homepage?", props);
  return (
    //     <Jumbotron
    //       style={{
    //         backgroundColor: "rgba(255, 228, 228, 0.603)"
    //       }}
    //     >
    //       <h3>{props.title}</h3>
    //       <p>{props.description}</p>
    //       <img
    //         src={props.image}
    //         width="100"
    //         height="100"
    //         className="d-inline-block align-left"
    //         alt="Userpage image"
    //       />

    //       {props.showLink ? (
    //         <Link to={`/homepages/${props.id}`}>
    //           <Button variant="outline-secondary">Visit page</Button>
    //         </Link>
    //       ) : null}
    //     </Jumbotron>
    //   );
    // }

    <ul
      className="list-unstyled"
      className="border border-secondary"
      style={{
        backgroundColor: "rgba(255, 228, 228, 0.603)"
      }}
    >
      <Media as="li">
        <img
          width={100}
          height={100}
          className="mr-3"
          //class="rounded-circle"
          src={props.image}
          alt="Generic placeholder"
        />
        <Media.Body>
          {props.showLink ? (
            <Link className="text-secondary" to={`/homepages/${props.id}`}>
              <h5 className="font-weight-bold">{props.title}</h5>
            </Link>
          ) : null}
          <br />

          <p className="font-italic" className="text-sm-left">
            {props.description}
          </p>
        </Media.Body>
      </Media>
    </ul>
  );
}
