import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoList from './TodoList';

storiesOf('TodoList', module)
  .add('empty', () => <TodoList />)
  .add('with todos', () => (
    <TodoList
      todos={[
        { id: 1, body: '할 일 1', complete: true },
        { id: 2, body: '할 일 2', complete: false },
      ]}
      onComplete={action('onComplete')}
    />
  ));
