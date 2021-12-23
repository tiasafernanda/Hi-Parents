import {
  GET_CHILDACTIVITYPARENT_BEGIN,
  GET_CHILDACTIVITYPARENT_SUCCESS,
  GET_CHILDACTIVITYPARENT_FAIL,
} from "../actions/types";

import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";

const baseUrl = "https://hi-parent-be.herokuapp.com";
//function generator

function* childActivityParent() {
  try {
    const res = yield axios.get(`${baseUrl}/parents/dashboard`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(res);
    yield put({
      type: GET_CHILDACTIVITYPARENT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: GET_CHILDACTIVITYPARENT_FAIL,
      error: err,
    });
  }
}

export function* watchChildActivityParent() {
  yield takeEvery(GET_CHILDACTIVITYPARENT_BEGIN, childActivityParent);
}
