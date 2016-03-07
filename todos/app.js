import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/root';
import TodoApp from './components/TodoApp';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
