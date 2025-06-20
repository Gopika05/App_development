// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "bookworm-2b417.firebaseapp.com",
  projectId: "bookworm-2b417",
  storageBucket: "bookworm-2b417.appspot.com",
  messagingSenderId: "579431410856",
  appId: "1:579431410856:web:999fdcc82879b60ad6269d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
