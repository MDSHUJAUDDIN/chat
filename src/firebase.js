import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFDHfwsqIjPmAJCc80Wh8QMiFQ4VVzoxw",
    authDomain: "chat-6ca49.firebaseapp.com",
    projectId: "chat-6ca49",
    storageBucket: "chat-6ca49.appspot.com",
    messagingSenderId: "246973130411",
    appId: "1:246973130411:web:e2702030bd580a0c3339ee"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()