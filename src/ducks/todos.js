const CREATE = 'fds-redux-todo/todos/CREATE';
const COMPLETE = 'fds-redux-todo/todos/COMPLETE';

let count = 1;

const initialState = [{ id: count++, body: '할 일' }];

export function createTodo(body) {
  return {
    type: CREATE,
    body,
  };
}

export function completeTodo(id) {
  return {
    type: COMPLETE,
    id,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return [
        ...state,
        {
          id: count++,
          body: action.body,
        },
      ];
    case COMPLETE:
      return state.map(todo => {
        if (action.id === todo.id) {
          return {
            ...todo,
            complete: true,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}
