// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const FIREBASE_API_KEY = import.meta.env.FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: "AIzaSyCnV3XQ7pipC-2bZw51xdmR7jWW_KrKQaw",
  authDomain: "graywolf-blog.firebaseapp.com",
  projectId: "graywolf-blog",
  storageBucket: "graywolf-blog.appspot.com",
  messagingSenderId: "997176290926",
  appId: "1:997176290926:web:feb90f7accd511cc19807f",
  measurementId: "G-K4BP1E12QJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
