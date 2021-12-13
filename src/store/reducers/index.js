import { combineReducers } from "redux";
import authNanny from "./auth";
import updatePassword from "./changePassword";

const rootReducer = combineReducers({
  auth: authNanny,
  changePassword: updatePassword,
  
});

export default rootReducer;