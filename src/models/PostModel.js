import axios from 'axios'
import { SERVER_BASE_URL } from '../constants'

export default {
  fetchPosts(section) {
    return axios.get(`${SERVER_BASE_URL}/api/posts/${section}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.data)
  },

  fetchPost(section, id) {
    return axios.get(`${SERVER_BASE_URL}/api/posts/${section}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.data)
  },

  addPost(title, content, author, image, section) {
    return axios.post(`${SERVER_BASE_URL}/api/posts/${section}`, {
      title,
      content,
      author,
      image
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.data)
  }
}