import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBrdyCJjBUJawut98qx-daMgDJ45sEWT8",
  authDomain: "docut-50409.firebaseapp.com",
  projectId: "docut-50409",
  storageBucket: "docut-50409.firebasestorage.app",
  messagingSenderId: "700839134495",
  appId: "1:700839134495:web:19c0203a6b49491ad89c2a",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
