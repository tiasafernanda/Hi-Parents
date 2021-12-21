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
  GET_CHILD_ACTIVITY_BEGIN,
  GET_CHILD_ACTIVITY_FAIL,
  GET_CHILD_ACTIVITY_SUCCESS,
  UPDATE_STATUS_APPOINTMENT_BEGIN,
  UPDATE_STATUS_APPOINTMENT_FAIL,
  UPDATE_STATUS_APPOINTMENT_SUCCESS,
  GET_CHILD_ACTIVITIES_BEGIN,
  GET_CHILD_ACTIVITIES_FAIL,
  GET_CHILD_ACTIVITIES_SUCCESS,
  POST_CHILD_ACTIVITIES_BEGIN,
  POST_CHILD_ACTIVITIES_FAIL,
  POST_CHILD_ACTIVITIES_SUCCESS,
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

function* updateAppointmentStatus(action) {
  const { body } = action;
  try {
    const res = yield axios.put(`${baseUrl}appointments/setStatus`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: UPDATE_STATUS_APPOINTMENT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: UPDATE_STATUS_APPOINTMENT_FAIL,
      error: err,
    });
  }
}

function* getChildActivity() {
  try {
    const res = yield axios.get(`${baseUrl}activity/`);
    console.log(res);
    yield put({
      type: GET_CHILD_ACTIVITY_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_CHILD_ACTIVITY_FAIL,
      error: err,
    });
  }
}

function* getChildActivities(actions) {
  const { appointment_id } = actions;
  try {
    const res = yield axios.get(`${baseUrl}activity/${appointment_id}`);
    console.log(res);
    yield put({
      type: GET_CHILD_ACTIVITIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_CHILD_ACTIVITIES_FAIL,
      error: err,
    });
  }
}

function* postChildActivities(actions) {
  const { body } = actions;
  try {
    const res = yield axios.post(`${baseUrl}activity`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: POST_CHILD_ACTIVITIES_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: POST_CHILD_ACTIVITIES_FAIL,
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

export function* watchUpdateAppointmentStatus() {
  yield takeEvery(UPDATE_STATUS_APPOINTMENT_BEGIN, updateAppointmentStatus);
}

export function* watchGetChildActivity() {
  yield takeEvery(GET_CHILD_ACTIVITY_BEGIN, getChildActivity);
}

export function* watchGetChildActivities() {
  yield takeEvery(GET_CHILD_ACTIVITIES_BEGIN, getChildActivities);
}

export function* watchPostChildActivities() {
  yield takeEvery(POST_CHILD_ACTIVITIES_BEGIN, postChildActivities);
}
