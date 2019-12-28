import produce from 'immer';
import { actions } from '../constants';

const initialState = []; // empty todo list

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case actions.TodoList.ADD_ITEM: {
        const {value, key} = action.item;
        draft.push({
          value, key
        })
        break;
      }
      case actions.TodoList.DELETE_ITEM: {
        const { key } = action.item;
        const indexFound = draft.findIndex(i => i.key === key);
        if (indexFound !== -1) {
          draft.splice(indexFound, 1);
        }
        break;
      }
      default:
    }
  })
};