import { all } from "redux-saga/effects";
import { watchLoginNanny } from "./auth";

export default function* rootSaga() {
  yield all([watchLoginNanny()]);
}
