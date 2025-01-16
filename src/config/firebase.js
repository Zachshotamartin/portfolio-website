// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6EgWpra0tzoVzMn8gWIyU57Mu3oaC5Z8",
  authDomain: "portfolio-website-6e154.firebaseapp.com",
  projectId: "portfolio-website-6e154",
  storageBucket: "portfolio-website-6e154.firebasestorage.app",
  messagingSenderId: "400154701927",
  appId: "1:400154701927:web:c851c05fd60db41d5ba4c2",
  measurementId: "G-FDFH6RBPLM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { storage, app, db };
