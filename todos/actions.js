import { v4 } from 'node-uuid';

const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};
