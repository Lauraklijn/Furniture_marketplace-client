import { NEW_EMAIL } from "../email/actions";

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_EMAIL: {
      console.log("what is action payload in reducer", action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};
