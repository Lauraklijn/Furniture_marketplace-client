import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { createEmail } from "../../store/email/actions";
import EmailForm from "./EmailForm";

export default function Email() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createEmail(id));
  }, [dispatch, id]);

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
      <EmailForm
        text={"itemForm"}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        values={name}
      />
    </div>
  );
}
