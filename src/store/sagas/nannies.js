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
  UPDATE_CHILD_ACTIVITIES_BEGIN,
  UPDATE_CHILD_ACTIVITIES_FAIL,
  UPDATE_CHILD_ACTIVITIES_SUCCESS,
  DELETE_CHILD_ACTIVITIES_BEGIN,
  DELETE_CHILD_ACTIVITIES_FAIL,
  DELETE_CHILD_ACTIVITIES_SUCCESS,
  PAGINATION_ACTIVITY_NANNY_BEGIN,
  PAGINATION_ACTIVITY_NANNY_FAIL,
  PAGINATION_ACTIVITY_NANNY_SUCCESS,
  GET_MAIN_CLIENTS_SUCCESS,
  // GET_NANNIES_ASC_BEGIN,
  // GET_NANNIES_ASC_SUCCESS,
  // GET_NANNIES_ASC_FAIL,
  PUT_MANAGE_CHILD_BEGIN,
  PUT_MANAGE_CHILD_SUCCESS,
  PUT_MANAGE_CHILD_FAIL,
} from '../actions/types';
import axios from 'axios';
import Swal from 'sweetalert2';
import { baseUrl } from './config';
import io from 'socket.io-client';

// const baseUrl = 'https://hi-parent-be.herokuapp.com/';

function* getNannies(action) {
  const { pages } = action;
  try {
    const res = yield axios.get(`${baseUrl()}/nannies?page=${pages}`);
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
    const res = yield axios.get(`${baseUrl()}/nannies/profile`, {
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
    const res = yield axios.put(`${baseUrl()}/nannies/profile`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: UPDATE_NANNY_PROFILE_SUCCESS,
      payload: res.data,
    });
    Swal.fire(
      res.data.message === 'Success Update Your Profile!' ? 'Success' : 'Info',
      res.data.message === 'Success Update Your Profile!' ? res.data.message : res.data[0],
      res.data.message === 'Success Update Your Profile!' ? 'success' : 'info'
    );
    const resProfile = yield axios.get(`${baseUrl()}/nannies/profile`, {
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
    const socket = io(`${baseUrl()}`);
    const res = yield axios.get(`${baseUrl()}/nannies/active-nannies`);
    socket.emit('refreshActiveNannies');
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
    const res = yield axios.get(`${baseUrl()}/appointments/newest`);
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
  const { data } = action;

  const token = localStorage.getItem('token');
  try {
    const res = yield axios.put(`${baseUrl()}/appointments/setStatus`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    Swal.fire('Success', res.data[0], 'success');
    yield put({
      type: UPDATE_STATUS_APPOINTMENT_SUCCESS,
    });
    const resMainClient = yield axios.get(`${baseUrl()}/appointments/dashboard`);
    console.log(resMainClient);
    yield put({
      type: GET_MAIN_CLIENTS_SUCCESS,
      payload: res.data.data,
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
    const res = yield axios.get(`${baseUrl()}/activity/fe?sort=ASC`);
    console.log(res);
    yield put({
      type: GET_CHILD_ACTIVITY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_CHILD_ACTIVITY_FAIL,
      error: err,
    });
  }
}

function* paginationActivityNanny(action) {
  const { pages } = action;
  try {
    const res = yield axios.get(`${baseUrl()}/activity/fe?page=${pages}&sort=ASC`);
    console.log(res);
    yield put({
      type: PAGINATION_ACTIVITY_NANNY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: PAGINATION_ACTIVITY_NANNY_FAIL,
      error: err,
    });
  }
}

function* getChildActivities(actions) {
  const { appointment_id } = actions;
  try {
    const res = yield axios.get(`${baseUrl()}/activity/${appointment_id}`);

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
    const res = yield axios.post(`${baseUrl()}/activity`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res);
    yield put({
      type: POST_CHILD_ACTIVITIES_SUCCESS,
    });
    Swal.fire(
      'Success',
      'Activity Created',
      'success',
      (window.location.href = '/dashboard/childactivity')
    );
    const resActivities = yield axios.get(`${baseUrl()}/activity/${appointment_id}`);
    console.log(resActivities);
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

function* updateChildActivities(actions) {
  const { body } = actions;
  try {
    const res = yield axios.put(`${baseUrl()}/activity`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    Swal.fire(
      'Success',
      'Activity Updated',
      'success',
      (window.location.href = '/dashboard/childactivity')
    );
    console.log(res);
    yield put({
      type: UPDATE_CHILD_ACTIVITIES_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: UPDATE_CHILD_ACTIVITIES_FAIL,
      error: err,
    });
  }
}

function* deleteChildActivities(actions) {
  const { body } = actions;
  let config = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  try {
    const res = yield axios({
      method: 'DELETE',
      url: 'https://hi-parent-be.herokuapp.com/activity',
      data: body,
      headers: config,
    });
    console.log(res);
    yield put({
      type: DELETE_CHILD_ACTIVITIES_SUCCESS,
    });
    Swal.fire('Success', 'Activity Deleted', 'success');
    const resActivities = yield axios.get(`${baseUrl()}/activity/fe?sort=ASC`);
    yield put({
      type: GET_CHILD_ACTIVITY_SUCCESS,
      payload: resActivities.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_CHILD_ACTIVITIES_FAIL,
      error: err,
    });
  }
}

function* putManageChild(action) {
  const { data } = action;
  const token = localStorage.getItem('token');
  try {
    const res = yield axios.put(`${baseUrl()}/children`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    yield put({
      type: PUT_MANAGE_CHILD_SUCCESS,
    });
    window.location.href = '/dashboard/nannylist';
  } catch (err) {
    yield put({
      type: PUT_MANAGE_CHILD_FAIL,
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

export function* watchPaginationActivityNanny() {
  yield takeEvery(PAGINATION_ACTIVITY_NANNY_BEGIN, paginationActivityNanny);
}

export function* watchGetChildActivities() {
  yield takeEvery(GET_CHILD_ACTIVITIES_BEGIN, getChildActivities);
}

export function* watchPostChildActivities() {
  yield takeEvery(POST_CHILD_ACTIVITIES_BEGIN, postChildActivities);
}

export function* watchUpdateChildActivities() {
  yield takeEvery(UPDATE_CHILD_ACTIVITIES_BEGIN, updateChildActivities);
}

export function* watchDeleteChildActivities() {
  yield takeEvery(DELETE_CHILD_ACTIVITIES_BEGIN, deleteChildActivities);
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
