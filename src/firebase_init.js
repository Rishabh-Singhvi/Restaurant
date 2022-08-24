import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxP4djisEAlDqd_YcwhNgKFbwbcdG8e4g",
    authDomain: "restaurant-fd08f.firebaseapp.com",
    projectId: "restaurant-fd08f",
    storageBucket: "restaurant-fd08f.appspot.com",
    messagingSenderId: "264435528342",
    appId: "1:264435528342:web:b368c49163312b611bc8b7",
    measurementId: "G-L6WD1QE82P"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore;
export default firebase