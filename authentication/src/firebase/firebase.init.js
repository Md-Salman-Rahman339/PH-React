// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgOCPRN-qwsfmC_no-yQnqQfTjdZO50A0",
  authDomain: "simple-firebase-58168.firebaseapp.com",
  projectId: "simple-firebase-58168",
  storageBucket: "simple-firebase-58168.firebasestorage.app",
  messagingSenderId: "449407227168",
  appId: "1:449407227168:web:6903f2ef7850675de37345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);