import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZY3g2sXQkv35gL3KINOuClbvyyQQg9CY",
    authDomain: "flames-56cb1.firebaseapp.com",
    projectId: "flames-56cb1",
    storageBucket: "flames-56cb1.appspot.com",
    messagingSenderId: "459311673602",
    appId: "1:459311673602:web:4ee242c73195bd1586121b",
    measurementId: "G-2L6BP0THS5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export {
    firebaseApp, auth, db,
};

export default firebaseConfig;
