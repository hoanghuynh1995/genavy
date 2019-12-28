import { all } from 'redux-saga/effects';
import { loginWatcherSaga } from './login'; 

export default function* rootSaga() {
  yield all([
    loginWatcherSaga()
  ])
}