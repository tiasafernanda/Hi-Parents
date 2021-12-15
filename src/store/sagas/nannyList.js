import { put, takeEvery } from '@redux-saga/core/effects';
import { GETNANNYLIST_BEGIN, GETNANNYLIST_SUCCES, GETNANNYLIST_FAIL } from '../actions/types';
import axios from 'axios';

const baseUrl = 'https://hi-parent-be.herokuapp.com';

function* nannyList() {
  try {
    const res = yield axios.get(`${baseUrl}nannies`);
    console.log(res);
    yield put({ type: GETNANNYLIST_SUCCES, payload: res.data.data });
  } catch (err) {
    console.log(err);
    yield put({ type: GETNANNYLIST_FAIL, error: err });
  }
}

export function* watchNannyList() {
  yield takeEvery(GETNANNYLIST_BEGIN, nannyList);
}
