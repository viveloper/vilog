import firebase from '../firebase';
import validation from './validation';

export default {
  signup(firstName, lastName, email, nickname, password, confirmPassword) {
    // validation
    const errors = {};

    if (validation.isEmpty(email)) errors.email = 'Must not be empty.'
    else if (!validation.isEmail(email)) errors.email = 'Must be a valid email address.'

    if (validation.isEmpty(password)) errors.password = 'Must not be empty.'
    if (validation.isEmpty(confirmPassword)) errors.confirmPassword = 'Must not be empty.'
    else if (password !== confirmPassword) errors.confirmPassword = 'Passwords must match.'

    if (validation.isEmpty(nickname)) errors.nickname = 'Must not be empty.'
    if (validation.isEmpty(firstName)) errors.firstName = 'Must not be empty.'
    if (validation.isEmpty(lastName)) errors.lastName = 'Must not be empty.'

    if (Object.keys(errors).length > 0) {
      return new Promise((resolve, reject) => {
        reject(errors);
      })
    }
    // validation--

    let token = null;
    let userId = null;
    let user = null;

    return firebase.firestore().collection('users').where('nickname', '==', nickname).get()
      .then(doc => {
        if (!doc.empty) {
          throw { code: 'auth/nickname-already-in-use' }
        }
        else {
          return firebase.auth().createUserWithEmailAndPassword(email, password)
        }
      })
      .then(data => {
        userId = data.user.uid;
        return data.user.getIdToken();
      })
      .then(idToken => {
        token = idToken;
        user = {
          firstName,
          lastName,
          email,
          nickname,
          isAdmin: false,
          createdAt: new Date().toISOString()
        }
        return firebase.firestore().collection('users').doc(userId).set(user);
      })
      .then(() => {
        return { user, token }
      })
      .catch(function (err) {
        if (err.code === 'auth/email-already-in-use') {
          throw {
            email: 'The email address is already in use'
          }
        }
        else if (err.code === 'auth/nickname-already-in-use') {
          throw {
            nickname: 'The nickname is already in use'
          }
        }
        else if (err.code === 'auth/weak-password') {
          throw {
            password: 'Password should be at least 6 characters'
          }
        }
        else {
          console.log(err);
          throw {
            general: err.message
          }
        }
      });
  },

  login(email, password) {
    // validation
    const errors = {};

    if (validation.isEmpty(email)) errors.email = 'Must not be empty.'
    else if (!validation.isEmail(email)) errors.email = 'Must be a valid email address.'

    if (validation.isEmpty(password)) errors.password = 'Must not be empty.'

    if (Object.keys(errors).length > 0) {
      return new Promise((resolve, reject) => {
        reject(errors);
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
  },

  logout() {
    firebase.auth().signOut();
  },

  checkAuth() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        // ...
        console.log('User is signed in.');
        console.log({
          displayName, 
          email,
          emailVerified,
          photoURL,
          isAnonymous,
          uid,
          providerData
        });
      }
      else {
        // User is signed out.
        // ...
        console.log('User is signed out.');
      }
    })
  }
}