import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/app"
import "firebase/storage"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBPf5Kkl4BlQM6xwq0B5uDYL6WQ6P1ZLPc",
  authDomain: "webkit-test-19c74.firebaseapp.com",
  projectId: "webkit-test-19c74",
  storageBucket: "webkit-test-19c74.appspot.com",
  messagingSenderId: "173797992870",
  appId: "1:173797992870:web:e5f82f8069b05eda3d4767"
};

//export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();