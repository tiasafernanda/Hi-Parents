import { put, takeEvery } from '@redux-saga/core/effects';
import { LOGINNANNY_BEGIN, LOGINNANNY_SUCCESS, LOGINNANNY_FAIL } from '../actions/types';
import { REGISTERNANNY_BEGIN, REGISTERNANNY_SUCCESS, REGISTERNANNY_FAIL } from '../actions/types';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'https://hi-parent-be.herokuapp.com';
//function generator
function* loginNanny(action) {
  const { body } = action;
  try {
    const res = yield axios.post(`${baseUrl}/users/login`, body);

    console.log(res);
    yield put(
      {
        type: LOGINNANNY_SUCCESS,
      },
      localStorage.setItem('token', res.data.token),
      Swal.fire(
        'Success',
        'You Have Successfully Login',
        'success',
        (window.location.href =
          res.data.role === 'Nanny' ? '/dashboard/nannydashboard ' : '/dashboard/activityparent')
      )
    );
  } catch (err) {
    console.log(err);
    // Swal.fire('Error', 'Wrong email or password', 'error');
    yield put({
      type: LOGINNANNY_FAIL,
      error: err,
    });
  }
}

export function* watchLoginNanny() {
  yield takeEvery(LOGINNANNY_BEGIN, loginNanny);
}

function* registerNanny(action) {
  const { body } = action;
  try {
    const res = yield axios.post(`${baseUrl}/users/register`, body);
    console.log(res);
    yield put(
      {
        type: REGISTERNANNY_SUCCESS,
      },
      Swal.fire('Success', 'Your Account Has Been Successfully Created', 'success'),
      (window.location.href = '/auth/signin')
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: REGISTERNANNY_FAIL,
      error: err,
    });
  }
}

export function* watchRegisterNanny() {
  yield takeEvery(REGISTERNANNY_BEGIN, registerNanny);
}
