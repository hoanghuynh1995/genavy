import produce from 'immer';
import { actions } from '../constants';

const token = localStorage.getItem('userToken');
const initialState = {
  username: '',
  token: token,
  loggedInFailed: !!token,
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case actions.User.LOGIN_SUCCESS: {
        const { type, ...data } = action;
        console.log('LOGIN_SUCCESS', data);
        draft.token = data.payload;
        localStorage.setItem('userToken', data.payload);
        draft.loggedInFailed = false;
        // callback from component
        data.cb();
        break;
      }
      case actions.User.LOGIN_FAILED: {
        console.log('LOGIN_FAILED');
        draft.loggedInFailed = true;
        break;
      }
      default:
    }
  })
};