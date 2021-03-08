import firebase from'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCNELqpUourQTpZJWxh5hKDU6fOBaQIwS8",
    authDomain: "restaurants-64a7a.firebaseapp.com",
    projectId: "restaurants-64a7a",
    storageBucket: "restaurants-64a7a.appspot.com",
    messagingSenderId: "945109887677",
    appId: "1:945109887677:web:afc1d185836169680be5d4"
  };

export const firebaseApp= firebase.initializeApp(firebaseConfig);