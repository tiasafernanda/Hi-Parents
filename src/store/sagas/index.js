import { all } from 'redux-saga/effects';
import { watchLoginNanny } from './auth';
import { watchRegisterNanny } from './auth';
import { watchChangePassword } from './changePassword';
// import { watchDashboarChild } from './child';
import { watchGetActiveClients, watchGetClientDetail, watchGetClients } from './clients';
import { watchGetActiveNannies, watchGetAppointment, watchGetNannies } from './nannies';
import { watchDashboarChild, watchDashboarParentChild } from './childParent';

import { watchDashboarParent } from './parent';

export default function* rootSaga() {
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
    watchDashboarChild(),
    watchDashboarParentChild(),
    watchDashboarParent(),

  ]);
}
