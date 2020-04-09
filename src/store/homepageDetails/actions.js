import axios from "axios";
import { apiUrl } from "../../configuratie/constants";

export const HOMEPAGE_DETAILS_FETCHED = "HOMEPAGE_DETAILS_FETCHED";

const homepageDetailsFetched = homepage => ({
  type: HOMEPAGE_DETAILS_FETCHED,
  payload: homepage
});

export const fetchHomepageById = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepages/${id}`);
    console.log("test homepage", response);
    dispatch(homepageDetailsFetched(response.data.homepage));
  };
};
