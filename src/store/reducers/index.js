import { combineReducers } from 'redux';
import authNanny from './auth';
import clients from './clients';
import nannies from './nannies';
import updatePassword from './changePassword';

const rootReducer = combineReducers({
  auth: authNanny,
  changePassword: updatePassword,
  clients,
  nannies,
});

export default rootReducer;
