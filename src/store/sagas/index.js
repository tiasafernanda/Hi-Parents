import { all } from "redux-saga/effects";
import { watchLoginNanny } from "./auth";
import { watchRegisterNanny } from "./auth";

export default function* rootSaga() {
  yield all([watchLoginNanny(), watchRegisterNanny()]);
}
