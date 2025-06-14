// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBrdyCJjBUJawut98qx-daMgDJ45sEWT8",
  authDomain: "docut-50409.firebaseapp.com",
  projectId: "docut-50409",
  storageBucket: "docut-50409.appspot.com", // corregido el .appspot.com
  messagingSenderId: "700839134495",
  appId: "1:700839134495:web:19c0203a6b49491ad89c2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

// Export db and auth to use in your app
export { db, auth };
