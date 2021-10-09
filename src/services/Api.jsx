import firebase from 'firebase/compat/app'
import firebaseConfig from './firebaseConfig.js'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 

export default {
    // Abrindo popup de login
    fbPopup: async () =>{
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return result;
        
    },
    // Adicionando Usuario
    addUser:async(u) =>{
        await db.collection('users').doc(u.id).set({
            name:u.name,
            avatar:u.avatar
        },{merge:true});
    },

    // Pegando Lista de Contatos
    getContactList:async(userId)=>{
        let list = []
        let result = await db.collection('users').get();

        if(result.id !== userId){
            list.push({
                id:result.id,
                name:result.name,
                avatar:result.avater,
            });
        }
    }
};