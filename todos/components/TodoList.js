import React from 'react';
import Todo from './todo';

export default function TodoList({
  todos,
  onTodoClick
}) {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  );
}
