import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBKC3_upjHcGQHA0YQjcptW34BLlFCnTAw",
    authDomain: "snake-e3186.firebaseapp.com",
    databaseURL: "https://snake-e3186.firebaseio.com",
    projectId: "snake-e3186",
    storageBucket: "snake-e3186.appspot.com",
    messagingSenderId: "809035285720",
    appId: "1:809035285720:web:72f15d2da4a582e5b703ad"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
