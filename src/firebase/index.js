// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// your app's Firebase project configuration
import firebaseConfig from './config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;