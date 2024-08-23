// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd7dkLNZS-4r2jtXWQfWzTNIRAJvOmnmA",
  authDomain: "inclusao-social-ec3b0.firebaseapp.com",
  projectId: "inclusao-social-ec3b0",
  storageBucket: "inclusao-social-ec3b0.appspot.com",
  messagingSenderId: "699586735512",
  appId: "1:699586735512:web:89f266fdf35afc3df70fed",
  measurementId: "G-3SLRHWZSL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);