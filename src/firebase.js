// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVL4CPbtd1Lh5LimvPHz2-g82DWDednQg",
  authDomain: "todo-app-cce4a.firebaseapp.com",
  projectId: "todo-app-cce4a",
  storageBucket: "todo-app-cce4a.appspot.com",
  messagingSenderId: "846105159058",
  appId: "1:846105159058:web:63a17e52dfade6dca58d4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);