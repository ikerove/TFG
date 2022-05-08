//import * as firebase from 'firebase/app'//PRINCIPAL
//import { initializeApp } from "firebase/app";
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
import settings from './settings'//PRINCIPAL
//import { getFirestore } from 'firebase/firestore/lite';
//import { getAuth } from "firebase/auth";
//import 'firebase/compat/storage';


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';




// Initialize Firebase
//const app = firebase.initializeApp(settings);//PRINCIPAL
//const firebaseApp = firebase.initializeApp(settings);
//app.firestore().settings({timestampsInSnapShots: true})

//export const db = firebaseApp.database();

//firebase.initializeApp(firebaseConfig);

  // Initialize Firebase
//const app = initializeApp(firebaseConfig);

//export default app//PRINCIPAL

firebase.initializeApp(settings);
var storage = firebase.storage();
  // Initialize Firebase
const app = initializeApp(settings);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };