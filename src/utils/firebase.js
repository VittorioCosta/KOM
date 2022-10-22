// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8UX_Y0TZ4xH8YpgOyS-InuDjY-nZ5crc",
  authDomain: "komoving-96b19.firebaseapp.com",
  projectId: "komoving-96b19",
  storageBucket: "komoving-96b19.appspot.com",
  messagingSenderId: "197068924864",
  appId: "1:197068924864:web:d55fa62145ee0b9b98ca25",
  measurementId: "G-1KYBK72PET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);