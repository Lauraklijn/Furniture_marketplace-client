import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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

  return (
    <>
      <Container>
        <li>Description:{product.description} </li>
        <li>Price:{product.price}</li>
        <li>Productinfo:{product.productInfo}</li>
        <li> City:{product.city}</li>
      </Container>
    </>
  );
}
