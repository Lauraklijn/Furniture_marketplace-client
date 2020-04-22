import axios from "axios";
import { apiUrl } from "../../configuratie/constants";

export const PRODUCT_DETAILS_FETCHED = "PRODUCT_DETAILS_FETCHED";

const productDetailsFetched = product => ({
  type: PRODUCT_DETAILS_FETCHED,
  payload: product
});

export const fetchProductById = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${apiUrl}/homepages/${id}/products/${id}`
    );
    console.log("PRODUCTdetials fetched", response.data.product);
    dispatch(productDetailsFetched(response.data.product));
  };
};
