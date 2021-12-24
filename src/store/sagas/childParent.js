import { put, takeEvery } from "@redux-saga/core/effects";

import {
  POST_CHILD_BEGIN,
  POST_CHILD_SUCCESS,
  POST_CHILD_FAIL,
  POST_PARENTCHILD_BEGIN,
  POST_PARENTCHILD_SUCCESS,
  POST_PARENTCHILD_FAIL,
} from "../actions/types";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "https://hi-parent-be.herokuapp.com";
//function generator
function* dashboarChild(action) {
  const { body } = action;
  try {
    const res = yield axios.post(`${baseUrl}/children/`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(res);
    yield put({
      type: POST_CHILD_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_CHILD_FAIL,
      error: err,
    });
  }
}

function* dashboarParentChild(action) {
  const { body } = action;
  try {
    const res = yield axios.post(`${baseUrl}/appointments/submit`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(res);
    yield put({
      type: POST_PARENTCHILD_SUCCESS,
    });
    Swal.fire(
      res.data.message === "appointment submitted!" ? "Success" : "Error",
      res.data.message,
      res.data.message === "appointment submitted!" ? "success" : "error"
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_PARENTCHILD_FAIL,
      error: err,
    });
  }
}

export function* watchDashboarChild() {
  yield takeEvery(POST_CHILD_BEGIN, dashboarChild);
}

export function* watchDashboarParentChild() {
  yield takeEvery(POST_PARENTCHILD_BEGIN, dashboarParentChild);
}
