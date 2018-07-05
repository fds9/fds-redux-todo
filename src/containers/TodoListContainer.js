import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { fetchTodos, deleteTodo } from '../ducks/todos';

function mapStateToProps(state) {
  return {
    todos: state.todos.items,
    loading: state.todos.loading,
    errorMsg: state.todos.errorMsg,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(fetchTodos());
    },
    onDelete: id => {
      dispatch(deleteTodo(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
