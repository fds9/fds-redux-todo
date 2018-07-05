import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

import TodoFormContainer from './containers/TodoFormContainer';
import TodoListContainer from './containers/TodoListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoFormContainer />
          <TodoListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
