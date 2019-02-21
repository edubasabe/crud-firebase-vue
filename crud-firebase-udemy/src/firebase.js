import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAfdrsImWS4tzGQqJqpLGbrfsxpF_-WPnw",
    authDomain: "crud-udemy-543d2.firebaseapp.com",
    databaseURL: "https://crud-udemy-543d2.firebaseio.com",
    projectId: "crud-udemy-543d2",
    storageBucket: "crud-udemy-543d2.appspot.com",
    messagingSenderId: "575752400203"
};
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({})

export default firebaseApp.firestore();
