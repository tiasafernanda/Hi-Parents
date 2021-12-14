import { put, takeEvery } from '@redux-saga/core/effects';
import {
  CHANGEPASSWORD_BEGIN,
  CHANGEPASSWORD_SUCCESS,
  CHANGEPASSWORD_FAIL,
} from '../actions/types';

import axios from 'axios';

const baseUrl = 'https://hi-parent-be.herokuapp.com';
//function generator
function* changePassword(action) {
  const { body } = action;
  console.log(body);
  try {
    const res = yield axios.put(`${baseUrl}/users/change-password`, body, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(res);
    yield put(
      {
        type: CHANGEPASSWORD_SUCCESS,
      }
      //   localStorage.setItem("token", res.data.token),
      //   localStorage.setItem("role", res.data.role),
      //   (window.location.href =
      //     localStorage.role === "Nanny"
      //       ? "/dashboard/nannydashboard "
      //       : "/dashboard/childactivity") // setup token on local storage
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: CHANGEPASSWORD_FAIL,
      error: err,
    });
  }
}

export function* watchChangePassword() {
  yield takeEvery(CHANGEPASSWORD_BEGIN, changePassword);
}
