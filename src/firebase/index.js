// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIQqRdWCzUUv9-eEwoWfA6fk9vn2kYbLY",
  authDomain: "flask-facerecognition.firebaseapp.com",
  databaseURL: "https://flask-facerecognition-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flask-facerecognition",
  storageBucket: "flask-facerecognition.appspot.com",
  messagingSenderId: "156287236891",
  appId: "1:156287236891:web:e900bb147217fedc2b71be",
  measurementId: "G-VS4EKM7VZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);