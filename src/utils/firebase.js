import { getAuth} from "firebase/auth";

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuLEdlbDwBsrm-3sXQG5YlGLcqDTGhIZs",
  authDomain: "netflixgpt-b6688.firebaseapp.com",
  projectId: "netflixgpt-b6688",
  storageBucket: "netflixgpt-b6688.appspot.com",
  messagingSenderId: "963278832882",
  appId: "1:963278832882:web:7373601ee77cbeb7ef3c6b",
  measurementId: "G-P6DZQWTYYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();