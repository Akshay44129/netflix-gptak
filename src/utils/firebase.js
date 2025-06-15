// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "netflix-gptak.firebaseapp.com",
  projectId: "netflix-gptak",
  storageBucket: "netflix-gptak.firebasestorage.app",
  messagingSenderId: "566762121276",
  appId: "1:566762121276:web:f0e72c9f5a0fc5d4213b39",
  measurementId: "G-TTX6MNL967"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();


export  {auth};