import { apiUrl } from "../../configuratie/constants";
import axios from "axios";
import { selectToken, selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const HOMEPAGE_UPDATED = "HOMEPAGE_UPDATED";
export const LOG_OUT = "LOG_OUT";
export const PRODUCT_POST_SUCCESS = "PRODUCT_POST_SUCCES";

const loginSuccess = userWithToken => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken
  };
};

const tokenStillValid = userWithoutToken => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken
});

export const logOut = () => ({ type: LOG_OUT });

export const homepageUpdated = homepage => ({
  type: HOMEPAGE_UPDATED,
  payload: homepage
});

// ---Product

export const productPostSuccess = product => ({
  type: PRODUCT_POST_SUCCESS,
  payload: product
});

// export const storyDeleteSuccess = storyId => ({
//   type: STORY_DELETE_SUCCESS,
//   payload: storyId
// });

export const signUp = (name, email, password, imageUrl) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
        imageUrl
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        // console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        // console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      // console.log(error.response.message);

      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const updateMyPage = (title, description, backgroundColor, color) => {
  return async (dispatch, getState) => {
    const { homepage, token } = selectUser(getState());
    dispatch(appLoading());

    const response = await axios.patch(
      `${apiUrl}/homepages/${homepage.id}`,
      {
        title,
        description,
        backgroundColor,
        color
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    // console.log(response);

    dispatch(
      showMessageWithTimeout("success", false, "update successfull", 3000)
    );
    dispatch(homepageUpdated(response.data.homepage));
    dispatch(appDoneLoading());
  };
};

// ------- product post
export const postProduct = (
  description,
  imageUrl,
  price,
  productInfo,
  city
) => {
  return async (dispatch, getState) => {
    const { homepage, token } = selectUser(getState());
    console.log(
      "Check productPost",
      description,
      imageUrl,
      price,
      productInfo,
      city
    );
    dispatch(appLoading());

    const response = await axios.post(
      `${apiUrl}/homepages/${homepage.id}/products`,
      {
        description,
        imageUrl,
        price,
        productInfo,
        city
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // console.log("Yep!", response);
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(productPostSuccess(response.data.product));
    dispatch(appDoneLoading());
  };
};
