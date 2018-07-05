import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  static defaultProps = {
    todos: [
      // 할 일 항목을 포함하는 배열
      // {
      //   id: 1,
      //   body: '할 일 내용',
      //   complete: false
      // }
    ],
    onComplete: id => {}, // 할 일이 완료되었을 때 호출될 함수
    loading: false,
    errorMsg: null,
  };
  // 나중에 지울 예정
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }
  render() {
    const { todos, onComplete, onDelete, loading, errorMsg } = this.props;
    return loading ? (
      <div>loading...</div>
    ) : errorMsg ? (
      <div>{errorMsg}</div>
    ) : todos.length > 0 ? (
      <div>
        {todos.map(({ id, body, complete }) => (
          <TodoItem
            key={id}
            body={body}
            complete={complete}
            onComplete={() => {
              onComplete(id);
            }}
            onDelete={() => {
              onDelete(id);
            }}
          />
        ))}
      </div>
    ) : (
      <div>할 일이 없습니다.</div>
    );
  }
}
