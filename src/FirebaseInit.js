import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"
import "firebase/compat/storage"
import "firebase/compat/analytics"

let config = {
  apiKey: "AIzaSyDPJ9N0DDyHx2_Mz7jsPXIIbxrDCsOefIQ",
  authDomain: "crows-nest-web.firebaseapp.com",
  projectId: "crows-nest-web",
  storageBucket: "crows-nest-web.appspot.com",
  messagingSenderId: "104182288688",
  appId: "1:104182288688:web:d5a3365ca401f1ba4df8f5",
  measurementId: "G-K15J05WVMQ"
}


firebase.initializeApp(config)
firebase.analytics();

export default firebase
