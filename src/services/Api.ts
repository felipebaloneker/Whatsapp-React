import firebase from 'firebase/compat/app'
import firebaseConfig from './firebaseConfig'
import 'firebase/compat/auth';
import 'firebase/firebase-firestore'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 