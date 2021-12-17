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
  GET_MAIN_CLIENTS_BEGIN,
  GET_MAIN_CLIENTS_FAIL,
  GET_MAIN_CLIENTS_SUCCESS,
} from '../actions/types';
import axios from 'axios';

const baseUrl = 'https://hi-parent-be.herokuapp.com/';

function* getMainClients() {
  try {
    const res = yield axios.get(`${baseUrl}appointments/dashboard`);
    console.log(res);
    yield put({
      type: GET_MAIN_CLIENTS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_MAIN_CLIENTS_FAIL,
      error: err,
    });
  }
}

function* getClients() {
  try {
    const res = yield axios.get(`${baseUrl}appointments/fe/`);
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
    const res = yield axios.get(`${baseUrl}appointments/detail/${appointment_id}`);
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

export function* watchGetMainClients() {
  yield takeEvery(GET_MAIN_CLIENTS_BEGIN, getMainClients);
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
