import { combineReducers } from 'redux';

// reducers
import todos from './todos';
import user from './user';

export default combineReducers({
  todos,
  user
});

