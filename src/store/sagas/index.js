import { all } from 'redux-saga/effects';
import { watchLoginNanny, watchRegisterNanny } from './auth';
import { watchChangePassword } from './changePassword';
import { watchDashboarParentChild, watchDashboarChild } from './childParent';
import { watchGetDataParent, watchDashboarParent } from './parent';
import { watchGetDataChild } from './getChild';
import { watchChildActivityParent, watchChildActivityParentDetail } from './childAktivityParent';
import {
  watchGetActiveClients,
  watchGetClientDetail,
  watchGetClients,
  watchGetMainClients,
  watchUpdateStatusAppointment,
  watchGetClientAccepted,
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
  watchUpdateChildActivities,
  watchDeleteChildActivities,
  watchPaginationActivityNanny,
  watchPutManageChild,
} from './nannies';

export default function* rootSaga() {
  yield all([
    watchLoginNanny(),
    watchRegisterNanny(),
    watchChangePassword(),
    watchDashboarParentChild(),
    watchDashboarChild(),
    watchDashboarParent(),
    watchGetMainClients(),
    watchGetDataParent(),
    watchGetDataChild(),
    watchChildActivityParent(),
    watchGetClients(),
    watchGetClientDetail(),
    watchGetActiveClients(),
    watchGetNannyProfile(),
    watchUpdateNannyProfile(),
    watchGetNannies(),
    watchGetActiveNannies(),
    watchGetAppointment(),
    watchGetChildActivity(),
    watchPaginationActivityNanny(),
    watchGetChildActivities(),
    watchPostChildActivities(),
    watchDeleteChildActivities(),
    watchUpdateChildActivities(),
    watchUpdateStatusAppointment(),
    watchChildActivityParentDetail(),
    watchGetClientAccepted(),
    watchPutManageChild(),
  ]);
}
