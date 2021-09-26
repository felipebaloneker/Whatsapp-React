import firebase from 'firebase/compat/app'
import firebaseConfig from './firebaseConfig'
import 'firebase/compat/auth';
import 'firebase/firebase-firestore'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 

export default {
    fbPopup: async () =>{
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return result;
    }
}