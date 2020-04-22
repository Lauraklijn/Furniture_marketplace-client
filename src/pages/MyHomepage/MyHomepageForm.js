import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectMyHomepage } from "../../store/user/selectors";
import { updateMyPage } from "../../store/user/actions";

export default function MyHomepageForm() {
  const homepage = useSelector(selectMyHomepage);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(homepage.title);
  const [description, setDescription] = useState(homepage.description || "");
  const [imageUrl, setimageUrl] = useState(homepage.imageUrl);

  function submitForm(event) {
    event.preventDefault();

    console.log("Form homepage?", title, description, imageUrl);

    dispatch(updateMyPage(title, description, imageUrl));
  }
  return (
    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h1 className="mt-5 mb-5">Edit your page</h1>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Title of your page"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={event => setDescription(event.target.value)}
          type="text"
          placeholder="Description about the product"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={event => setimageUrl(event.target.value)}
          type="tekst"
          placeholder="Add image"
        />
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="outline-secondary" type="submit" onClick={submitForm}>
          Save changes
        </Button>
      </Form.Group>
    </Form>
  );
}
