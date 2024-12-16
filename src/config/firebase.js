// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAQ8Olh9-j5_DSTID9bgBBtXAh_igVZgk",
  authDomain: "portfolio-project-4946f.firebaseapp.com",
  projectId: "portfolio-project-4946f",
  storageBucket: "portfolio-project-4946f.firebasestorage.app",
  messagingSenderId: "893589861112",
  appId: "1:893589861112:web:69229e50aef835fde1810d",
  measurementId: "G-1RCCJ5YWEB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
