// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI8iXZIQmXPDYeLNCF-lsarCkA-vTZetY",
  authDomain: "auth-glasses-771d3.firebaseapp.com",
  projectId: "auth-glasses-771d3",
  storageBucket: "auth-glasses-771d3.appspot.com",
  messagingSenderId: "469078375842",
  appId: "1:469078375842:web:ac78321f3c58e1ac0fc6fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth