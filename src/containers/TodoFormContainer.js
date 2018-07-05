import { connect } from 'react-redux';

import TodoForm from '../components/TodoForm';

import { addTodo } from '../ducks/todos';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: body => {
      dispatch(addTodo(body));
    },
  };
}

export default connect(
  mapStateToProps, // redux state로부터 prop을 만들어내는 함수
  mapDispatchToProps // dispatch로부터 prop을 만들어내는 함수
)(TodoForm);
