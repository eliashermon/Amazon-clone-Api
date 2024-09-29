import firebase from "firebase/compat/app"; // Default import for Firebase compat mode
import { getAuth } from "firebase/auth"; // Import Firebase v9 auth
import "firebase/compat/firestore"; // Import Firestore compat
import "firebase/compat/auth"; // Import Auth compat

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjPBjpnWqPyCLoZJvU2lNNuKife2ZQ-uE",
  authDomain: "clone-89755.firebaseapp.com",
  projectId: "clone-89755",
  storageBucket: "clone-89755.appspot.com",
  messagingSenderId: "842707941052",
  appId: "1:842707941052:web:bab37ed49d9a23e4b542b9",
  measurementId: "G-X21FSBCD7W",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); 
// Use compat mode to initialize Firebase
export const auth = getAuth(app); // Firebase v9 API
export const db = firebase.firestore(); // Use compat mode Firestore
