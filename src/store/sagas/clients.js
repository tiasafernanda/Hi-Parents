import { put, takeEvery } from '@redux-saga/core/effects';
import {
  GET_CLIENTS_BEGIN,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAIL,
  GET_ACTIVE_CLIENTS_BEGIN,
  GET_ACTIVE_CLIENTS_FAIL,
  GET_ACTIVE_CLIENTS_SUCCESS,
  GET_CLIENT_DETAIL_BEGIN,
  GET_CLIENT_DETAIL_FAIL,
  GET_CLIENT_DETAIL_SUCCESS,
} from '../actions/types';
import axios from 'axios';

const baseUrl = 'https://hi-parent-be.herokuapp.com/';

function* getClients() {
  try {
<<<<<<< HEAD
    const res = yield axios.get(`${baseUrl}appointments/fe/`);
=======
    const res = yield axios.get(`${baseUrl}appointments/dashboard`);
>>>>>>> 1ff5de4d7ad735f75446f666aa22388190915132
    console.log(res);
    yield put({
      type: GET_CLIENTS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_CLIENTS_FAIL,
      error: err,
    });
  }
}

function* getClientDetail(actions) {
  const { appointment_id } = actions;
  try {
<<<<<<< HEAD
    const res = yield axios.get(`${baseUrl}appointments/fe/${appointment_id}`);
=======
    const res = yield axios.get(`${baseUrl}appointments/detail/${appointment_id}`);
>>>>>>> 1ff5de4d7ad735f75446f666aa22388190915132
    console.log(res);
    yield put({
      type: GET_CLIENT_DETAIL_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_CLIENT_DETAIL_FAIL,
      error: err,
    });
  }
}

function* getActiveClients() {
  try {
    const res = yield axios.get(`${baseUrl}parents/active`);
    console.log(res);
    yield put({
      type: GET_ACTIVE_CLIENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_ACTIVE_CLIENTS_FAIL,
      error: err,
    });
  }
}

export function* watchGetClients() {
  yield takeEvery(GET_CLIENTS_BEGIN, getClients);
}

export function* watchGetClientDetail() {
  yield takeEvery(GET_CLIENT_DETAIL_BEGIN, getClientDetail);
}

export function* watchGetActiveClients() {
  yield takeEvery(GET_ACTIVE_CLIENTS_BEGIN, getActiveClients);
}
