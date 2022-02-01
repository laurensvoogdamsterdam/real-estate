// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import {  GoogleAuthProvider } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC59My6YWfZZXLE6LzpFEYxMHagII5VqyA",
  authDomain: "brix-dev-001.firebaseapp.com",
  projectId: "brix-dev-001",
  storageBucket: "brix-dev-001.appspot.com",
  messagingSenderId: "554980094024",
  appId: "1:554980094024:web:3b965d0eb2904a1193687d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const signin = (email,password) => {
  signInWithEmailAndPassword(auth, email, password);
};

const signup = (email,password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

const signupWithGoogle = () => {
  console.log("google signup");
}

const signinWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth,googleProvider).then(response=>console.log(response)).catch((error) => alert(error.message));
}

const signupWithFacebook = () => {
  console.log("google signup");
}

const signinWithFacebook = () => {
  console.log("google signup");
}
const signout = () => {
  signOut(auth);
};

export default function useFirebase() {
  return {
    app,
    auth,
    signin,
    signup,
    signinWithGoogle,
    signupWithGoogle,
    signinWithFacebook,
    signupWithFacebook,
    signout,
  };
}
