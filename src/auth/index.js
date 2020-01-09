import firebase from '../firebase';
import validation from './validation';

export default {
  signup() {

  },

  login(email, password) {

    // validation
    const errors = {};

    if (validation.isEmpty(email)) errors.email = 'Must not be empty.'
    else if (!validation.isEmail(email)) errors.email = 'Must be a valid email address.'

    if (validation.isEmpty(password)) errors.password = 'Must not be empty.'

    if (Object.keys(errors).length > 0) {
      return new Promise((resolve, reject)=>{
        reject(errors)
      })
    }
    // validation--

    let userId = null;
    let token = null;

    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        userId = data.user.uid;
        return data.user.getIdToken();
      })
      .then(idToken => {
        token = idToken
        return firebase.firestore().collection('users').doc(userId).get()
      })
      .then(doc => {
        const user = doc.data()
        return { user, token }
      })
      .catch(function (err) {
        if (err.code === 'auth/wrong-password') {
          throw {
            password: 'The password is invalid.'
          }
        }
        else if (err.code === 'auth/user-not-found') {
          throw {
            email: 'This email is not registered.'
          }
        }
        else {
          throw {
            code: err.code,
            general: err.message
          }
        }
      });
  }
}