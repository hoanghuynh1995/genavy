import { createStore } from "redux";

import {listReducer} from '../reducers';

const initialState = {
  counter: 0
}

const store = createStore(listReducer, initialState); 