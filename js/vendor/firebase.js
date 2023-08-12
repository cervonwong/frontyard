// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnCRLsBDkEZwt5uHIx6HFvS6vM4RxTN8U",
  authDomain: "frontyard-cervonwong.firebaseapp.com",
  projectId: "frontyard-cervonwong",
  storageBucket: "frontyard-cervonwong.appspot.com",
  messagingSenderId: "295600121687",
  appId: "1:295600121687:web:c91068fc175c46079a8012",
  measurementId: "G-W53CR1KYN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
