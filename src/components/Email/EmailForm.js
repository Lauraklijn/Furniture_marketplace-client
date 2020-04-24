import React, { useState } from "react";

import { Form, Button, Col } from "react-bootstrap";
import "./Emailform.css";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = e => {
    e.preventDefault();

    if (e.target.id === "name") {
      setName(e.target.value);
    } else {
      setMessage(e.target.value);
      console.log("handleclick?", handleClick);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const dataToSubmit = {
    name: name,
    message: message
  };

  return (
    <div>
      <header>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formGroupName">
            <Form.Row>
              <Form.Label>Name</Form.Label>

              <Form.Control
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleClick}
              />
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Row>
              <Form.Label>Message</Form.Label>

              <Form.Control
                as="textarea"
                rows="3"
                type="text"
                placeholder="Large text"
                id="message"
                placeholder="Type here your message to the seller"
                value={message}
                onChange={handleClick}
              />
            </Form.Row>
          </Form.Group>

          <Button variant="secondary" onClick={handleSubmit}>
            Send Email
          </Button>
        </Form>
        {/* <Form onSubmit={handleSubmit}>
          <input
            id="name"
            placeholder="Name"
            value={name}
            onChange={handleClick}
          />
          <input
            id="message"
            placeholder="Message"
            value={message}
            onChange={handleClick}
          />
          <Button onClick={handleSubmit}>Send Email</Button>
        </Form> */}
      </header>
    </div>
  );
}
