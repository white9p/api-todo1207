import React, { useEffect } from 'react';
import { Container } from 'reactstrap'
import TodoIncompleteList from './TodoIncompleteList';
import TodoInsert from './TodoInsert';

const TodoTemplate = ({ input, todos, todo , getTodos, changeInput, putTodo, removeTodo,toggle}) => {
  useEffect(()=>{
    getTodos()
    console.log(input,"input");
    console.log(todo,"todo");
    console.log(todos,"todos");

  },[input])
  return (
    <Container>
    <h1 style={{marginTop:"40px", fontWeight:"bold"}}>
      Todo Manager
    </h1> 
    <TodoInsert 
      input={input} 
      todo={todo} 
      todos={todos} 
      putTodo={putTodo} 
      getTodos={getTodos} 
      changeInput={changeInput} 
      removeTodo={removeTodo}
      toggle={toggle} />
    <div style={{ border:"2px solid gray", overflowY:"scroll", height:"26vw"}}>
    <TodoIncompleteList input={input} todo={todo} todos={todos} getTodos={getTodos} removeTodo={removeTodo} toggle={toggle}/>
    </div>
    </Container>
  )
  }
export default TodoTemplate