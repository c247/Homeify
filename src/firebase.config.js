// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHVO6a6uD-7PbeV0Zjt8MhdHLW6hLFQn4",
  authDomain: "house-marketplace-app-ab57a.firebaseapp.com",
  projectId: "house-marketplace-app-ab57a",
  storageBucket: "house-marketplace-app-ab57a.appspot.com",
  messagingSenderId: "59453342181",
  appId: "1:59453342181:web:b380929e221536c271ef0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
