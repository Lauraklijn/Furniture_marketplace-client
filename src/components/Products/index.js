import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Navigation/navigation.css";

export default function Products(props) {
  console.log("What is props products", props.homepage.products);
  return (
    <div>
      <CardColumns className="mt-5">
        {props.homepage.products.map(product => {
          return (
            <Card
              style={{ width: "20rem" }}
              border="dark"
              //style={{ width: "18rem" }}
              key={product.id}

              //className="mr-3"
            >
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body width={100} height={100}>
                <Card.Title className="font-logo">
                  {product.description}
                </Card.Title>
                <Card.Text className="font-italic">
                  <a>€ </a>
                  {product.price}
                </Card.Text>

                <Link to={`/products/${product.id}`}>
                  <Button variant="outline-secondary">
                    See product details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </div>
  );
}

//<Card.Text>{product.productInfo}</Card.Text>
//<Card.Text>{product.city}</Card.Text>
