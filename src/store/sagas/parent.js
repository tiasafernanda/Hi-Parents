import { put, takeEvery } from "@redux-saga/core/effects";

import {
 PUT_PARENT_BEGIN,
 PUT_PARENT_SUCCESS,
 PUT_PARENT_FAIL,
} from "../actions/types";
import axios from "axios";

const baseUrl = "https://hi-parent-be.herokuapp.com";
//function generator
function* dashboarParent(action) {
  const { body } = action;
  try {
    const res = yield axios.put(`${baseUrl}/parents/`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(res);
    yield put({
      type: PUT_PARENT_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: PUT_PARENT_FAIL,
      error: err,
    });
  }
}

export function* watchDashboarParent() {
  yield takeEvery(PUT_PARENT_BEGIN, dashboarParent);
}
