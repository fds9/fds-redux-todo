import React, { Component } from 'react';

export default class TodoForm extends Component {
  state = {
    body: '',
  };

  static defaultProps = {
    onCreate: body => {},
  };

  handleChange = e => {
    this.setState({
      body: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state.body);
    this.setState({
      body: '',
    });
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={body} onChange={this.handleChange} />
          <button>추가</button>
        </label>
      </form>
    );
  }
}
