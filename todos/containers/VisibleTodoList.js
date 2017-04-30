import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all'),
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
};

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;
