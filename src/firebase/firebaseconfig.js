// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQtkOV232ef92rl29zaOwbkloQAOgulSk",
  authDomain: "legendarymotorsport-d2e98.firebaseapp.com",
  projectId: "legendarymotorsport-d2e98",
  storageBucket: "legendarymotorsport-d2e98.appspot.com",
  messagingSenderId: "100409791167",
  appId: "1:100409791167:web:6b93af19932ce90b492c0a",
  measurementId: "G-LW1B9HKP27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);