import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "netflix-gptak.firebaseapp.com",
  projectId: "netflix-gptak",
  storageBucket: "netflix-gptak.appspot.com",
  messagingSenderId: "566762121276",
  appId: "1:566762121276:web:f0e72c9f5a0fc5d4213b39",
  measurementId: "G-TTX6MNL967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Analytics but don't export if not used yet
// const analytics = getAnalytics(app);

export { auth };