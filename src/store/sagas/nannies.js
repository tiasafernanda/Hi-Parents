import { put, takeEvery } from '@redux-saga/core/effects';
import {
  GET_NANNIES_BEGIN,
  GET_NANNIES_SUCCESS,
  GET_NANNIES_FAIL,
  GET_ACTIVE_NANNIES_BEGIN,
  GET_ACTIVE_NANNIES_FAIL,
  GET_ACTIVE_NANNIES_SUCCESS,
  GET_APPOINTMENT_BEGIN,
  GET_APPOINTMENT_FAIL,
  GET_APPOINTMENT_SUCCESS,
} from '../actions/types';
import axios from 'axios';

const baseUrl = 'https://hi-parent-be.herokuapp.com/';

function* getNannies() {
  try {
    const res = yield axios.get(`${baseUrl}nannies`);
    console.log(res);
    yield put({
      type: GET_NANNIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_NANNIES_FAIL,
      error: err,
    });
  }
}

function* getActiveNannies() {
  try {
    const res = yield axios.get(`${baseUrl}nannies/active-nannies`);
    console.log(res);
    yield put({
      type: GET_ACTIVE_NANNIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_ACTIVE_NANNIES_FAIL,
      error: err,
    });
  }
}

function* getAppointment() {
  try {
    const res = yield axios.get(`${baseUrl}appointments/newest`);
    console.log(res);
    yield put({
      type: GET_APPOINTMENT_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_APPOINTMENT_FAIL,
      error: err,
    });
  }
}

export function* watchGetNannies() {
  yield takeEvery(GET_NANNIES_BEGIN, getNannies);
}

export function* watchGetActiveNannies() {
  yield takeEvery(GET_ACTIVE_NANNIES_BEGIN, getActiveNannies);
}

export function* watchGetAppointment() {
  yield takeEvery(GET_APPOINTMENT_BEGIN, getAppointment);
}
