import React from 'react';
import nextId from 'react-id-generator';
import { CardGroup } from 'reactstrap';
import IncompleteCard from './IncompleteCard';

const TodoIncompleteList = ({ todos, getTodos, removeTodo,toggle}) => {
  return (
    <CardGroup style={{ display:"flex", flexFlow:"wrap", justifyContent:"space-around"}}>
      {todos && todos.map(todo => 
        <IncompleteCard 
          key={nextId()} 
          id={todo.id} 
          order={todo.order} 
          title={todo.title} 
          done={todo.done} 
          time={todo.createdAt}
          removeTodo={removeTodo}
          toggle={toggle}/>)}
    </CardGroup>
  );
};

export default TodoIncompleteList;