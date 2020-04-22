import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { fetchProductById } from "../../store/productDetails/actions";
import { selectProductDetails } from "../../store/productDetails/selectors";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

export default function ProductDetails() {
  const { id } = useParams();
  const product = useSelector(selectProductDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <>
      <Container>
        <Card className="mt-5">
          <Card.Text> {product.description} </Card.Text>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <svg
              class="bi bi-geo-alt"
              width="2em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            {product.city}
            <br />
            <br />
            <Card.Text>
              Product informatie: <br />
              {product.productInfo}
              <ListGroupItem>Vraagprijs: €{product.price}</ListGroupItem>{" "}
            </Card.Text>
          </Card.Body>
          <Button variant="secondary">Stuur bericht naar verkoper</Button>
        </Card>
        <br />
      </Container>
    </>
  );
}
