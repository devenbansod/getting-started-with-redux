import React from 'react';
import { addTodo } from '../actions';

export default function AddTodo({ dispatch }) {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add todo
      </button>
    </div>
  );
}
