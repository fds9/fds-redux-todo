import { combineReducers, createStore } from 'redux';
import count from './ducks/count';
import todos from './ducks/todos';

const rootReducer = combineReducers({
  todos,
  count,
});

// 스토어
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});
