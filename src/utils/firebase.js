// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-a323f.firebaseapp.com",
  projectId: "netflixgpt-a323f",
  storageBucket: "netflixgpt-a323f.appspot.com",
  messagingSenderId: "1066964089459",
  appId: "1:1066964089459:web:49d160eec2a1b3fac3c806",
  measurementId: "G-M00NB0NSFP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authorize Firebase
export const auth = getAuth();
