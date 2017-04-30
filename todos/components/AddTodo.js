import React from 'react';
import { addTodo } from '../actions';

export default function AddTodo({ dispatch }) {
  let input;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addTodo(input.value));
      input.value = '';
    }}>
      <input ref={node => {
        input = node;
      }} />
      <button>
        Add todo
      </button>
    </form>
  );
}
