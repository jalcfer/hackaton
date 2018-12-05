import * as firebase from "firebase";

import { FirebaseConfig } from "../Config/Keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");

export const auth = firebase.auth()

export const db = firebase.firestore();
export const demandantesRef = db.collection('demandantes')
export const ofertantesRef = db.collection('usuarios')
//export const 