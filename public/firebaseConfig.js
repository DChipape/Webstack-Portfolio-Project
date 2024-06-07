// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv3M1pPvk7XLbQSLRwQ1u5jDf9_3GkZgI",
  authDomain: "webstackportfolioproject.firebaseapp.com",
  projectId: "webstackportfolioproject",
  storageBucket: "webstackportfolioproject.appspot.com",
  messagingSenderId: "509467918309",
  appId: "1:509467918309:web:f97f72ce671f3b2188390c",
  measurementId: "G-0DHY1TX7Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);