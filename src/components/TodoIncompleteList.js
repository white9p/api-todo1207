import React from 'react';
import { CardGroup } from 'reactstrap';
import IncompleteCard from './IncompleteCard';

const TodoIncompleteList = ({todos, toggle}) => {
  return (
    <CardGroup style={{ display:"flex", flexFlow:"wrap", justifyContent:"space-around"}}>
      {todos.map(todo=><IncompleteCard key={todo.id} todoText={todo.text} toggle={toggle} todoDone={todo.done} todoId={todo.id}/>)}
    </CardGroup>
  );
};

export default TodoIncompleteList;