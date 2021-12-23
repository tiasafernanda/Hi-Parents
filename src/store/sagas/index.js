import { all } from "redux-saga/effects";
import { watchLoginNanny, watchRegisterNanny } from "./auth";
import { watchChangePassword } from "./changePassword";
import { watchDashboarParentChild, watchDashboarChild } from "./childParent";
import { watchGetDataParent, watchDashboarParent } from "./parent";
import { watchGetDataChild } from "./getChild";
import { watchChildActivityParent } from "./childAktivityParent";
import {
  watchGetActiveClients,
  watchGetClientDetail,
  watchGetClients,
} from "./clients";
import {
  watchGetActiveNannies,
  watchGetAppointment,
  watchGetNannies,
} from "./nannies";

export default function* rootSaga() {
  yield all([
    watchLoginNanny(),
    watchRegisterNanny(),
    watchChangePassword(),

    watchDashboarParentChild(),
    watchDashboarChild(),
    watchDashboarParent(),
    watchGetDataParent(),
    watchGetDataChild(),
    watchChildActivityParent(),


    watchGetClients(),
    watchGetClientDetail(),
    watchGetActiveClients(),
    watchGetNannies(),
    watchGetActiveNannies(),
    watchGetAppointment(),
  ]);
}
