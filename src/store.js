import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import count from './ducks/count';
import todos from './ducks/todos';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  todos,
  count,
});

// 스토어
export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

store.subscribe(() => {
  console.log(store.getState());
});
