import axios from 'axios';
import { put, takeEvery } from '@redux-saga/core/effects';

import {
  GET_GETDATACHILD_BEGIN,
  GET_GETDATACHILD_SUCCESS,
  GET_GETDATACHILD_FAIL,
} from '../actions/types';

const baseUrl = 'https://hi-parent-be.herokuapp.com';
function* getDataChild() {
  try {
    const res = yield axios.get(`${baseUrl}/children/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log('child', res);
    yield put({
      type: GET_GETDATACHILD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: GET_GETDATACHILD_FAIL,
      error: err,
    });
  }
}

export function* watchGetDataChild() {
  yield takeEvery(GET_GETDATACHILD_BEGIN, getDataChild);
}
