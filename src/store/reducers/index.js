import { combineReducers } from 'redux';
import authNanny from './auth';
import nannyListReducer from './nannyList';

const rootReducer = combineReducers({
  auth: authNanny,
  nannyListReducer,
});

export default rootReducer;
