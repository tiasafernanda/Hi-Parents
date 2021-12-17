import { all } from 'redux-saga/effects';
import { watchLoginNanny } from './auth';
import { watchRegisterNanny } from './auth';
import { watchChangePassword } from './changePassword';
import {
  watchGetActiveClients,
  watchGetClientDetail,
  watchGetClients,
  watchGetMainClients,
} from './clients';
import {
  watchGetActiveNannies,
  watchGetAppointment,
  watchGetChildActivity,
  watchGetNannies,
} from './nannies';

export default function* rootSaga() {
  yield all([
    watchLoginNanny(),
    watchRegisterNanny(),
    watchChangePassword(),
    watchGetMainClients(),
    watchGetClients(),
    watchGetClientDetail(),
    watchGetActiveClients(),
    watchGetNannies(),
    watchGetActiveNannies(),
    watchGetAppointment(),
    watchGetChildActivity(),
  ]);
}
