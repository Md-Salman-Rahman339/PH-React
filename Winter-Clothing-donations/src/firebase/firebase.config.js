// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXavTZj1SvX84CZA3mHwmqRhtAgP_35U8",
  authDomain: "cloth-donations.firebaseapp.com",
  projectId: "cloth-donations",
  storageBucket: "cloth-donations.firebasestorage.app",
  messagingSenderId: "544828729706",
  appId: "1:544828729706:web:d08c7b95e6aa34a3f75d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;