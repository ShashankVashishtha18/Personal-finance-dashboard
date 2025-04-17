// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEpuPodCVrBaDFVE8mp--sPpPK2qPbHVw",
  authDomain: "finance-dashboard-b7ff2.firebaseapp.com",
  projectId: "finance-dashboard-b7ff2",
  storageBucket: "finance-dashboard-b7ff2.firebasestorage.app",
  messagingSenderId: "131358563991",
  appId: "1:131358563991:web:b1cf5fd73c2fe7038893d2",
  measurementId: "G-2R7J7KV3BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);