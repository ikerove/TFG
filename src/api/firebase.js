import * as firebase from 'firebase/app'
//import { initializeApp } from "firebase/app";
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
import settings from './settings'
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import 'firebase/compat/storage';



// Initialize Firebase
const app = firebase.initializeApp(settings);
//const firebaseApp = firebase.initializeApp(settings);
//app.firestore().settings({timestampsInSnapShots: true})

//export const db = firebaseApp.database();

//firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
  // Initialize Firebase
//const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };
export default app