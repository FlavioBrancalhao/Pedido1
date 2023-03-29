// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYxO44SdKT5sN5tgYlvMhA4Kn8SekuEnI",
  authDomain: "presta-servico.firebaseapp.com",
  projectId: "presta-servico",
  storageBucket: "presta-servico.appspot.com",
  messagingSenderId: "722077072278",
  appId: "1:722077072278:web:b300f7dfa82f0576e4fbb7",
  measurementId: "G-40P61WGRNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default getFirestore(app)


