import { put, takeEvery } from '@redux-saga/core/effects';
import { LOGINNANNY_BEGIN, LOGINNANNY_SUCCESS, LOGINNANNY_FAIL } from '../actions/types';
import axios from 'axios';

const baseUrl = 'https://hi-parent-be.herokuapp.com/';
//function generator
function* loginNanny(action) {
  const { body } = action;
  try {
    const res = yield axios.post(`${baseUrl}users/login`, body);
    console.log(res);
    yield put(
      {
        type: LOGINNANNY_SUCCESS,
      },
      localStorage.setItem('token', res.data.token) // setup token on local storage
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: LOGINNANNY_FAIL,
      error: err,
    });
  }
}

export function* watchLoginNanny() {
  yield takeEvery(LOGINNANNY_BEGIN, loginNanny);
}
