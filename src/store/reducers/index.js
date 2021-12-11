import { combineReducers } from 'redux';
import authNanny from './auth';
import clients from './clients';
import nannies from './nannies';

const rootReducer = combineReducers({
  auth: authNanny,
  clients,
  nannies,
});

export default rootReducer;
