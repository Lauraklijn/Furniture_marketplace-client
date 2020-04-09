import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { postProduct } from "../../store/user/actions";
//import AddImage from "../../components/Images/AddImage";

export default function MyHomepageForm() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setprice] = useState("");
  const [productInfo, setproductInfo] = useState("");
  const [city, setcity] = useState("");

  function submitForm(event) {
    event.preventDefault();

    // console.log(description, imageUrl, price, productInfo, city);
    dispatch(postProduct(description, imageUrl, price, productInfo, city));
  }

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Sell your furniture</h1>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={event => setDescription(event.target.value)}
          type="text"
          placeholder="Description of your product"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Product Information</Form.Label>
        <Form.Control
          value={productInfo}
          onChange={event => setproductInfo(event.target.value)}
          type="text"
          placeholder="Short description about your product"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          value={price}
          onChange={event => setprice(event.target.value)}
          type="text"
          placeholder="Euro"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          value={city}
          onChange={event => setcity(event.target.value)}
          type="text"
          placeholder="Fill in your city"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={event => setImageUrl(event.target.value)}
          type="text"
          placeholder="Please add a picture of the product"
          //handleImageState={this.handleImageState}
        />
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="outline-secondary" type="submit" onClick={submitForm}>
          Post!
        </Button>
      </Form.Group>
    </Form>
  );
}
