// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5pmKHWrqBpbZajMq3Ct0iR1rhutX8uH8",
  authDomain: "inventory-manager-d4c5f.firebaseapp.com",
  projectId: "inventory-manager-d4c5f",
  storageBucket: "inventory-manager-d4c5f.appspot.com",
  messagingSenderId: "286738217022",
  appId: "1:286738217022:web:6b50c55034dc6c0474f96f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}