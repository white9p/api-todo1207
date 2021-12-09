import React from 'react';
import { connect } from 'react-redux';
import TodoTemplate from '../components/TodoTemplate';
import { changeInput, insert, toggle } from '../modules/todos'
const TodoContainer = ({input, todos, changeInput, insert, toggle}) => {
  return (
    <div>
      <TodoTemplate input={input} todos={todos} changeInput={changeInput} insert={insert} toggle={toggle}/>
    </div>
  );
};

export default connect(
  state => ({
    input: state.todos.input,
    todos: state.todos.todos
  }),
  {
    changeInput,
    insert,
    toggle,
  }
)(TodoContainer)
