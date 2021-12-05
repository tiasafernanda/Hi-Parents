import { combineReducers } from "redux";
import authNanny from "./auth";

const rootReducer = combineReducers({
  auth: authNanny,
  
});

export default rootReducer;