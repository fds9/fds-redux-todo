import { connect } from 'react-redux';
import axios from 'axios';
import TodoList from '../components/TodoList';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
} from '../ducks/todos';

function mapStateToProps(state) {
  return {
    todos: state.todos.items,
    loading: state.todos.loading,
    errorMsg: state.todos.errorMsg,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: async function() {
      dispatch(fetchTodosRequest());
      try {
        const res = await axios.get('https://invincible-thyme.glitch.me/todos');
        dispatch(fetchTodosSuccess(res.data));
      } catch (e) {
        dispatch(fetchTodosFailure(e.message));
      }
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
