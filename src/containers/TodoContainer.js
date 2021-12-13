import React from 'react';
import { connect } from 'react-redux';
import TodoTemplate from '../components/TodoTemplate';
import { getTodos, changeInput,  putTodo, removeTodo, toggle} from '../modules/todos'
const TodoContainer = ({ input, data, todo, getTodos, changeInput, putTodo, removeTodo, toggle}) => {
  return (
    <div>
      <TodoTemplate 
        input={input}
        todos={data} 
        todo={todo} 
        putTodo={putTodo}  
        changeInput={changeInput} 
        getTodos={getTodos}
        removeTodo={removeTodo}
        toggle={toggle} />
    </div>
  );
};

export default connect(
  state => ({
    input: state.todos.input,
    todo: state.todos.todo,
    data: state.todos.data
  }),
  {
    getTodos,
    changeInput,
    putTodo,
    removeTodo,
    toggle,
  }
)(TodoContainer)
