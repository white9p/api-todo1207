import axios from 'axios'

const url ='https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const headers ={  
  'content-type': 'application/json',
  'apikey': 'FcKdtJs202110',
  'username': 'mjKim'}

export const todoApi ={
  async readTodos() {
    return await axios({
      url,
      method:'GET',
      headers,
    })
  },
  async addTodo() {
    return await axios({
      url,
      method:'POST',
      headers
    })
  }
}
 