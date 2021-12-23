import { all } from 'redux-saga/effects';
import { watchLoginNanny } from './auth';
import { watchRegisterNanny } from './auth';
import { watchChangePassword } from './changePassword';
import { watchGetActiveClients, watchGetClientDetail, watchUpdateClientAccepted, watchGetClients, watchGetClientAccepted } from './clients';
import { watchGetActiveNannies, watchGetAppointment, watchGetChildActivity, watchGetNannies } from './nannies';

export default function* rootSaga() {
  yield all([
    watchLoginNanny(),
    watchRegisterNanny(),
    watchChangePassword(),
    watchGetClients(),
    watchGetClientDetail(),
    watchUpdateClientAccepted(),
    watchGetActiveClients(),
    watchGetClientAccepted(),
    watchGetNannies(),
    watchGetActiveNannies(),
    watchGetAppointment(),
    watchGetChildActivity(),
  ]);
}
