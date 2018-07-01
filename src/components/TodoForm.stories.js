import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoForm from './TodoForm';

storiesOf('TodoForm', module).add('empty', () => (
  <TodoForm onCreate={action('onCreate')} />
));
