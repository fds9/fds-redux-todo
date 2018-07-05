import React, { Component } from 'react';

export default class TodoItem extends Component {
  static defaultProps = {
    complete: false, // 할 일 완료 여부
    body: '', // 할 일 내용
    onComplete: () => {}, // 할 일이 완료되었을 때 호출될 함수
    onDelete: () => {}, // 할 일이 삭제되었을 때 호출될 함수
  };
  handleComplete = e => {
    const { complete, onComplete } = this.props;
    if (!complete) onComplete();
  };
  render() {
    const { complete, body, onDelete } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={complete}
          onClick={this.handleComplete}
        />
        <span>{body}</span>
        <button onClick={onDelete}>삭제</button>
      </div>
    );
  }
}
