import { connect } from 'react-redux';
import { createTodo } from '../ducks/todos';
import TodoForm from '../components/TodoForm';

function mapDispatchToProps(dispatch) {
  return {
    onCreate: body => dispatch(createTodo(body)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
