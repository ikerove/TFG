import * as firebase from 'firebase/app'
//import { initializeApp } from "firebase/app";
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
import settings from './settings'


// Initialize Firebase
const app = firebase.initializeApp(settings);
//const firebaseApp = firebase.initializeApp(settings);
//app.firestore().settings({timestampsInSnapShots: true})

//export const db = firebaseApp.database();
export default app