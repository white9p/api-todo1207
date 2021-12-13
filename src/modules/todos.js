import { todoApi } from '../lib/api'
import { createAction, handleActions } from "redux-actions"

const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const GET_TODOS = 'todos/GET_TODOS'
const ADD_TODO = 'todos/ADD_TODO'
const DELETE_TODO = 'todos/DELETE_TODO'
const TOGGLE = 'todos/TOGGLE'
export const changeInput = createAction(CHANGE_INPUT, input => input)
// export const toggle = createAction(TOGGLE, id => id)

//API
export const getTodos = () => dispatch => {
  todoApi.readTodos()
  .then(({data}) => {
    dispatch({ 
      type:GET_TODOS,
      payload: data
    })
  })
  .catch(error=> {
    console.log(error)
    throw error
  })
}

let order = 1
export const putTodo = (input) => dispatch => {
  todoApi.addTodo({"title": input, "order": order})
  .then(() => {
    dispatch({
      type:ADD_TODO,
      payload:{
        order: order++,
        title:input,
      }
    })
  })
}

export const removeTodo = (id) => dispatch => {
  todoApi.deleteTodo(id)
  .then(()=> {
    dispatch({
      type:DELETE_TODO,
      payload: id
    })
  })
}

export const toggle = (id,title,done,order) => dispatch => {
  todoApi.toggleDone(id,{"title":title,"done":done, "order":order})
  .then(()=>{
    dispatch({
      type: TOGGLE,
      payload: {
      id,
      data:{
        title:title,
        done:!done,
        order:order,
      }
    }
    })
  })
}

const initialState = {
  input:"",
  data : null
}  

const todos = handleActions({
  [CHANGE_INPUT] : (state, {payload: input}) => ({
    ...state,
    input: input
  }), 

  [GET_TODOS]: (state, {payload: data}) => ({
    ...state,
    data : data
  }),

  [ADD_TODO]: (state, {payload: todo}) => ({
    ...state,
    data: state.data.concat(todo)
  }),

  [DELETE_TODO] : (state, {payload: id}) => ({
    ...state,
    data: state.data.filter(d => d.id !== id)
  }),
  [TOGGLE]: (state, {payload:mydata}) => ({
    ...state, 
    data: state.data.map(d=> d.id === mydata.id? {...d, done: mydata.data.done} : d)
  })
}, initialState)

// const todos = handleActions({
//   [CHANGE_INPUT] : (state, {payload: input}) => ({
//     ...state,
//     input: input
//   }),

//   [TOGGLE] : (state, {payload: id}) => ({
//     ...state,
//     todos: state.todos.map(todo=> todo.id === id 
//       ? {...todo, done:!todo.done }
//       : todo)
//   })
// },
// initialState)

export default todos