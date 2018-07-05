import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { fetchTodos } from '../ducks/todos';

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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
