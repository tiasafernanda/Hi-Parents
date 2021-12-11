import { all } from 'redux-saga/effects';
import { watchLoginNanny } from './auth';
import { watchRegisterNanny } from './auth';
import { watchGetActiveClients, watchGetClients } from './clients';
import { watchGetActiveNannies, watchGetAppointment, watchGetNannies } from './nannies';

export default function* rootSaga() {
  yield all([
    watchLoginNanny(),
    watchRegisterNanny(),
    watchGetClients(),
    watchGetActiveClients(),
    watchGetNannies(),
    watchGetActiveNannies(),
    watchGetAppointment(),
  ]);
}
