import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Products from "../../components/Products";
import Container from "react-bootstrap/Container";
import { fetchProductById } from "../../store/productDetails/actions";
import { selectProductDetails } from "../../store/productDetails/selectors";

export default function ProductDetails() {
  const { id } = useParams();
  const product = useSelector(selectProductDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  console.log("fetchProducts", fetchProductById(id));

  return (
    <Container>
      <Products
        id={product.id}
        description={product.description}
        price={product.price}
        productinfo={product.productInfo}
        city={product.city}
      />
    </Container>
  );
}

// import React from "react";

// import Card from "react-bootstrap/Card";

// import { CardColumns } from "react-bootstrap";
// import { Form, Button, Col } from "react-bootstrap";
// //import { fetchProductById } from "../../store/productDetails/actions";

// //import Products from "../../components/Products/index";

// //import { useDispatch } from "react-redux";

// export default function ProductDetails(props) {
//   console.log("What is props bij product details", props);
//   // const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Welcome</h1>
//       <CardColumns className="mt-5">
//         <Card border="dark" style={{ width: "18rem" }}>
//           <Card.Img variant="top" />
//           <Card.Body>
//             <Card.Title>test</Card.Title>
//             <Card.Text>test</Card.Text>
//             <Card.Text>test</Card.Text>
//             <Card.Text>test</Card.Text>
//           </Card.Body>
//         </Card>
//       </CardColumns>
//       <CardColumns className="mt-5">
//         <Card border="dark" style={{ width: "18rem" }}>
//           Send a e-mail to gebruiker
//           <Form.Row>
//             <Form.Label column="sm" lg={4}>
//               Name:
//             </Form.Label>
//             <Col>
//               <Form.Control size="sm" type="text" placeholder="Name" />
//             </Col>
//           </Form.Row>
//           <br />
//           <Form.Group>
//             <Form.Row>
//               <Form.Label column="lg" lg={4}>
//                 Message:
//               </Form.Label>
//               <Col>
//                 <Form.Control size="lg" type="text" placeholder="Message" />
//               </Col>
//             </Form.Row>

//             <br />
//             <Button>Send</Button>
//           </Form.Group>
//         </Card>
//       </CardColumns>
//     </div>
//   );
// }
