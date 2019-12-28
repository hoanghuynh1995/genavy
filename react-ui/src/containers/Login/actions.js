import { actions } from '../../constants';
import { user as userService} from '../../services';

export const login = (email, password, remember, cb) => {
  // const res = await userService.login(email, password);
  // if (res) {
  //   dispatch({
  //     type: actions.User.LOGIN_SUCCESS,
  //     username: res.username,
  //     token: res.token
  //   })
  // }
  // dispatch({
  //   type: actions.User.LOGIN_FAILED
  // });
  return {
    type: actions.User.LOGIN_REQUEST,
    payload: {
      email, password, remember, cb
    }
  }
}