import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";

//import { useDispatch } from "react-redux";

export default function Products(props) {
  // const dispatch = useDispatch();

  return (
    <div>
      <CardColumns className="mt-5">
        {props.homepage.products.map(product => {
          return (
            <Card border="dark" style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.description}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.productInfo}</Card.Text>
                <Card.Text>{product.city}</Card.Text>
                <Link to={`/productdetails/${props.id}`}>
                  <Button variant="outline-secondary">See details</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </div>
  );
}
