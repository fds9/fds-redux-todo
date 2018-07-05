import { combineReducers, createStore } from 'redux';

const INCR = 'INCR';
const ZERO = 'ZERO';

const ADD_TODO = 'ADD_TODO';

let idCount = 1;

export function incr(amount) {
  return {
    type: INCR,
    amount,
  };
}

export function zero() {
  return {
    type: ZERO,
  };
}

export function addTodo(body) {
  return {
    type: ADD_TODO,
    body,
  };
}

function count(state = 0, action) {
  switch (action.type) {
    case INCR:
      return state + action.amount;
    case ZERO:
      return 0;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: idCount++,
          body: action.body,
          complete: false,
        },
      ];
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  todos: [],
}; // 관례
// redux store는 초기 상태를 만들 때
// state에 undefined,
// action에 빈 객체를 넣어 리듀서를 호출한다.
// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case INCR:
//     case ZERO:
//       return {
//         ...state,
//         count: count(state.count, action)
//       }
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: todos(state.todos, action)
//       }
//     default: // 관례
//       return state;
//   }
// }

// 작은 리듀서 여러 개를 만든 다음
// combineReducers를 사용해 합칠 수 있다.
const rootReducer = combineReducers({
  todos,
  count,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});
