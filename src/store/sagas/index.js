import { all } from 'redux-saga/effects';
import { watchLoginNanny } from './auth';
import { watchRegisterNanny } from './auth';
import { watchChangePassword } from './changePassword';
import { watchGetActiveClients, watchGetClientDetail, watchGetClients } from './clients';
import {
  watchGetActiveNannies,
  watchGetAppointment,
  watchGetChildActivity,
  watchGetNannies,
} from './nannies';

export default function* rootSaga() {
<<<<<<< HEAD
  yield all([watchLoginNanny(), watchRegisterNanny(), watchChangePassword(), watchGetClients(), watchGetClientDetail(), watchGetActiveClients(), watchGetNannies(), watchGetActiveNannies(), watchGetAppointment()]);
=======
  yield all([
    watchLoginNanny(),
    watchRegisterNanny(),
    watchChangePassword(),
    watchGetClients(),
    watchGetClientDetail(),
    watchGetActiveClients(),
    watchGetNannies(),
    watchGetActiveNannies(),
    watchGetAppointment(),
    watchGetChildActivity(),
  ]);
>>>>>>> 1ff5de4d7ad735f75446f666aa22388190915132
}
