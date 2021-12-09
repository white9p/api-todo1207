import { createAction, handleActions } from 'redux-actions'
import { todoApi } from '../lib/api'

const GET_TODOS = 'sample/GET_TODOS'

const getTodos = () => dispatch => {
  
  todoApi.readTodos()
  .then(({data}) => {
    dispatch({ 
      type:GET_TODOS,
      payload: data
    })
  })
  .catch(error=> console.log(error))
  throw e
}

  

const sample = handleActions({
  [GET_TODOS]: 
})