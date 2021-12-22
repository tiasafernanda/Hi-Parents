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
  watchGetNannyProfile,
  watchUpdateNannyProfile,
  watchGetActiveNannies,
  watchGetAppointment,
  watchGetChildActivities,
  watchGetChildActivity,
  watchPostChildActivities,
  watchGetNannies,
} from './nannies';
import { watchDashboarChild, watchDashboarParentChild } from './childParent';

import { watchDashboarParent } from './parent';

export default function* rootSaga() {
  yield all([
    watchLoginNanny(),
    watchRegisterNanny(),
    watchChangePassword(),
    watchDashboarChild(),
    watchDashboarParentChild(),
    watchDashboarParent(),
    watchGetMainClients(),
    watchGetClients(),
    watchGetClientDetail(),
    watchGetActiveClients(),
    watchGetNannyProfile(),
    watchUpdateNannyProfile(),
    watchGetNannies(),
    watchGetActiveNannies(),
    watchGetAppointment(),
    watchGetChildActivity(),
    watchGetChildActivities(),
    watchPostChildActivities(),
  ]);
}
