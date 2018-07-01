import { connect } from 'react-redux';
import { completeTodo } from '../ducks/todos';
import TodoList from '../components/TodoList';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onComplete: id => dispatch(completeTodo(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
