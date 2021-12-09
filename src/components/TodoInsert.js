import { Button, Col, Form, FormGroup, Input ,Label } from 'reactstrap';

const TodoInsert = ({input, changeInput, insert}) => {
  const onChange = e => {changeInput(e.target.value)}
  const onSubmit = (e) => {
    e.preventDefault()
    insert(input)
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