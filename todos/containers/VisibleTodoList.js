import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      fetchTodos(this.props.filter).then(todos =>
        console.log(this.props.filter, todos)
      );
    }
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter,
  };
};

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList));
