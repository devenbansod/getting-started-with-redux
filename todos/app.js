import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import configureStore from './configureStore';

const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false
  }]
};

const store = configureStore(persistedState);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
