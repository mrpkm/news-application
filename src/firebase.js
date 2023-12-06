import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCde4IwHQlj03cntT7Q009_JFNPMdFQHLQ",
  authDomain: "news-efc31.firebaseapp.com",
  projectId: "news-efc31",
  storageBucket: "news-efc31.appspot.com",
  messagingSenderId: "403241978788",
  appId: "1:403241978788:web:1fcd5ce6c1df62487b4f31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);