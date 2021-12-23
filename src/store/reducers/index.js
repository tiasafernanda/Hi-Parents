import { combineReducers } from 'redux';
import authNanny from './auth';
import clients from './clients';
import nannies from './nannies';
import updatePassword from './changePassword';
import childParent from './childParent';
import parent from './parent';
import getParent from './getParent';
import childActivityParent from './childActivityParent';
import getChild from './getChild';

const rootReducer = combineReducers({
  auth: authNanny,
  changePassword: updatePassword,
  clients,
  nannies,
  childParent,
  parent,
  getParent,
  getChild,
  childActivityParent,
});

export default rootReducer;
