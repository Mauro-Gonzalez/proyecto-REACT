import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBQtkOV232ef92rl29zaOwbkloQAOgulSk",
  authDomain: "legendarymotorsport-d2e98.firebaseapp.com",
  projectId: "legendarymotorsport-d2e98",
  storageBucket: "legendarymotorsport-d2e98.appspot.com",
  messagingSenderId: "100409791167",
  appId: "1:100409791167:web:6b93af19932ce90b492c0a",
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);