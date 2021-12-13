import dayjs from 'dayjs';
import React from 'react';
import { Card, CardImg, CardSubtitle, CardTitle, Form, FormGroup, Input, Label, Button, CardBody } from 'reactstrap';

const IncompleteCard = ({ order, title, done, id, time, removeTodo, toggle}) => {
  // const onToggle = () => { toggle(todoId) }
  console.log(done);
  return (
   <Card style={{
     maxWidth:"28%",
     minWidth:"28%", 
     padding:"14px",  
     border:"1px solid lightgray", 
     margin:"4px 0",
     borderRadius:"6px"}}>
     <CardImg src="https://picsum.photos/318/180" alt="Todo img"/>
     <CardBody>
     <Form>
     <FormGroup check inline >
     <Input type="checkbox" checked={done} onClick={()=>toggle(id,title,done,order)} readOnly/>
     <Label className="text-secondary" style={{fontSize:".85rem" ,marginBottom:"0"}}>수행완료</Label>
     </FormGroup>
     </Form>
     <CardTitle style={{fontSize:"1.2rem"}}>
      {title}
     </CardTitle>
     <CardSubtitle className="text-primary" style={{fontSize:".5rem"}}>
      {dayjs(time).format("YYYY-MM-DD HH:mm:ss")}
     </CardSubtitle>
     <Button onClick={()=>removeTodo(id)} size='sm' style={{marginTop:"10px"}}>삭제</Button>
     </CardBody>
   </Card>
  );
};

export default IncompleteCard;