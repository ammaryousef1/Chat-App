import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDdqmUSwixfqjrqiFcS8oDMZQwG9ZU70YU",
  authDomain: "chat-app-yt-77beb.firebaseapp.com",
  projectId: "chat-app-yt-77beb",
  storageBucket: "chat-app-yt-77beb.appspot.com",
  messagingSenderId: "233552020716",
  appId: "1:233552020716:web:8b635f7c91f733855cd1c9",
  measurementId: "G-0GB5LF72E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)