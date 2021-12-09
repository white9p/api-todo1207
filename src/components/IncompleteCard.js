import dayjs from 'dayjs';
import React from 'react';
import { Card, CardImg, CardSubtitle, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap';

const IncompleteCard = ({todoText, toggle, todoDone, todoId}) => {
  const onToggle = () => { toggle(todoId) }

  return (
   <Card style={{
     maxWidth:"28%",
     minWidth:"28%", 
     padding:"14px",  
     border:"1px solid lightgray", 
     margin:"4px 0",
     borderRadius:"6px"}}>
     <CardImg src="https://picsum.photos/318/180" alt="Todo img"/>
     <Form style={{marginTop:"14px"}}>
     <FormGroup check inline >
     <Input type="checkbox" onClick ={onToggle} checked={todoDone} readOnly/>
     <Label className="text-secondary" style={{fontSize:".85rem" ,marginBottom:"0"}}>수행완료</Label>
     </FormGroup>
     </Form>
     <CardTitle style={{fontSize:"1.2rem"}}>
      {todoText}
     </CardTitle>
     <CardSubtitle className="text-primary" style={{fontSize:"12px",fontSize:".5rem"}}>
      {dayjs().format("YYYY-MM-DD H:mm:ss")}
     </CardSubtitle>
   </Card>
  );
};

export default IncompleteCard;