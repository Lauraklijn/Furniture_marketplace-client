import { PRODUCT_DETAILS_FETCHED } from "./actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_DETAILS_FETCHED:
      console.log("What is state in reducer?", state);
      return { ...state, ...payload };

    default:
      return state;
  }
};
