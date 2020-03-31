import { combineReducers } from "redux";
import appState from "./appState/appState-reducer";
import userReducer from "./user/user-reducer";

export default combineReducers({
  appState,
  userReducer
});
