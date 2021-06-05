import firebase from 'firebase';
//import firebase from '@firebase/app';
require('firebase/auth');
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACwGTTGSEHhLqx5SblDT2LDgzN8knIUNc",
    authDomain: "extream-exe.firebaseapp.com",
    projectId: "extream-exe",
    storageBucket: "extream-exe.appspot.com",
    messagingSenderId: "624385773985",
    appId: "1:624385773985:web:67f536b58396017c237be0",
    measurementId: "G-XFBWF054VV"
  };

  let app;
  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app()
  } 
  
  
  const db = app.firestore();
  const auth = firebase.auth();
  export  {db, auth};