// https://css-tricks.com/intro-firebase-react/
// https://firebase.google.com/docs/firestore/quickstart?authuser=1
// https://medium.com/technest/how-to-connect-firebase-cloud-firestore-to-your-react-app-1118fd182c60

// import * as firebase from 'firebase/app';
import firebase from 'firebase';
// import { firebase } from '@firebase/app';
import 'firebase/firestore';
// var firebase = require("firebase");
// require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBKC3_upjHcGQHA0YQjcptW34BLlFCnTAw",
    authDomain: "snake-e3186.firebaseapp.com",
    databaseURL: "https://snake-e3186.firebaseio.com",
    projectId: "snake-e3186",
    storageBucket: "snake-e3186.appspot.com",
    messagingSenderId: "809035285720",
    appId: "1:809035285720:web:72f15d2da4a582e5b703ad"
};
const app = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

const firebasedb = app.firestore();
export {firebasedb};
// export default firebasedb;
// export firebasedb;
// export const firebasedb = app.firestore();
// export const firebasedb = firebase.firestore();
