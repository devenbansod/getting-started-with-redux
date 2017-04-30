import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList  from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

export default function TodoApp() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}
