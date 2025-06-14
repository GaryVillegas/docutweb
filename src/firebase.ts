
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDBrdyCJjBUJawut98qx-daMgDJ45sEWT8",
  authDomain: "docut-50409.firebaseapp.com",
  projectId: "docut-50409",
  storageBucket: "docut-50409.appspot.com", 
  messagingSenderId: "700839134495",
  appId: "1:700839134495:web:19c0203a6b49491ad89c2a"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


const auth = getAuth(app);


export { db, auth };
