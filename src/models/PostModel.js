import axios from 'axios'
import { SERVER_BASE_URL } from '../constants'
import firebase from '../firebase'

export default {
  fetchPosts(section) {
    return firebase.firestore().collection('posts').where('section', '==', section).orderBy('createdAt', 'desc').get().then(snapshot => {
      const posts = [];
      snapshot.forEach(doc => {
        posts.push({
          ...doc.data(),
          id: doc.id
        })
      });
      return { posts };
    }).catch(error => {
      throw {
        code: error.code,
        message: error.message
      }
    })
  },

  fetchPost(section, id) {
    // todo
  },

  addPost(title, content, author, image, section) {
    return firebase.firestore().collection('posts').doc().set({
      title,
      content,
      author,
      image,
      section,
      createdAt: new Date().toISOString()
    }).then(() => {
      return { success: true };
    }).catch(error => {
      throw {
        code: error.code,
        message: error.message
      }
    })
  }
}