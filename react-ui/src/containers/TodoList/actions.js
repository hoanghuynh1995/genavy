import { actions } from '../../constants';
export const addItem = item => {
  return {
    type: actions.TodoList.ADD_ITEM,
    item
  }
}

export const deleteItem = item => {
  return {
    type: actions.TodoList.DELETE_ITEM,
    item
  }
}