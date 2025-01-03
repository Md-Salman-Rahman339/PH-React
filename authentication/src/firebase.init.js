// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqkmmjfC9FIE6Uk9OKn98yp9VwTrhPK1c",
  authDomain: "auth-with-email-a8c89.firebaseapp.com",
  projectId: "auth-with-email-a8c89",
  storageBucket: "auth-with-email-a8c89.firebasestorage.app",
  messagingSenderId: "131550257585",
  appId: "1:131550257585:web:fcaef7ef79d76ee9e5dd90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth=getAuth(app)