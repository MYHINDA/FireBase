import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBILHKUej--i_-xVWttGgYt5M9M95rGAJw",
    authDomain: "myapp-f2573.firebaseapp.com",
    projectId: "myapp-f2573",
    storageBucket: "myapp-f2573.appspot.com",
    messagingSenderId: "1089550108232",
    appId: "1:1089550108232:web:97900852fc94077a08ba7d"
};
firebase.initializeApp(firebaseConfig);

export default firebase;