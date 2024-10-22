import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoghRUtA2ZJUBNcOsGDgn3hjxfm_LxXGk",
  authDomain: "react-commerce-12688.firebaseapp.com",
  projectId: "react-commerce-12688",
  storageBucket: "react-commerce-12688.appspot.com",
  messagingSenderId: "509770282500",
  appId: "1:509770282500:web:7701bb85e7a6422814a751",
  measurementId: "G-CF9THBCSHY"
};

export const firebaseApp = initializeApp(firebaseConfig);
// export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseDatabase = getFirestore(firebaseApp);
