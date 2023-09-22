/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6YpASEAFTmLubvNXPCXwwosJI_w66Ge8",
  authDomain: "nt8webapp.firebaseapp.com",
  projectId: "nt8webapp",
  storageBucket: "nt8webapp.appspot.com",
  messagingSenderId: "524350649280",
  appId: "1:524350649280:web:818d6a3db1db320ef84e25",
  measurementId: "G-EK776PYSBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
