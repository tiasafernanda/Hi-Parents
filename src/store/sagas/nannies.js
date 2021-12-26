import { put, takeEvery } from '@redux-saga/core/effects';
import {
  GET_NANNY_PROFILE_BEGIN,
  GET_NANNY_PROFILE_SUCCESS,
  GET_NANNY_PROFILE_FAIL,
  UPDATE_NANNY_PROFILE_BEGIN,
  UPDATE_NANNY_PROFILE_SUCCESS,
  UPDATE_NANNY_PROFILE_FAIL,
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
  // GET_NANNIES_ASC_BEGIN,
  // GET_NANNIES_ASC_SUCCESS,
  // GET_NANNIES_ASC_FAIL,
  PUT_MANAGE_CHILD_BEGIN,
  PUT_MANAGE_CHILD_SUCCESS,
  PUT_MANAGE_CHILD_FAIL,
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

function* getNannyProfile() {
  try {
    const res = yield axios.get(`${baseUrl}nannies/profile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: GET_NANNY_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_NANNY_PROFILE_FAIL,
      error: err,
    });
  }
}

function* updateNannyProfile(action) {
  const { body } = action;
  try {
    const res = yield axios.put(`${baseUrl}nannies/profile`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: UPDATE_NANNY_PROFILE_SUCCESS,
      payload: res.data,
    });
    const resProfile = yield axios.get(`${baseUrl}nannies/profile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: GET_NANNY_PROFILE_SUCCESS,
      payload: resProfile.data,
    });
  } catch (err) {
    yield put({
      type: UPDATE_NANNY_PROFILE_FAIL,
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
    console.log('child activities', res.data);
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
  const { body, appointment_id } = actions;
  try {
    const res = yield axios.post(`${baseUrl}activity`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: POST_CHILD_ACTIVITIES_SUCCESS,
    });
    const resActivities = yield axios.get(`${baseUrl}activity/${appointment_id}`);
    console.log('child activities', resActivities.data);
    yield put({
      type: GET_CHILD_ACTIVITIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: POST_CHILD_ACTIVITIES_FAIL,
      error: err,
    });
  }
}

// function* getNanniesAsc() {
//   try {
//     const res = yield axios.get(`${baseUrl}nannies?sort=${sort}`);
//     console.log(res);
//     yield put({
//       type: GET_NANNIES_SUCCESS,
//       payload: res.data,
//     });
//   } catch (err) {
//     yield put({
//       type: GET_NANNIES_FAIL,
//       error: err,
//     });
//   }
// }

function* putManageChild(action) {
  // const { payload } = action;
  // const data = payload;
  const { data } = action;
  const token = localStorage.getItem('token');
  try {
    const res = yield axios.put(`${baseUrl}children`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put({
      type: PUT_MANAGE_CHILD_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: UPDATE_STATUS_APPOINTMENT_FAIL,
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

export function* watchGetNannyProfile() {
  yield takeEvery(GET_NANNY_PROFILE_BEGIN, getNannyProfile);
}

export function* watchUpdateNannyProfile() {
  yield takeEvery(UPDATE_NANNY_PROFILE_BEGIN, updateNannyProfile);
}

export function* watchPutManageChild() {
  yield takeEvery(PUT_MANAGE_CHILD_BEGIN, putManageChild);
}
