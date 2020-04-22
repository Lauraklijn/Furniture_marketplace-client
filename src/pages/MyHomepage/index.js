import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MyHomepageForm from "./MyHomepageForm";

import ProductForm from "./Productform";
import Homepage from "../../components/Homepage";

import Products from "../../components/Products";

export default function MyHomepage() {
  const { token, homepage, id } = useSelector(selectUser);
  const [editMode, setEditMode] = useState(false);
  const [postProductMode, setpostProductMode] = useState(false);
  const history = useHistory();

  if (token === null) {
    history.push("/");
  }

  if (homepage === null) {
    return <Loading />;
  }

  const displayButtons =
    id === homepage.userId && editMode === false && postProductMode === false;

  return (
    <>
      <Homepage
        id={homepage.id}
        title={homepage.title}
        description={homepage.description}
        image={homepage.imageUrl}
        showLink={false}
      />
      <Container>
        {displayButtons ? (
          <Card>
            <Button variant="secondary" onClick={() => setEditMode(true)}>
              Edit my page
            </Button>
            <Button
              variant="secondary"
              onClick={() => setpostProductMode(true)}
              className="mt-2"
            >
              Create a product to sell
            </Button>
          </Card>
        ) : null}

        {editMode ? (
          <Card>
            <MyHomepageForm />
          </Card>
        ) : null}

        {postProductMode ? (
          <Card>
            <ProductForm />
          </Card>
        ) : null}

        <Products homepage={homepage} />
      </Container>
    </>
  );
}
