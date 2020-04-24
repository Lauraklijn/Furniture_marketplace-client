import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { fetchProductById } from "../../store/productDetails/actions";
import { selectProductDetails } from "../../store/productDetails/selectors";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import EmailContainer from "../../components/Email/index";
import Col from "react-bootstrap/Col";
import { CardColumns } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import "../../components/Navigation/navigation.css";

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
        <Row>
          <Col className="mt-5" xs={12} md={8}>
            <CardColumns>
              <Card className="align-middle" style={{ width: "40rem" }}>
                <Card.Text
                  className="mt-2 border border-light"
                  style={{
                    backgroundColor: "rgba(255, 228, 228, 0.603)"
                  }}
                >
                  <h4 className="font-logo"> {product.description}</h4>{" "}
                </Card.Text>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <div className="text-sm-left">
                    <svg
                      className="bi bi-geo-alt"
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
                  </div>

                  <Card.Text>
                    <div className="font-weight-bold">
                      Product informatie: <br /> <br />
                    </div>
                    <div className="font-italic">{product.productInfo}</div>
                    <br /> <br />
                    <ListGroupItem
                      style={{
                        backgroundColor: "hsl(20, 2%, 74%)"
                      }}
                    >
                      Price:<a> € </a>
                      {product.price}
                    </ListGroupItem>{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardColumns>
          </Col>
          <br />

          <Col className="mt-5" xs={6} md={4}>
            <h3>Interested in the product? Send me a message!</h3>
            <br />
            <EmailContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
}
