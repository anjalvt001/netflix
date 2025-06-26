import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
 

const firebaseConfig = {
  apiKey: "AIzaSyBBL_9EapCBUkdysfKEU4LIz1FnOAtJMMc",
  authDomain: "netflix-clone-6a7c6.firebaseapp.com",
  projectId: "netflix-clone-6a7c6",
  storageBucket: "netflix-clone-6a7c6.firebasestorage.app",
  messagingSenderId: "746147497320",
  appId: "1:746147497320:web:510ba53250e371c7ea82dd",
  measurementId: "G-FFW05SWVC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);