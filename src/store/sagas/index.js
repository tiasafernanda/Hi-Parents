import { all } from 'redux-saga/effects';
import { watchLoginNanny, watchRegisterNanny } from './auth';
import { watchChangePassword } from './changePassword';
import { watchDashboarParentChild, watchDashboarChild } from './childParent';
import { watchGetDataParent, watchDashboarParent } from './parent';
import { watchGetDataChild } from './getChild';
import { watchChildActivityParent, watchChildActivityParentDetail } from './childAktivityParent';
import { watchGetActiveClients, watchGetClientDetail, watchGetClients, watchGetMainClients, watchUpdateStatusAppointment } from './clients';
import { watchGetNannyProfile, watchUpdateNannyProfile, watchGetActiveNannies, watchGetAppointment, watchGetChildActivities, watchGetChildActivity, watchPostChildActivities, watchGetNannies } from './nannies';

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
    watchGetChildActivities(),
    watchPostChildActivities(),
    watchUpdateStatusAppointment(),
    watchChildActivityParentDetail(),
  ]);
}
