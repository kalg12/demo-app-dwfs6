// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "fir-app-dwfs6",
  storageBucket: "fir-app-dwfs6.appspot.com",
  messagingSenderId: "92232685569",
  appId: "1:92232685569:web:2cd7b3d81bebab500f8800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
