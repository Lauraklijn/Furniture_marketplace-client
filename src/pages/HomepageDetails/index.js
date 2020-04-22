import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Homepage from "../../components/Homepage";
import Products from "../../components/Products";
import Container from "react-bootstrap/Container";
import { fetchHomepageById } from "../../store/homepageDetails/actions";
import { selectHomepageDetails } from "../../store/homepageDetails/selectors";

export default function HomepageDetails() {
  const { id } = useParams();
  const homepage = useSelector(selectHomepageDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomepageById(id));
  }, [dispatch, id]);
  console.log("fetchhomepage", fetchHomepageById(id));

  return (
    <>
      <Homepage
        id={homepage.id}
        title={homepage.title}
        description={homepage.description}
        //backgroundColor={homepage.backgroundColor}
        //color={homepage.color}
        showLink={false}
      />
      <Container>
        <Products homepage={homepage} />
      </Container>
    </>
  );
}
