import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoItem from './TodoItem';

storiesOf('TodoItem', module)
  .add('empty', () => <TodoItem />)
  .add('with text', () => (
    <TodoItem body="할 일" complete onComplete={action('onComplete')} />
  ));
