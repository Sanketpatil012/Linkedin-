
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuYG351L1-2zGwIPF10YTxX9npzShAknk",
    authDomain: "linkedin-f8dcc.firebaseapp.com",
    projectId: "linkedin-f8dcc",
    storageBucket: "linkedin-f8dcc.appspot.com",
    messagingSenderId: "665476263420",
    appId: "1:665476263420:web:ae1893db0ca361074ed679",
    measurementId: "G-EXL5SXKPS7"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
