import dayjs from "dayjs"
import nextId from "react-id-generator"
import { todoApi } from '../lib/api'
import { createAction, handleActions } from "redux-actions"
const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE ='todos/TOGGLE'
const GET_TODOS = 'sample/GET_TODOS'

export const changeInput = createAction(CHANGE_INPUT, input => input)

let order = 1
export const insert = createAction(INSERT, text => ({
  id: nextId(),
  text,
  order: order++,
  time: dayjs().format("YYYY-MM-DD H:mm:ss"),
  done:false,
}))

export const toggle = createAction(TOGGLE, id => id)


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

const initialState = {
  input:"",
  todos: [],
  data : null
}  

const todos = handleActions({
  [GET_TODOS]: (state, {payload: data}) => ({
    ...state,
    data : data
  })
}, initialState)

// const todos = handleActions({
//   [CHANGE_INPUT] : (state, {payload: input}) => ({
//     ...state,
//     input: input
//   }),
//   [INSERT] : (state, {payload: todo}) => ({
//     ...state,
//     todos: state.todos.concat(todo)
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