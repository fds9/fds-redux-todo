const ADD_TODO = 'fds-redux-todo/todos/ADD_TODO';

let idCount = 1;

export function addTodo(body) {
  return {
    type: ADD_TODO,
    body,
  };
}

export default function todos(state = [], action) {
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
