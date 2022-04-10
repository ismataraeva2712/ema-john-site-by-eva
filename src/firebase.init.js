// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB44G7ewzpyJHEOGC9ejG1i5NRdnUH4BpE",
    authDomain: "ema-john-simple-74adc.firebaseapp.com",
    projectId: "ema-john-simple-74adc",
    storageBucket: "ema-john-simple-74adc.appspot.com",
    messagingSenderId: "156002094279",
    appId: "1:156002094279:web:d5b5432bf5a96f3f9f82e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;