import React, { useEffect } from 'react';
import { Container } from 'reactstrap'
import TodoIncompleteList from './TodoIncompleteList';
import TodoInsert from './TodoInsert';

const TodoTemplate = ({input, todos, changeInput, insert, toggle}) => {
  useEffect(()=>{
    console.log(input,todos)
  },[input])
  return (
    <Container>
    <h1 style={{marginTop:"40px", fontWeight:"bold"}}>
      Todo Manager
    </h1> 
    <TodoInsert input={input} changeInput={changeInput} insert={insert}/>
    <div style={{ border:"2px solid gray", overflowY:"scroll", height:"25vw"}}>
    <TodoIncompleteList todos={todos} toggle={toggle} />
    </div>
    </Container>
  )
  }
export default TodoTemplate