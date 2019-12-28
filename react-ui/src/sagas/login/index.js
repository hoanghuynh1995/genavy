import { takeLatest, put } from 'redux-saga/effects';
import { actions } from '../../constants';
import Axios from 'axios';

export const API_URL = 'https://cmpapi.jobsrefer.com';

function* loginEffectSaga (action) {
  let res;
  // try {
  //   res = yield Axios.request({
  //     method: 'post',
  //     url: `${API_URL}/rest-auth/login/`,
  //     data: { email: action.payload.email, password: action.payload.password },
  //   });
  // } catch (err) {
  //   yield put({
  //     type: actions.User.LOGIN_FAILED,
  //   })
  //   return;
  // }

  if (action.payload.email === 'huynhph@sendo.vn' && action.payload.password === '123456') {
    const generatedToken = 'generatedToken';
    yield put({
      type: actions.User.LOGIN_SUCCESS, payload: generatedToken, cb: action.payload.cb,
    })
  } else {
    yield put({
      type: actions.User.LOGIN_FAILED,
    })
  }
}

export function* loginWatcherSaga() {
  yield takeLatest(
    actions.User.LOGIN_REQUEST,
    loginEffectSaga,
  );
}