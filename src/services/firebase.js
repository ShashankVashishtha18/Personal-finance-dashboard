// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTesZARy44Qx4cbyduT2mS3Apa6y3vz_Y",
  authDomain: "personal-finance-dashoard.firebaseapp.com",
  projectId: "personal-finance-dashoard",
  storageBucket: "personal-finance-dashoard.firebasestorage.app",
  messagingSenderId: "36790339455",
  appId: "1:36790339455:web:f43c43fdc8c8cfab4bfc4a",
  measurementId: "G-ZEF15SJV66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
