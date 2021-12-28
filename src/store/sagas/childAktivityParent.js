import {
  GET_CHILDACTIVITYPARENT_BEGIN,
  GET_CHILDACTIVITYPARENT_SUCCESS,
  GET_CHILDACTIVITYPARENT_FAIL,
  GET_CHILDACTIVITYPARENT_DETAIL_BEGIN,
  GET_CHILDACTIVITYPARENT_DETAIL_FAIL,
  GET_CHILDACTIVITYPARENT_DETAIL_SUCCESS,
} from '../actions/types';

import axios from 'axios';
import { put, takeEvery } from '@redux-saga/core/effects';

const baseUrl = 'https://hi-parent-be.herokuapp.com';
//function generator

function* childActivityParent(action) {
  const { pages } = action;
  try {
    const res = yield axios.get(`${baseUrl}/parents/dashboard?page=${pages}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: GET_CHILDACTIVITYPARENT_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: GET_CHILDACTIVITYPARENT_FAIL,
      error: err,
    });
  }
}

function* childActivityParentDetail(action) {
  // const { id } = action;
  try {
    const res = yield axios.get(`${baseUrl}/parents/dashboard`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: GET_CHILDACTIVITYPARENT_DETAIL_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: GET_CHILDACTIVITYPARENT_DETAIL_FAIL,
      error: err,
    });
  }
}

export function* watchChildActivityParent() {
  yield takeEvery(GET_CHILDACTIVITYPARENT_BEGIN, childActivityParent);
}

export function* watchChildActivityParentDetail() {
  yield takeEvery(GET_CHILDACTIVITYPARENT_DETAIL_BEGIN, childActivityParentDetail);
}
