import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList  from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

export default function TodoApp({ params }) {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList
        filter={params.filter || 'all'}
      />
      <Footer />
    </div>
  );
}
