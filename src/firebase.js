import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBhNd1-Elj-K0rCrNX3IZp7LFPYpVjATU4",
  authDomain: "lunch-app-8c672.firebaseapp.com",
  databaseURL: "https://lunch-app-8c672.firebaseio.com",
  projectId: "lunch-app-8c672",
  storageBucket: "lunch-app-8c672.appspot.com",
  messagingSenderId: "373062674544"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
// only passing in google auth
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
