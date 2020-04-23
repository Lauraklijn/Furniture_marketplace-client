import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homepages from "./homepages/reducer";
import homepageDetails from "./homepageDetails/reducer";
import productDetails from "./productDetails/reducer";
import email from "./email/reducer";

export default combineReducers({
  appState,
  user,
  homepages,
  homepageDetails,
  productDetails,
  email
});
