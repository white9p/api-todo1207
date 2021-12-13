import axios from 'axios'


const url ='https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const headers ={  
  'content-type': 'application/json',
  'apikey': 'FcKdtJs202110',
  'username': 'bsd'}

export const todoApi ={
  async readTodos() {
    return await axios({
      url,
      method:'GET',
      headers,
    })
  },
  async addTodo(data) {
    return await axios({
      url,
      method:'POST',
      headers,
      data
    })
  },
  async deleteTodo(id) {
    return await axios({
      url: `${url}/${id}`,
      method: 'DELETE',
      headers,
    })
  },
  async toggleDone(id, data) {
    return await axios({
      url:`${url}/${id}`,
      method: `PUT`,
      headers,
      data,
    })
  }
}
 