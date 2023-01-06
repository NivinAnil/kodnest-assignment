// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNSb3ENabycQEQybhVSrUNQhytJyU1qb8",
    authDomain: "kodnest-dev.firebaseapp.com",
    projectId: "kodnest-dev",
    storageBucket: "kodnest-dev.appspot.com",
    messagingSenderId: "368723037845",
    appId: "1:368723037845:web:4bab8e2b02634d168d159c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;