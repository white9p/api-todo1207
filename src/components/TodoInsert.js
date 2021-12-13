import { Button, Col, Form, FormGroup, Input ,Label } from 'reactstrap';

const TodoInsert = ({ input, todo, getTodos, putTodo, changeInput}) => {
  const onChange = e => {changeInput(e.target.value)}
  const onSubmit = (e) => {
    e.preventDefault()
    putTodo(input)
    console.log("투두", todo);
    changeInput('')
  }
  return (
    <Form onSubmit={onSubmit} style={{marginTop:"40px"}}>
    <FormGroup row>
      <Label tag="h5" md={3} style={{paddingLeft:"200px"}}>Todo</Label>
      <Col md ={7}>
      <Input onChange={onChange} value={input}/>
      </Col>
      <Col md={1}>
      <Button type="submit">등록</Button>
      </Col >
    </FormGroup>
    </Form>
  );
};

export default TodoInsert;