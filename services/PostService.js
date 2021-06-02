import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://restful-api-grail.herokuapp.com`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPosts() {
    return apiClient.get('/posts')
  },
  getPost(id) {
    return apiClient.get('/posts/' + id)
  },
}
