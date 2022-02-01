// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

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

const login = (email,password) => {
  signInWithEmailAndPassword(auth, email, password);
};
const logout = () => {
  signOut(auth);
};